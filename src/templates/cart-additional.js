import { formatToCurrency } from "../utils/utlis"

export function renderCartAdditionalHTML(cart) {
    return `
        <div class="cart__subtotal">
            <p>Zwischensumme:</p>
            <p>${formatToCurrency(cart.total - cart.deliveryFee)}</p>
        </div>
        <div class="cart__delivery-fee-price">
            <p>Lieferung:</p>
            <p>${formatToCurrency(cart.deliveryFee)}</p>
        </div>
        <div class="cart__total">
            <p>Gesamt:</p>
            <p>${formatToCurrency(cart.total)}</p>
        </div>
        <button class="cart__pay-btn" data-cart-checkout>Bezahlen (${formatToCurrency(cart.total)})</button> 
    `
}

export function renderTrashbinHTML() {
    return `
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="18" fill="none"><path fill="#363534" d="M3 18c-.55 0-1.02-.196-1.413-.587A1.926 1.926 0 0 1 1 16V3a.968.968 0 0 1-.713-.288A.968.968 0 0 1 0 2c0-.283.096-.52.287-.712A.968.968 0 0 1 1 1h4c0-.283.096-.52.287-.713A.968.968 0 0 1 6 0h4c.283 0 .52.096.713.287.191.192.287.43.287.713h4c.283 0 .52.096.713.288.191.191.287.429.287.712s-.096.52-.287.712A.968.968 0 0 1 15 3v13c0 .55-.196 1.02-.588 1.413A1.926 1.926 0 0 1 13 18H3ZM13 3H3v13h10V3ZM6 14c.283 0 .52-.096.713-.287A.968.968 0 0 0 7 13V6a.968.968 0 0 0-.287-.713A.968.968 0 0 0 6 5a.968.968 0 0 0-.713.287A.968.968 0 0 0 5 6v7c0 .283.096.52.287.713.192.191.43.287.713.287Zm4 0c.283 0 .52-.096.713-.287A.968.968 0 0 0 11 13V6a.967.967 0 0 0-.287-.713A.968.968 0 0 0 10 5a.968.968 0 0 0-.713.287A.968.968 0 0 0 9 6v7c0 .283.096.52.287.713.192.191.43.287.713.287Z"/></svg>
    `
}