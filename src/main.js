import "@styles/styles.scss";
import "@styles/base/_container.scss";
import { dishes, basket } from "@data/database";
import { addEventTrigger } from "./components/dish";
import { getItemHTML } from "./templates/dish";
import { Dish as DishModel } from "./models/dish.model";

const items = document.querySelector('*[data-item-list]')


function init() {
    items.innerHTML = ""
    for (const element of dishes) {
        items.innerHTML += getItemHTML(element)
    }
    addEventTrigger()






    let categories = []
    for (const dishData of dishes) {
        const dish = new DishModel(dishData)
        categories.push(dish.category)

    }

    const uniqueCategories = [...new Set(categories)]



    const dishesByCategory = getDishesByCategory(uniqueCategories)

    console.log(dishesByCategory);



}
init()

function getDishesByCategory(uniqueCategories) {
    return uniqueCategories.map((categoryName) => {
        const categoryDishes = dishes.filter((dish) => dish.category === categoryName)

        return {
            name: categoryName,
            dishes: categoryDishes
        }
    })
}