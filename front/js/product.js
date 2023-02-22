const queryString = window.location.search
const urlParams = new URLSearchParams(queryString)
// on cherche à avoir l'id de chaque "kanap" puisqu'ils ont tous la même url.
const id = urlParams.get("id")
// création de cette variable pour return prix
if (id != null) {
  // let et non const car on ne peut pas le réassigner
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

  // ajout pour définir item price pour const data
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
    for (let i = 0; i < colors.length; i++) {
      const option = document.createElement("option");
      option.value = colors[i];
      option.textContent = colors[i];
      select.appendChild(option);
    }
  }
}
// https://developer.mozilla.org/fr/docs/Web/API/EventTarget/addEventListener
// quand on clique sur ajouter au panier, on récupere les données et on crée un objet qui avec l'id, le prix , la couleur, la quantité (?)

const button = document.querySelector("#addToCart")
if (button != null) {
  button.addEventListener("click", (e) => {
    const color = document.querySelector("#colors").value
    const quantity = document.querySelector("#quantity").value
    if (color == null || color === "" || quantity == null || quantity == 0 ) {
      // ici nous mettons quantity == 0 et non quantity === 0 car c'est une string, le === est trop strict pour que ça fonctionne.
      alert("Veuillez selectionner une couleur et une quantité s'il vous plait")
    }
    // SetItem permets d'enregistrer des params dans le localStorage de chrome (comme une clé)en mémoire = id / couleur/ prix / quantité (?)
    const data = {
      id: id,
      color : color,
      price : price,
      // probleme avec price qui ne peut pas être récupéré
      quantity : Number(quantity),
      // pour avoir une string et non un "nombre"
    }
    localStorage.setItem(id, JSON.stringify(data))
    // erreur localStorage ne peut pas enregistrer des objet => il faut les tranformer en string. (json.stringify)
    // https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify

    // pour aller vers cart.html on peut utiliser window.location.href 
    // https://stackoverflow.com/questions/7077770/window-location-href-and-window-open-methods-in-javascript
    // Il faudrait créer le lien local (?)
    window.location.href = "cart.html"
  })
}