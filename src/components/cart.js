
import { cartStore } from "../stores/cart.js"
import { renderCartItemHTML } from "../templates/cart-item.js"
import { renderCartAdditionalHTML, renderTrashbinHTML } from "../templates/cart-additional.js";
import Toastify from 'toastify-js';

const cartListRef = document.querySelector('[data-basket-list]')
const cartAdditionalRef = document.querySelector('[data-basket-prices]')
const cartCounterRef = document.querySelector('[data-cart-counter]')

export const cart = {
    init() {
        cartStore.init()
        this.renderCartList()
    },
    renderCartList() {
        let cartList = cartStore.getCartData()
        cartListRef.innerHTML = ""

        for (const element of cartList.cartItems) {
            cartListRef.innerHTML += renderCartItemHTML(element)
        }
        cartAdditionalRef.innerHTML = renderCartAdditionalHTML(cartList)
        this.addEventTrigger()

        if (cartListRef.innerHTML === "") {
            cartListRef.innerHTML = '<p class="empty-cart">Warenkorb ist leer</p>'
        }

        cartCounterRef.innerHTML = this.countAllItems()
    },

    addToCart(dishId) {
        cartStore.addToCart(dishId)
        this.renderCartList()
    },

    countAllItems() {
        let cartList = cartStore.getCartData()
        let counter = 0
        for (const item of cartList.cartItems) {
            counter += item.quantity
        }
        console.log(counter);

        return counter
    },

    addEventTrigger() {
        const cartDelBtnRefs = document.querySelectorAll('*[data-cart-del-btn]')
        const cartAddBtnRefs = document.querySelectorAll('*[data-cart-add-btn]')
        const trashbinBtnRef = document.querySelectorAll('*[data-cart-trashbin]')

        for (const trashBtn of trashbinBtnRef) {
            const currentAmount = trashBtn.getAttribute("data-cart-trashbin")

            if (currentAmount >= 2) {
                trashBtn.classList.toggle("d-none")
                trashBtn.addEventListener("click", () => {
                    this.deleteCartItem(trashBtn.getAttribute("data-trash-id"))
                })
            }
        }

        for (const decreaseBtn of cartDelBtnRefs) {
            const dishId = decreaseBtn.getAttribute("data-cart-del-btn")

            if (decreaseBtn.getAttribute("data-cart-item-current-amount") == "1") {
                decreaseBtn.innerHTML = renderTrashbinHTML()
            }

            decreaseBtn.addEventListener("click", () => {
                cartStore.changeQuantity(dishId, 'decrease')
                this.renderCartList()
            })
        }

        for (const increaseBtn of cartAddBtnRefs) {
            const dishId = increaseBtn.getAttribute("data-cart-add-btn")
            increaseBtn.addEventListener("click", () => {
                cartStore.changeQuantity(dishId, 'increase')
                this.renderCartList()
            })
        }

        const takeInRef = document.getElementById("takeIn")
        const takeOutRef = document.getElementById("takeOut")

        takeInRef.addEventListener("change", () => {
            if (takeInRef.checked) {
                cartStore.setDeliveryType("takeIn")
                this.renderCartList()
            }
        })
        takeOutRef.addEventListener("change", () => {
            if (takeOutRef.checked) {
                cartStore.setDeliveryType("takeOut")
                this.renderCartList()
            }
        })

        const checkoutRef = document.querySelector("*[data-cart-checkout]")

        checkoutRef.addEventListener("click", () => {
            Toastify({
                text: "Vielen dank für deinen Einkauf!",
                duration: 2000,
                close: true,
                gravity: "bottom", // `top` or `bottom`
                position: "center", // `left`, `center` or `right`
                stopOnFocus: true, // Prevents dismissing of toast on hover
                offset: {
                    y: 80
                },
                avatar: "./assets/icons/checkout.png",
                className: "toast-test"
            }).showToast();
            cartStore.clearCart()
            this.renderCartList()
        })
    },

    deleteCartItem(dishId) {
        let cartList = cartStore.getCartData()
        for (const element of cartList.cartItems) {
            if (element.id == dishId) {
                cartList.cartItems = cartList.cartItems.splice(cartStore.findCartItemIndex(dishId), 1)
            }
        }
        this.renderCartList()
    },

}