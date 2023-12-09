// createProduct.js
import { addProduct, products } from "./products.js";

export function addNewProduct() {
    
  // Obtén los valores de los campos del formulario
  const name = document.getElementById("nameProduct").value;
  const price = parseFloat(document.getElementById("priceProduct").value);
  const description = document.getElementById("desProduct").value;
  const quantity = parseInt(document.getElementById("quantityProduct").value);
  const category = document.getElementById("categorieProduct").value;
  const imagePath = document.getElementById("urlImg").value;
  
  if (!name || isNaN(price) || !description || isNaN(quantity) || !category || !imagePath) {
    alert("Por favor, completa todos los campos");
    return;
  }

  // Añadir el nuevo producto
  const newProduct = addProduct(name, price, description, quantity, category, imagePath);
  console.log("Lista de productos después de agregar:", products);

  // Agregar el nuevo producto al array products
  products.push(newProduct);
  console.log("Nuevo producto agregado:", newProduct);

  // Validación básica (puedes mejorarla según tus necesidades)
  
  // Puedes hacer algo adicional aquí, como limpiar los campos del formulario
  document.getElementById("nameProduct").value = "";
  document.getElementById("priceProduct").value = "";
  document.getElementById("desProduct").value = "";
  document.getElementById("quantityProduct").value = "";
  document.getElementById("categorieProduct").value = "";
  document.getElementById("urlImg").value = "";

  // También puedes recargar la lista de productos si es necesario
  // loadProducts(products);

  // Retorna el nuevo producto creado (puedes usar esto para hacer algo con el producto recién creado)
  return newProduct;

}
