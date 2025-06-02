// PRODUCTOS
const productos = [
    // abrigos
    {
        id: "abrigo_01",
        titulo:"abrigo 1",
        imagen: "img/abrigos/01.jpeg",
        categoria:{
            nombre: "abrigos",
            id: "abrigos"
        },
        precio: 15000,
    },
    {
        id: "abrigo_02",
        titulo:"abrigo 2",
        imagen: "img/abrigos/02.jpeg",
        categoria:{
            nombre: "abrigos",
            id: "abrigos"
        },
        precio: 25000,
    },
    {
        id: "abrigo_03",
        titulo:"abrigo 3",
        imagen: "img/abrigos/03.jpeg",
        categoria:{
            nombre: "abrigos",
            id: "abrigos"
        },
        precio: 35000,
    },
    {
        id: "abrigo_04",
        titulo:"abrigo 4",
        imagen: "img/abrigos/04.jpeg",
        categoria:{
            nombre: "abrigos",
            id: "abrigos"
        },
        precio: 45000,
    },
    {
        id: "abrigo_05",
        titulo:"abrigo 5",
        imagen: "img/abrigos/abrigo_01.jpg",
        categoria:{
            nombre: "abrigos",
            id: "abrigos"
        },
        precio: 55000,
    },
    // camisetas    
    {
        id: "camiseta_01",
        titulo:"camiseta 1",
        imagen: "img/camisetas/01.jpeg",
        categoria:{
            nombre: "camisetas",
            id: "camisetas"
        },
        precio: 10000,
    },
    {
        id: "camiseta_02",
        titulo:"camiseta 2",
        imagen: "img/camisetas/02.jpeg",
        categoria:{
            nombre: "camisetas",
            id: "camisetas"
        },
        precio: 20000,
    },
    {
        id: "camiseta_03",
        titulo:"camiseta 3",
        imagen: "img/camisetas/03.jpeg",
        categoria:{
            nombre: "camisetas",
            id: "camisetas"
        },
        precio: 30000,
    },
    {
        id: "camiseta_04",
        titulo:"camiseta 4",
        imagen: "img/camisetas/04.jpeg",
        categoria:{
            nombre: "camisetas",
            id: "camisetas"
        },
        precio: 40000,
    },
    {
        id: "camiseta_05",
        titulo:"camiseta 5",
        imagen: "img/camisetas/camiseta_01.jpg",
        categoria:{
            nombre: "camisetas",
            id: "camisetas"
        },
        precio: 50000,
    }
    

]


// let edad = prompt("Ingrese su edad");
// if (edad >= 18) {
//     alert("Bienvenido al sitio web");
// }else {
//     alert("Lo siento, debes ser mayor de 18 años para acceder a este sitio web");
//     window.location.href = "https://www.google.com";

// }

// let hora = prompt("Ingrese la hora actual (0-23)");
// if (hora >= 9 && hora <= 18) {
//     alert("Bienvenido al sitio web");
// }else {
//     alert("Lo siento, el sitio web está disponible solo de 9 a 18 horas");
//     window.location.href = "https://www.google.com";
// }   

let user = "jairos";
let password = 1234;
let nombre = prompt("Ingrese su nombre");
user = prompt("Ingrese su usuario");
password = parseInt(prompt("Ingrese su contraseña"));
if (user === "jairos" && password === 1234) {
    alert("Bienvenido " + nombre + " al sitio web");
}else {
    alert("Lo siento, usuario o contraseña incorrectos");
    window.location.href = "https://www.google.com";
}