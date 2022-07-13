const inputNum = document.querySelector(".inputSearch");
const inputBTN = document.querySelector(".inputBtn");
const menu = document.querySelector(".btn__container");
const item = document.querySelectorAll(".item");
const cartList = document.querySelector(".cartContainer");
const catalogo = document.querySelector(".catalogo");
const header = document.querySelector(".header");
const cartCont = document.querySelector(".carrito__Container");
const btnCompra = document.querySelectorAll(".btnCatalogo");
const totalItems = document.querySelector("#totalItems");
const totalProducts = document.querySelector("#totalProducts");
const borrarItemCart = document.querySelectorAll(".borrarCart");
let pizzas = [
  {
    id: 1,
    nombre: "especial",
    ingrdientes: [
      "huevo",
      "muzzarella",
      "tomate",
      "morron",
      "aceitunas verdes",
    ],
    precio:800,
   
  },
  {
    id: 2,
    nombre: "Pollo",
    ingrdientes: ["salsa de tomate", "muzzarella", "pollo", ],
    precio: 900,
    
  },
  {
    id: 3,
    nombre: "camtim",
    ingrdientes: ["salsa de tomate", "muzzarella", "aceitunas verdes"],
    precio: 500,
    img: "./imagenes/morrones.jpg",
  },
  {
    id: 4,
    nombre: "de morrones",
    ingrdientes: ["salsa de tomate", "muzzarella", "morrones", "ajo"],
    precio: 1200,
    img: "./imagenes/morrones.jpg",
  },
  {
    id: 5,
    nombre: "cinco quesos",
    ingrdientes: [
      "queso cremoso",
      "muzzarella",
      "provolone",
      "parmesano",
      "roquefort",
    ],
    precio: 950,
    img: "./imagenes/cuatroquesos.jpg",
  },
  {
    id: 6,
    nombre: "Fugazzeta",
    ingrdientes: [
      "salsa de tomate",
      "muzzarella",
      "cebolla",
      "aceitunas verdes",
    ],
    precio: 1200,
    img: "./imagenes/fugazeta.jpg",
  },
];
let ultimoScrollTop;
window.addEventListener("scroll", () => {
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  if (scrollTop > ultimoScrollTop) {
    header.style.top = "-110px";
  } else {
    header.style.top = "0";
  }

  ultimoScrollTop = scrollTop;
});

menu.addEventListener("click", () => {
  item.forEach((i) => i.classList.toggle("show"));
});

inputBTN.addEventListener("click", buscarPizza);

function buscarPizza(e) {
  e.preventDefault();
  const pizzaID = inputNum.value;
  if (pizzaID === "") {
    showError("Por favor ingresa el ID de la pizza !");
    return;
  }
  createHTML();
  inputNum.value = "";
}

function showError(error) {
  const msgError = document.createElement("p");
  msgError.textContent = error;
  msgError.classList.add("error");
  cartList.appendChild(msgError);
  setTimeout(() => {
    msgError.remove();
  }, 2000);
}

function createHTML() {
  cartList.innerHTML = "";
  if (pizzas.some((pizza) => pizza.id == inputNum.value)) {
    pizzas.forEach((pizza) => {
      if (pizza.id === inputNum.valueAsNumber) {
        const h2 = document.createElement("h2");
        const h3 = document.createElement("h3");
        const h4 = document.createElement("h4");
        const span = document.createElement("span");
        cartList.classList.add("cartList2");
        h2.innerHTML = `Esa es la ${pizza.nombre}`;
        h3.innerHTML = `Ingredientes: ${pizza.ingrdientes}`;
        h4.innerHTML = `$ ${pizza.precio}`;
        span.innerHTML = `X`;
        cartList.appendChild(h2);
        cartList.appendChild(h3);
        cartList.appendChild(h4);
        cartList.appendChild(span);
        span.classList.add("borrar");
        span.addEventListener("click", (e) => {
          const item = e.target.parentElement;
          cartList.innerHTML = "";
        });
      } else {
        return;
      }
    });
  } else {
    showError("No hay ninguna pizza listada con ese ID!");
    return;
  }
}