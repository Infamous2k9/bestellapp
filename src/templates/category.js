import { getDishHTML } from "./dish"

export function getCategoryHTML(category) {
    return `
        <section class="category__wrapper" data-category-dishes>
            <h2 class="category__name" >${category.name}</h2>
            ${category.dishes.map((dish) =>(
                `${getDishHTML(dish)}`
            )).join('')}
        </section>
    `
}