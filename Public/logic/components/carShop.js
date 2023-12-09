let shoppingCart = [];

export function openCarShop() {
  const carShopContent = document.getElementById("carShopContent");
  carShopContent.style.display = "grid";
}

export function closetCarShop() {
  const carShopContent = document.getElementById("carShopContent");
  carShopContent.style.display = "none";
}

export function addToCart(product) {
  const existingProduct = shoppingCart.find(
    (item) => item.name === product.name
  );

  if (existingProduct) {
    existingProduct.quantity += 1;
  } else {
    const cartProduct = { ...product, quantity: 1 };
    shoppingCart.push(cartProduct);
  }

  // Reducir la cantidad del stock en el localStorage
  const stock = JSON.parse(localStorage.getItem("stock"));
  stock[product.name] -= 1;
  localStorage.setItem("stock", JSON.stringify(stock));
  // Actualizar la cantidad en la interfaz gráfica del producto
  const productCards = document.querySelectorAll(".titleCard");
  for (const card of productCards) {
    if (card.textContent === product.name) {
      const quantityCard = card.parentNode.querySelector(".quantityCard");
      quantityCard.textContent = `Cantidad: ${product.quantity}`;

      break;
    }
  }

  console.log("interfaz", product.quantity);
  console.info(product.quantity - 1);
  updateCartUI();
}

function updateCartUI() {
  const cartList = document.getElementById("listproducts");
  cartList.innerHTML = "";

  let totalPrice = 0;

  shoppingCart.forEach((product) => {
    const productItem = document.createElement("div");
    productItem.classList.add("productList");

    const productInfo = document.createElement("div");
    productInfo.classList.add("infoProductList");

    const productName = document.createElement("p");
    productName.textContent = product.name;

    const productPrice = document.createElement("p");
    productPrice.textContent = `Precio: $${product.price.toFixed(2)} USD`;

    const productQuantity = document.createElement("p");
    productQuantity.textContent = `Cantidad: ${product.quantity}`;

    productInfo.appendChild(productName);
    productInfo.appendChild(productPrice);
    productInfo.appendChild(productQuantity);

    const trashIcon = document.createElement("figure");
    trashIcon.classList.add("iconTrashProduct");

    const trashImg = document.createElement("img");
    trashImg.src = "../../Public/img/main/trash.svg";
    trashImg.alt = "Eliminar producto del carrito";

    trashIcon.appendChild(trashImg);

    trashIcon.addEventListener("click", () => removeProductFromCart(product));

    productItem.appendChild(productInfo);
    productItem.appendChild(trashIcon);

    cartList.appendChild(productItem);

    totalPrice += product.price * product.quantity;
  });
}

function removeProductFromCart(product) {
  const productIndex = shoppingCart.findIndex(
    (item) => item.name === product.name
  );

  if (productIndex !== -1) {
    shoppingCart.splice(productIndex, 1);

    // Aumentar la cantidad del stock en el localStorage
    const stock = JSON.parse(localStorage.getItem("stock"));
    stock[product.name] += 1;
    localStorage.setItem("stock", JSON.stringify(stock));

    updateCartUI();
  }
}
