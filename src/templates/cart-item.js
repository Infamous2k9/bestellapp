import { formatToCurrency } from "../utils/utlis"

export function renderCartItemHTML(cartItem) {
    return `
        <div class="cart-item" data-cart-item>
            <p class="cart-item__title">${cartItem.name}</p>
            <div>
                <div data-cart-item-amount>
                <button class="cart-item__del-btn" data-cart-del-btn=${cartItem.id}>-</button>
                <span>${cartItem.quantity}</span>
                <button class="cart-item__add-btn" data-cart-add-btn=${cartItem.id}>+</button>
                </div>
                <p class="cart-item__price">${formatToCurrency(cartItem.totalPrice)}</p>
            </div>
        </div>
    `
}