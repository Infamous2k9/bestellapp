
import { cartStore } from "../stores/cart.js";
import { cart } from "./cart.js";
import { toast } from "./toast.js";

export function addEventTrigger() {

    const additional = document.querySelectorAll("*[data-add-to-cart]")
    for (const element of additional) {
        const dishId = element.getAttribute("data-add-to-cart")

        element.addEventListener("click", () => {
            cart.addToCart(dishId);
            toast.showToast("Added")
        })
    }
}

