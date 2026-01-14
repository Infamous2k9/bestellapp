import { formatToCurrency } from "../utils/utlis.js"

export function getItemHTML(item) {
    return `
    <article class="dish">
        <figure class="dish__thumb">
            <img class="dish__image" src="${item.image}" alt="${item.name} Image">
        </figure>

        <div class="dish__text">
            <h3 class="dish__name">${item.name}</h3>
            <p class="dish__description">${item.description}</p>
        </div>

        <div class="dish__additional" data-dish-additional>
            <p class="dish__price">${formatToCurrency(item.price)}/p>
        </div>
    </article>
    `
}