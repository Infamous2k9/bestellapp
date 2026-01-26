import Toastify from 'toastify-js'
import { cart } from "./cart.js";
import { cartStore } from '../stores/cart.js';


export function addEventTrigger() {

    const additional = document.querySelectorAll("*[data-add-to-cart]")
    for (const element of additional) {
        const dishId = element.getAttribute("data-add-to-cart")

        element.addEventListener("click", () => {
            cart.addToCart(dishId);
            const dishName = cartStore.findDishById(dishId).name

            Toastify({
                text: dishName + " wurde zum Warenkorb hinzugefügt",
                duration: 1000,
                close: true,
                gravity: "bottom", // `top` or `bottom`
                position: "center", // `left`, `center` or `right`
                stopOnFocus: true, // Prevents dismissing of toast on hover
                offset: {
                    y: 80
                },
                className: "toast-test"
            }).showToast();






        })
    }
}

