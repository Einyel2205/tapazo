import { loadProducts, clearProducts } from "./loadProducts.js";
import { products } from "./products.js";

function filterOptions(category) {
  clearProducts(); // Clean products

  let filteredProducts;
  if (category === "all") {
    filteredProducts = products; // get total products
  } else {
    filteredProducts = products.filter(
      (product) => product.category === category
    );
  }

  loadProducts(filteredProducts);
}

export function setupNavigation(navigationItems) {
  navigationItems.forEach((navItem) => {
    if (navItem) {
      navItem.addEventListener("click", optionUser);
    } else {
      console.error("Elemento de navegación no encontrado.");
    }
  });

  function optionUser(event) {
    let category;
    if (event.target === navShoes) {
      category = "shoes";
    } else if (event.target === navClock) {
      category = "clock";
    } else if (event.target === navVapers) {
      category = "vapers";
    } else {
      category = "all"; // total products
    }

    filterOptions(category);
  }

  filterOptions("all");
}
