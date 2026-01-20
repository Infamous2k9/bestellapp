import "@styles/styles.scss";

import { categories } from "./components/category";
import { cart } from "./components/cart";


function init() {
    categories.init()
    cart.changeDeliveryFee()
}
init()