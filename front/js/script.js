// permet de faire des requetes
fetch('http://localhost:3000/api/products')
// tu vas recevoir quelque chose et en faire quelque chose. c'est une fonction.
      .then(res => res.json())
      .then(data => kanaps(data))
      // utilisation de jsonview pour chrome
// faire 'document.' sur chrome pour pouvoir voir toute la page html

function addProducts(kanaps){
// console.log(kanaps) ne pas commiter de console.log
const imageUrl = kanaps[0].imageUrlconsole.log("url de l'image", imageUrl)

const anchor = document.createElement("a")
anchor.href = imageUrl
// selection d'un element = document.Queryselector
// "f".appendchild pour selectionner l'enfant d'un element
const items = document.querySelector("#items")
if (items != null) {
  items.appendChild(anchor)
}
}