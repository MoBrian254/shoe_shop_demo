const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");

const products = [
  {
    id: 1,
    title: "BOAT SHOES",
    price: 110.99,
	desc: "Leather, Abrasion-proof rubber & Cold padding",
    colors: [
      {
        code: "rootbeer",
        img: "./img/boat-shoes-rootbeer.png",
      },
      {
        code: "medium brown",
        img: "./img/boat-shoes-medium-brown.png",
      },
    ],
  },
  {
    id: 2,
    title: "BOAT CHUKKA",
    price: 140.99,
	desc: "Leather, Synthetics, Cold padding & Treat with a suitable protector before wear",
    colors: [
      {
        code: "black",
        img: "./img/BOAT-CHUKKA-black.png",
      },
      {
        code: "rust",
        img: "./img/BOAT-CHUKKA-rust.png",
      },
    ],
  },
  {
    id: 3, 
    title: "SPRINT TREKKER",
    price: 120.99,
	desc: "Nubuck/textile, 100% polyester, Textile, Synthetics, Cold padding, Mesh & Treat with a suitable protector before wear",
    colors: [
      {
        code: "black",
        img: "./img/SPRINT_TREKKER-black.png",
      },
      {
        code: "brown",
        img: "./img/SPRINT_TREKKER-brown.png",
      },
    ],
  },
  {
    id: 4,
    title: "SOLAR WAVE",
    price: 110.99,
	desc: "Textile, Synthetics, 100% polyester & Cold padding",
    colors: [
      {
        code: "black/dark blue",
        img: "./img/SOLAR_WAVE-black-darkblue.png",
      },
      {
        code: "light taupe",
        img: "./img/SOLAR_WAVE-light_taupe.png",
      },
    ],
  },
  {
    id: 5,
    title: "EURO TREKKER",
    price: 120.99,
	desc: "Nubuck/textile, Synthetics, Cold padding & Treat with a suitable protector before wear",
    colors: [
      {
        code: "black/wheat",
        img: "./img/EURO-TREKKER-blackout.png",
      },
      {
        code: "blackout",
        img: "./img/EURO-TREKKER-blackwheat.png",
      },
    ],
  },
];

let choosenProduct = products[0];

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentproductDesc = document.querySelector(".productDesc");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");


menuItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    //change the current slide
    wrapper.style.transform = `translateX(${-100 * index}vw)`;

    //change the choosen product
    choosenProduct = products[index];

    //change texts of currentProduct
    currentProductTitle.textContent = choosenProduct.title;
	currentproductDesc.textContent = choosenProduct.desc;
    currentProductPrice.textContent = "$" + choosenProduct.price;
    currentProductImg.src = choosenProduct.colors[0].img;

    //assing new colors
    currentProductColors.forEach((color, index) => {
      color.style.backgroundColor = choosenProduct.colors[index].code;
    });
  });
});

currentProductColors.forEach((color, index) => {
  color.addEventListener("click", () => {
    currentProductImg.src = choosenProduct.colors[index].img;
  });
});

currentProductSizes.forEach((size, index) => {
  size.addEventListener("click", () => {
    currentProductSizes.forEach((size) => {
      size.style.backgroundColor = "white";
      size.style.color = "black";
    });
    size.style.backgroundColor = "black";
    size.style.color = "white";
  });
});

const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener("click", () => {
  payment.style.display = "flex";
});

close.addEventListener("click", () => {
  payment.style.display = "none";
});
