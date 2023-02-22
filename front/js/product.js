const queryString = window.location.search
const urlParams = new URLSearchParams(queryString)
// on cherche à avoir l'id de chaque "kanap" puisqu'ils ont tous la même url.
const id = urlParams.get("id")
if (id != null) {
  let itemPrice = 0
  let imgUrl, altText, articleName
}

// requete au serveur pour avoir plus d'infos

fetch(`http://localhost:3000/api/products/${id}`)
// string interpolation pour id
.then((response) => response.json())
.then((res) => handleData(res))

function handleData(kanap) {
  const altTxt = kanap.altTxt
  const colors = kanap.colors
  const description = kanap.description
  const imageUrl = kanap.imageUrl
  const name = kanap.name
  const price = kanap.price
  // const _id = kanap._id

  itemPrice = price
  imgUrl = imageUrl
  altText = altTxt
  articleName = name

  makeImage(imageUrl, altTxt)
  makeTitle(name)
  makePrice(price)
  makeDescription(description)
  makeColors(colors)
}

function makeImage(imageUrl, altTxt) {
  const image = document.createElement("imag")
  image.src = imageUrl
  image.alt = altTxt
  // j'aurais pu faire une appenfChhild uniquement
  const parent = document.querySelector(".item__img")
  // erreur sur l'objet qui peut être "nul" donc je met égalité lache = si parent est non défini
  if (parent !=null) parent.appendChild(image)
}

function makeTitle(name){
  const h1 = document.querySelector("#title")
  if (h1 != null) h1.textContent = name
}

function makePrice(price) {
  const span = document.querySelector("#price")
  if(span != null) span.textContent = price
}

function makeDescription(description) {
  const p = document.querySelector("#description")
  if (p != null) p.textContent = description
}

// pour chaque valeur il faut créer une option avec value + text 
function makeColors(colors){
  // select = menu déroulant
  const select = document.querySelector("#colors")
  if (select != null) {
    const option = document.createElement("option")
    option.value = colors
    option.textContent = colors
    select.appendChild(option)
  }
}