const cart = [];
// const card = une array; A chaque fois qu'on va trouver un objet on va le push (cart.push)
FindItems()
for (let i = 0; i < cart.length; i++) {
    displayItem(cart[i]);
  }


function FindItems(){
    const numberOfItems = localStorage.length
    for (let i = 0; i < numberOfItems; i++) {
        const item = localStorage.getItem(localStorage.key(i))
        // on recupere Item en string
        const itemObject = JSON.parse(item)
        // "parse" !== "stringify", ça converti en objet.
        cart.push(itemObject)
    }  
}
// pour chaque element dans les carts on va créer les elements html
function displayItem(item) {
    const article = makeArticle(item)
    displayArticle(article)
    const div = makeImageDiv(item)
    article.appendChild(div)

    const cardItemContent
}
function displayArticle(article){
    document.querySelector("#cart__items").appendChild(article)
}
function makeArticle(item){
    const article = createElement("article")
    article.classList.add("card__item")
    // https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/dataset; pour créer des elements à partir du data
    article.dataSet.id = item.id
    article.dataSet.color = item.color
    return article

}
function makeImageDiv(item){
    const div = document.createElement("div")
    div.classList.add("cart__item__img")

    const image = document.createElement("img")
    image.src = item.imageUrl
    image.alt = item.altTxt
    div.appendChild(image)
    return div
}