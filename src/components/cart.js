import { renderCartItemHTML, renderCartItemAdditinalHTML } from "../templates/cart.js"

import { dishes } from "../data/database.js"



export const cart = {
    vars: {
        deliveryFee: true,
        deliveryFeeAmount: 4.99,
        cartDishes: [],
        prices: {
            subTotal: 0,
            deliveryFeePrice: 4.99,
            total: 0
        }
    },
    save() {
        const cartdata = {
            cartItems: this.vars.cartDishes,
            subTotal: this.vars.prices.subTotal,
            total: this.vars.prices.total
        }
        localStorage.setItem("cart", JSON.stringify(cartdata))
    },

    isThere(index) {
        return this.vars.cartDishes.find((dish) => dish.name == dishes[index].name)
    },
    getCartItemIndex(index) {
        return this.vars.cartDishes.findIndex((dish) => dish.name == dishes[index].name)
    },
    addCartItem(index) {
        let newCartItem = {
            amount: 1,
            name: dishes[index].name,
            price: dishes[index].price,
        }
        newCartItem.amountPrice = newCartItem.amount * newCartItem.price
        const isInCart = this.isThere(index)
        if (isInCart) {
            const cartIndex = this.getCartItemIndex(index)
            this.increaseAmount(this.vars.cartDishes[cartIndex])
        } else {
            this.vars.cartDishes.push(newCartItem)
        }

        // if (this.vars.cartDishes.length > 0) {
        //     for (const element of this.vars.cartDishes) {
        //         if (element.name == dishes[index].name) {
        //             console.log("vorhanden");
        //             this.increaseAmount(this.vars.cartDishes.indexOf(element))
        //         } else {
        //             this.vars.cartDishes.push(newCartItem)
        //         }
        //     }
        // } else {
        //     this.vars.cartDishes.push(newCartItem)
        // }
        this.save()
        this.getCart()
    },

    getCart() {
        this.vars.prices.subTotal = 0;
        this.vars.prices.total = 0;

        const feeTypes = document.querySelectorAll('*[data-basket-delivery-fee]');

        feeTypes.forEach((element) => {
            element.addEventListener("change", () => {
                this.changeDeliveryFee();
            });
        });

        let cartListRef = document.querySelector('[data-basket-list]')
        let cartPricesRef = document.querySelector('[data-basket-prices]')
        cartListRef.innerHTML = ""
        for (const element of this.vars.cartDishes) {
            cartListRef.innerHTML += renderCartItemHTML(element, this.vars.cartDishes.indexOf(element))
            this.calculateAdditional(element, this.vars.deliveryFee)
            cartPricesRef.innerHTML = renderCartItemAdditinalHTML(this.vars.prices)
        }
        this.addEventTriggerToItem()

    },

    calculateAdditional(element, fee) {
        this.vars.prices.subTotal += element.amountPrice

        if (fee) {
            this.vars.prices.total = this.vars.prices.deliveryFeePrice + this.vars.prices.subTotal
        } else {
            this.vars.prices.total = this.vars.prices.subTotal
        }
    },

    decreaseAmount(index) {
        this.vars.cartDishes[this.getCartItemIndex(index)].amount -= 1
        if (this.vars.cartDishes[this.getCartItemIndex(index)].amount <= 0) {
            this.deleteCartItem(index)
        } else {
            this.getCart()
        }
    },

    increaseAmount(index) {
        this.vars.cartDishes[this.getCartItemIndex(index)].amount += 1
        this.getCart()
    },

    deleteCartItem(index) {
        this.vars.cartDishes.splice(this.getCartItemIndex(index), 1)
        this.getCart()
    },

    //done by chatty
    changeDeliveryFee() {
        let selected = document.querySelector("input[name=delivery-type]:checked")

        // String → Boolean umwandeln
        this.vars.deliveryFee = selected.value === "true";

        // Lieferkosten setzen

        this.vars.prices.deliveryFeePrice = this.vars.deliveryFee ? this.vars.deliveryFeeAmount : 0


        this.vars.cartDishes.forEach(element => {
            this.calculateAdditional(element, this.vars.deliveryFee);
        });

        // Cart neu rendern
        this.getCart();

        //kein plan why????

    },

    addEventTriggerToItem() {
        let cartItemsRef = document.querySelectorAll("*[data-cart-item-amount]")
        cartItemsRef.forEach((element, index) => {

            let delBtn = document.createElement("button")
            delBtn.innerHTML = "-"
            delBtn.classList.add("cart-item__delete-btn")
            delBtn.addEventListener("click", () => {
                this.decreaseAmount(index)
            })
            let addBtn = document.createElement("button")
            addBtn.innerHTML = "+"
            addBtn.classList.add("cart-item__delete-btn")
            addBtn.addEventListener("click", () => {
                this.increaseAmount(index)
            })
            let itemAmount = document.createElement("span")
            itemAmount.innerHTML = this.vars.cartDishes[index].amount
            element.appendChild(delBtn)
            element.appendChild(itemAmount)
            element.appendChild(addBtn)
        })

    },

}