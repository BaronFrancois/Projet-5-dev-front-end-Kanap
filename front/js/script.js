// permet de faire des requetes
fetch('http://localhost:3000/api/products')
// tu vas recevoir quelque chose et en faire quelque chose. c'est une fonction.
      .then(res => res.json())
      // utilisation de jsonview pour chrome
      .then(data => kanaps(data))
// faire 'document.' sur chrome pour pouvoir voir toute la page html

// altTxt
// : "Photo d'un canapé bleu, deux places"
// colors
// : (3) ['Blue', 'White', 'Black']
// description
// : "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
// imageUrl
// : "http://localhost:3000/images/kanap01.jpeg"
// name
// : "Kanap Sinopé"
// price
// : 1849
// _id
// : "107fb5b75607497b96722bda5b504926"
function kanaps(kanap){
// console.log(kanaps) ne pas commiter de console.log
  const _id = kanap[0]._id
  const imageUrl = kanap[0].imageUrl
  const altTxt = kanap[0].altTxt
  const name = kanap[0].name
const description= kanap[0].description

  const image = makeImage(imageUrl, altTxt)
  cont anchor = makeAnchor(_id)
  // ce anchor est propre à cette fonction
  const article = makeArticle()
  const h3 = makeH3(name)
const p = makeParagraph(description)

  article.appendChild(image)
  article.appendChild(h3)
  article.appendchild(p)
  appendArticleToAnchor(anchor,article)
  // utiliser f2 pour renommer tout les mêmes élements
  }
function makeAnchor(id){
  // pour faire appel à l'url makeAnchor(imargeUrl) vu qu'il est dans une autre fonction
  const anchor = document.createElement("a")
  // le + id correspond aux params
  anchor.href = "./product.html?id=" + id
  return anchor
  // sors le de la fonction
}
function appendArticleToAnchor(anchor,article){
  // selection d'un element = document.Queryselector
  const items = document.querySelector("#items")
  if (items != null) {
    // "f".appendchild pour selectionner l'enfant d'un element
    items.appendChild(anchor)
    anchor.appenchild(article)
  }
}

function makeImage (imageUrl, altTxt) {
  const image = document.createElement("img")
  image.src = imageUrl
  image.alt = altTxt
  // je ne sais pas si c'est nécessaire qu'il y en ait ou non ?
  image.removeAttribute("title")
  image.removeAttribute("style")
}
function makeArticle(){
  const article = document.createElement("article")
  return article
}
function makeH3(name){
  document.createElement("h3")
  h3.texteContent = name
  // ajout de la class pour h3 .productName
  h3.classList.add("productName")
  return h3
}
function makeParagraph(description){
  const p = document.createElement("p")
  p.texteContent = description
  p.classlist.add("productDescription")
  return p

}