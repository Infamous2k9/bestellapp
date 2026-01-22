import { formatToCurrency } from "../utils/utlis"

export function renderCartItemHTML(cartItem) {
    return `
        <div class="cart-item" data-cart-item>
            <p class="cart-item__title">${cartItem.quantity}x ${cartItem.name}</p>
            <div class="cart-item__additional">
                <div data-cart-item-amount>
                    <div class="cart-item__amount">
                        <button class="cart-item__del-btn" data-cart-del-btn=${cartItem.id} data-cart-item-current-amount=${cartItem.quantity}>-</button>
                        <span data-cart-item-current-amount=${cartItem.quantity}>${cartItem.quantity}</span>
                        <button class="cart-item__add-btn" data-cart-add-btn=${cartItem.id}>+</button>
                    </div>
                </div>
                <p class="cart-item__price">${formatToCurrency(cartItem.totalPrice)}</p>
            </div>
        </div>
    `
}