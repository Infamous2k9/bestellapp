import "@styles/styles.scss";

import { categories } from "./components/category";
import { cart } from "./components/cart";
import "./components/cartOverlay";

function init() {
    categories.init()
    cart.init()

    // muss noch ausgelagert werden 
    const cartOverlay = document.querySelector('[data-cart-overlay]');
    const cartBtn = document.querySelector('[data-mobile-cart-btn]');

    cartBtn.addEventListener('click', () => {
        cartOverlay.classList.add('active');
        document.body.style.overflow = 'hidden';
    });

    window.addEventListener('resize', () => {
        if (window.innerWidth >= 1024 && cartOverlay.classList.contains('active')) {
            cartOverlay.classList.remove("active")
        }
    })

    cartOverlay.addEventListener('click', (e) => {
        if (e.target === cartOverlay) {
            cartOverlay.classList.remove('active');
            document.body.style.overflow = '';
        }
    });

    document.querySelector('.cart__close-btn').addEventListener('click', () => {
        cartOverlay.classList.remove('active');
        document.body.style.overflow = '';
    });


}
init()