import { formatToCurrency } from "../utils/utlis"

export function renderCartItemHTML(cartItem, index) {
    return `
        <div class="cart-item" data-cart-item>
            <p class="cart-item__title">${cartItem.name}</p>
            <div>
                <div data-cart-item-amount>
                </div>
                <p class="cart-item__price">${formatToCurrency(cartItem.amountPrice)}</p>
            </div>
        </div>
    `
}

export function renderCartItemAdditinalHTML(cart) {
    return `
        <div class="cart__subtotal">
            <p>subtotal</p>
            <p>${formatToCurrency(cart.subTotal)}</p>
        </div>
        <div class="cart__delivery-fee">
            <p>Delivery Fee</p>
            <p>${formatToCurrency(cart.deliveryFeePrice)}</p>
        </div>
        <div class="cart__total">
            <p>total</p>
            <p>${formatToCurrency(cart.total)}</p>
        </div>
        <button class="cart__pay-btn" onclick="payCart()">Bezahlen</button> 
    `
}