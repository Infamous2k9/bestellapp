import { renderCartItemHTML, renderCartItemAdditinalHTML } from "../templates/cart.js"

import { dishes } from "../data/database.js"



export const cart = {
    vars: {
        deliveryFee: true,
        cartDishes: [],
        prices: {
            subTotal: 0,
            deliveryFeePrice: 4.99,
            total: 0
        }
    },

    addCartItem(index) {
        let newCartDish = {
            amount: 1,
            name: dishes[index].name,
            price: dishes[index].price,
            amountPrice: 1 * dishes[index].price
        }
        this.vars.cartDishes.push(newCartDish)
        this.getCart()
    },

    getCart() {
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
        this.vars.cartDishes[index].amount -= 1
        if (this.vars.cartDishes[index].amount <= 0) {
            this.deleteCartItem(index)
        } else {
            this.vars.cartDishes[index].amountPrice = this.calculateAmountPrice(this.vars.cartDishes[index].price, this.vars.cartDishes[index].amount)
            this.getCart()
        }
    },

    increaseAmount(index) {
        this.vars.cartDishes[index].amount += 1
        this.vars.cartDishes[index].amountPrice = this.calculateAmountPrice(this.vars.cartDishes[index].price, this.vars.cartDishes[index].amount)
        this.getCart()
    },

    deleteCartItem(index) {
        this.vars.cartDishes.splice(index, 1)
        this.getCart()
    },

    calculateAmountPrice(price, amount) {
        return price * amount
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