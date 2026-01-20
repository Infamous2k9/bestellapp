export class Dish {
    dish

    constructor(dishData) {
        this.dish = dishData
    }
    get id() {
        return this.dish.id
    }
    get name() {
        return this.dish.name
    }
    get description() {
        return this.dish.description
    }
    get price() {
        return this.dish.price
    }
    get category() {
        return this.dish.category
    }
    get image() {
        return this.dish.image
    }
}