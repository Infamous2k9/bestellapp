import { Dish as DishModel } from "../models/dish.model"
import { dishes } from "@data/database"

export const categories = {
    vars: {
        categories: [],
        uniqueCategories: []
    },
    init() {
        this.getFilteredDishesByCategory(this.uniqueCategories)
        this.getDishesByCategory()
    }
}


export function getFilteredDishesByCategory(uniqueCategories) {

    return uniqueCategories.map((categoryName) => {
        const categoryDishes = dishes.filter((dish) => dish.category === categoryName)

        return {
            name: categoryName,
            dishes: categoryDishes
        }
    })
}

export function getDishesByCategory() {
    for (const dishData of dishes) {
        const dish = new DishModel(dishData)
        this.categories.push(dish.category)

    }
    // löscht alle duplikate raus und macht es zum "Array"
    const uniqueCategories = [...new Set(categories)]

    const dishesByCategory = getFilteredDishesByCategory(uniqueCategories)

    return dishesByCategory
}