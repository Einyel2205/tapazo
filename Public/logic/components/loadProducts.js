import { addToCart } from "./carShop.js";

function createHTMLElement(tag, className, textContent = null) {
  const element = document.createElement(tag);
  element.classList.add(className);
  if (textContent !== null) {
    element.textContent = textContent;
  }
  return element;
}

function createProductCard(product) {
  const article = createHTMLElement("article", "cardProduct");

  const figure = createHTMLElement("figure", "blockImgProduct");

  const img = createHTMLElement("img", "productImg");
  img.src = product.imagePath;
  img.alt = "Esta es la imagen del producto";

  figure.appendChild(img);
  article.appendChild(figure);

  const h3 = createHTMLElement("h3", "titleCard", product.name);
  article.appendChild(h3);

  const pDescription = createHTMLElement(
    "p",
    "descriptionCard",
    product.description
  );
  article.appendChild(pDescription);

  const pPrice = createHTMLElement(
    "p",
    "priceCard",
    `Precio: $${product.price.toFixed(2)} USD`
  );
  article.appendChild(pPrice);

  const pQuantity = createHTMLElement(
    "p",
    "quantityCard",
    `Cantidad: ${product.quantity}`
  );
  article.appendChild(pQuantity);

  return article;
}
export function loadProducts(filteredProducts) {
  console.log("Cargando productos...");
  const productsContainer = document.getElementById("productsBlock");

  // Verificar y establecer el stock en el localStorage
  if (!localStorage.getItem("stock")) {
    const stock = {};
    filteredProducts.forEach((product) => {
      stock[product.name] = product.quantity;
    });
    localStorage.setItem("stock", JSON.stringify(stock));
  }

  if (Array.isArray(filteredProducts)) {
    filteredProducts.forEach((product) => {
      const article = createProductCard(product);

      const btnAddCart = createHTMLElement(
        "button",
        "addCart",
        "Añadir a carrito"
      );
      btnAddCart.addEventListener("click", () => {
        // Actualizar la cantidad en la interfaz gráfica del producto
        const quantityCard = article.querySelector(".quantityCard");
        quantityCard.textContent = `Cantidad: ${product.quantity - 1}`;
      });

      article.appendChild(btnAddCart);

      productsContainer.appendChild(article);
    });
  } else {
    console.error("filteredProducts no es un array o es undefined");
  }
}
export function clearProducts() {
  const productsContainer = document.getElementById("productsBlock");
  productsContainer.innerHTML = "";
}
