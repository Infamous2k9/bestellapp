import { renderToastHtml } from "../templates/toast";

export const toast = {


    showToast(msg) {
        const toastRef = document.querySelector('#toast')
        toastRef.innerHTML = msg
    },
}