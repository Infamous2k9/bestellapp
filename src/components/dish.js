export function addEventTrigger() {
    const additional = document.querySelectorAll("*[data-dish-additional]")
    additional.forEach((element, index) => {
        const addCartBtn = document.createElement('button')
        addCartBtn.innerHTML = "add to cart";
        //addCartBtn.setAttribute("class","")

        addCartBtn.addEventListener('click', () => {
            //function for add cart
            console.log("added");

        })
        element.appendChild(addCartBtn)
    })



}