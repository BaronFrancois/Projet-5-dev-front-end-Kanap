// runtime browser

// Cela permet de voir ce que comporte un élement (avec fetch qui veut dire "montre moi") suivi de la route vers ce que l'on souhaite.
// https://jsonplaceholder.typicode.com/
fetch("http://localhost:3000/api/products")
    .then((res) => res.json())
    .then((data) => console.log(data))
console.log(document)

// runtime node

// documentation js (https://262.ecma-international.org/13.0/)