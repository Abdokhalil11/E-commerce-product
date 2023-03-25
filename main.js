// header menu
let bar = document.querySelector(".bar");
let menu = document.querySelector("ul");
let hide = document.querySelector("ul > img");

let hideMenu = () => {
  bar.onclick = () => {
    menu.classList.remove("hide");
    document.body.classList.add("active");
  };
  hide.onclick = () => {
    menu.classList.add("hide");
    document.body.classList.remove("active");
  };
};
hideMenu();

// header cart

let cart = document.querySelector(".cart");
let cartMeun = document.querySelector(".buy");

let cartmeunHide = () => {
  cart.onclick = () => cartMeun.classList.toggle("hide");
};
cartmeunHide();

// change image

let mainImage = document.querySelector(".home .images .main-image img");
let thumbImages = document.querySelectorAll(".home .images .other-image img");
let next = document.querySelector(".next");
let previous = document.querySelector(".previous");
let nextImgCount = 1;

let nextImage = () => {
  next.onclick = function () {
    if (nextImgCount < thumbImages.length) {
      mainImage.src = thumbImages[nextImgCount].src;
      nextImgCount++;
    }
  };
};

let previousImgCount = thumbImages.length - 1;

let previousImage = () => {
  previous.onclick = function () {
    if (previousImgCount >= 0) {
      mainImage.src = thumbImages[previousImgCount].src;
      previousImgCount--;
    }
  };
};

let changeImage = () => {
  thumbImages.forEach((img) => {
    img.onclick = function () {
      mainImage.src = img.src;
    };
  });
};
previousImage();
nextImage();
changeImage();

// counter increament and decreament

let increase = document.querySelector(".add");
let num = document.querySelector(".number");
let decrease = document.querySelector(".less");
let count = 0;

let counter = () =>
  (increase.onclick = () => {
    count++;
    num.innerHTML = count;
  });
decrease.onclick = () => {
  if (count > 0) {
    count--;
    num.innerHTML = count;
  }
};
counter();

// chart content
let title = document.querySelector(".type");
let content = document.querySelector(".content");
let price = document.querySelector(
  ".home .text .price .main-price span:first-child"
);

let cartContent = () => {
  // add image
  let img = document.createElement("img");
  img.src = mainImage.src;
  // add text = Count + title +total
  let text = document.createElement("div");
  text.classList.add("text");
  let text_content = document.createTextNode(title.textContent);
  let priceCount = document.createTextNode(`${price.innerHTML} x ${count} `);
  // Totla price
  let total = document.createElement("span");
  total.classList.add("total");
  let totalText = document.createTextNode(
    `$${count * price.innerHTML.match(/\d+/)}.00`
  );
  total.appendChild(totalText);
  // Append child to Text Div
  text.appendChild(text_content);
  text.appendChild(priceCount);
  text.appendChild(total);
  //Add delete icon content
  let deleteCart = document.createElement("img");
  deleteCart.classList.add("delete");
  deleteCart.src = `images/icon-delete.svg`;
  // add check out
  let checkout = document.createElement("div");
  checkout.classList.add("checkout");
  let checkoutText = document.createTextNode("Checkout");
  checkout.appendChild(checkoutText);
  // All Content Element
  let contentAll = document.createElement("div");
  contentAll.classList.add("content");
  contentAll.append(img, text, deleteCart, checkout);
  content.append(contentAll);
  // Remove content
  deleteCart.onclick = () => {
    contentAll.remove();
    content.innerHTML = " Your cart is empty.";
    cart.setAttribute("data-number", "0");
  };
};

// Add To Chart

let addCart = document.querySelector(".addCart");

let addToCart = () => {
  addCart.onclick = function () {
    if (count > 0) {
      for (let i = 0; i < content.childNodes.length; i++) {
        content.childNodes[i].remove();
      }
      cart.setAttribute("data-number", count);
      cartContent();
    }
  };
};
addToCart();
