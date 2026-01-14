import { Dish as DishModel } from "../models/dish.model"
import { dishes } from "@data/database"
import { getCategoryHTML } from "../templates/category"
import { getDishHTML } from "../templates/dish"
import { addEventTrigger } from "./dish"


export const categories = {
    vars: {
        categories: [],
        uniqueCategories: []
    },
    init() {

        this.getFilteredDishesByCategory()
        this.getDishesByCategory()
        this.renderCategories()
    },

    getFilteredDishesByCategory() {

        return this.vars.uniqueCategories.map((categoryName) => {
            const categoryDishes = dishes.filter((dish) => dish.category === categoryName)

            return {
                name: categoryName,
                dishes: categoryDishes
            }
        })
    },

    getDishesByCategory() {
        for (const dishData of dishes) {
            const dish = new DishModel(dishData)
            this.vars.categories.push(dish.category)
        }
        // löscht alle duplikate raus und macht es zum "Array"
        this.vars.uniqueCategories = [...new Set(this.vars.categories)]

        const dishesByCategory = this.getFilteredDishesByCategory(this.vars.uniqueCategories)


        return dishesByCategory
    },

    renderCategories() {
        const categoriesHTML = document.querySelector('[data-category-list]')


        for (const category of this.getDishesByCategory()) {
            categoriesHTML.innerHTML += getCategoryHTML(category)
            for (const dish of category.dishes) {
                categoriesHTML.innerHTML += getDishHTML(dish)
            }
        }
        addEventTrigger()

    }
}