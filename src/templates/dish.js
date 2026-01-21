import { formatToCurrency } from "../utils/utlis.js"

export function getDishHTML(dish) {
    return `
    <article class="dish">
        <figure class="dish__thumb">
            <img class="dish__image" src="${dish.image}" alt="${dish.name} Image">
        </figure>

        <div class="dish__text">
            <h3 class="dish__name">${dish.name}</h3>
            <p class="dish__description">${dish.description}</p>
        </div>

        <div class="dish__additional" data-dish-additional>
            <p class="dish__price">${formatToCurrency(dish.price)}</p>
            <button class="dish__add-btn" data-add-to-cart=${dish.id}>Hinzufügen</button>
        </div>
    </article>
    `
}