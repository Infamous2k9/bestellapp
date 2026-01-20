
import { cartStore } from "../stores/cart.js"
import { renderCartItemHTML } from "../templates/cart-item.js"
import { renderCartAdditionalHTML } from "../templates/cart-additional.js"

const cartListRef = document.querySelector('[data-basket-list]')
const cartAdditionalRef = document.querySelector('[data-basket-prices]')

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
    },

    addToCart(dishId) {
        cartStore.addToCart(dishId)
        this.renderCartList()
    },
    addEventTrigger() {
        const cartDelBtnRefs = document.querySelectorAll('*[data-cart-del-btn]')
        const cartAddBtnRefs = document.querySelectorAll('*[data-cart-add-btn]')

        for (const decreaseBtn of cartDelBtnRefs) {
            const dishId = decreaseBtn.getAttribute("data-cart-del-btn")
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

        })
    }
}