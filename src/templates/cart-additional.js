import { formatToCurrency } from "../utils/utlis"

export function renderCartAdditionalHTML(cart) {
    return `
        <div class="cart__subtotal">
            <p>Zwischensumme</p>
            <p>${formatToCurrency(cart.total - cart.deliveryFee)}</p>
        </div>
        <div class="cart__delivery-fee">
            <p>Lieferung</p>
            <p>${formatToCurrency(cart.deliveryFee)}</p>
        </div>
        <div class="cart__total">
            <p>Gesamt</p>
            <p>${formatToCurrency(cart.total)}</p>
        </div>
        <button class="cart__pay-btn" data-cart-checkout>Bezahlen (${formatToCurrency(cart.total)})</button> 
    `
}