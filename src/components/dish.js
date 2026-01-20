import { cartStore } from "../stores/cart.js";
import { cart } from "./cart.js";

export function addEventTrigger() {

    const additional = document.querySelectorAll("*[data-add-to-cart]")

    for (const element of additional) {
        element.addEventListener("click", () => {
            cart.addToCart(element.getAttribute("data-add-to-cart"));

        })
    }



}