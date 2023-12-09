// seeker.js

import { products } from "./products.js";
import { loadProducts, clearProducts } from "./loadProducts.js";

export function seeker() {
  const seekerInput = document.getElementById("seekerInput");

  seekerInput.addEventListener("input", function () {
    const searchTerm = seekerInput.value.toLowerCase();
    const results = searchProducts(searchTerm);
    displayResults(results);
  });
}

function searchProducts(searchTerm) {
  return products.filter((product) => {
    return product.name.toLowerCase().includes(searchTerm);
  });
}

function displayResults(results) {
  clearProducts();
  loadProducts(results);
  // console.log("Filtered Products:", results);
}
