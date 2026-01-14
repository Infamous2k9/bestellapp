const itemList = document.querySelector("[data-item-list]")

export function createNewCategory(category) {

    const sectionCategory = document.createElement("section")
    const sectionTitle = document.createElement("h3")


    sectionCategory.setAttribute("class", "category__wrapper")
    sectionTitle.setAttribute("class", "category__name")

    sectionTitle.innerHTML = category

    sectionCategory.appendChild(sectionTitle)

    itemList.appendChild(sectionCategory)
}