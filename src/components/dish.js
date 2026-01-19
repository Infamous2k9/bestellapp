import { cart } from "./cart.js";

export function addEventTrigger() {

    const additional = document.querySelectorAll("*[data-dish-additional]")

    additional.forEach((element, index) => {
        const addCartBtn = document.createElement('button')
        addCartBtn.innerHTML = "add to cart";
        addCartBtn.setAttribute("class", "dish__add-btn")

        addCartBtn.addEventListener('click', () => {

            cart.addCartItem(index)
        })

        element.appendChild(addCartBtn)
    })

}