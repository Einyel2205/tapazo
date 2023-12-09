import { SliderHome } from "./components/SliderHome.js";
import { openCarShop, closetCarShop, addToCart } from "./components/carShop.js";
import { setupNavigation } from "./components/filterOptions.js";
import { loadProducts } from "./components/loadProducts.js";
import { products } from "./components/products.js";
import { seeker } from "./components/seeker.js";
import { addNewProduct } from "./components/createProduct.js";


document.addEventListener("DOMContentLoaded", function () {

  if (window.location.pathname === "/views/createProduct.html") {
    // Añadir nuevo producto
  const addProductButton = document.getElementById("addProduct");
  addProductButton.addEventListener("click", function () {
    console.log('hola');
    // Llama a la función para agregar un nuevo producto
    addNewProduct();
  });
  }
  if (window.location.pathname === "/views/index.html") {
    //slider
    SliderHome();
    //slider
  }
  if (window.location.pathname === "/views/product.html") {
    // const funcion = addNewProduct();
    // //products load
    // // const allProducts = [...products];
    // loadProducts(funcion);
    //products load
    loadProducts(products);

    //seeker
    seeker();
    //seeker

    //filter options products
    const navigationItems = [navShoes, navClock, navVapers];
    setupNavigation(navigationItems);
    //filter options products
  }

  // carshop
  // open car shop
  const carShop = document.getElementById("carShop");
  carShop.addEventListener("click", function () {
    openCarShop();
  });
  // open car shop

  // close car shop
  const closestCar = document.getElementById("closetCar");
  closestCar.addEventListener("click", function () {
    closetCarShop();
  });
  // close car shop
  // add to cart
  const addToCartButtons = document.querySelectorAll(".addCart");
  addToCartButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const productName =
        this.parentNode.querySelector(".titleCard").textContent;
      const selectedProduct = products.find(
        (product) => product.name === productName
      );

      if (selectedProduct) {
        addToCart(selectedProduct);
      }
    });
  });
  
});
