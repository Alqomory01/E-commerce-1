const wrapper = document.querySelector(".sliderwrapper");
const menuItems = document.querySelectorAll(".menuitem");

const products = [
  {
    id: 1,
    title: "Air Force",
    price: 119,
    colors: [
      {
        code: "black",
        img: "./img/air1.png",
      },
      {
        code: "darkblue",
        img: "./img/newair2.png",
      },
    ],
  },
  {
    id: 2,
    title: "Air Jordan",
    price: 149,
    colors: [
      {
        code: "lightgray",
        img: "./img/jordan.png",
      },
      {
        code: "green",
        img: "./img/jordan2.png",
      },
    ],
  },
  {
    id: 3,
    title: "Blazer",
    price: 109,
    colors: [
      {
        code: "lightgray",
        img: "./img/newblazer.png",
      },
      {
        code: "green",
        img: "./img/blazer2.png",
      },
    ],
  },
  {
    id: 4,
    title: "Crater",
    price: 129,
    colors: [
      {
        code: "black",
        img: "./img/crater1.png",
      },
      {
        code: "lightgray",
        img: "./img/newcrater2.png",
      },
    ],
  },
  {
    id: 5,
    title: "Hippie",
    price: 99,
    colors: [
      {
        code: "gray",
        img: "./img/hippie.png",
      },
      {
        code: "black",
        img: "./img/hippie22.png",
      },
    ],
  },
];

let choosenProduct = products[0]

const currentProductImage = document.querySelector(".productImg");
const currentProductDescription = document.querySelector(".productDescription");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");
const currentProductPrice=document.querySelector(".productprice");
menuItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    // change the current slide
    wrapper.style.transform = `translateX(${-100 * index}vw)`;
    //change the  choosen product
    choosenProduct = products[index]

    //change texts of current products
    currentProductTitle.textContent = choosenProduct.title;
    currentProductImage.src = choosenProduct.colors[0].img;
    currentProductPrice.textContent = "$" + choosenProduct.price;
//Assigning new color
    currentProductColors.forEach((color, index) => {
        color.style.backgroundColor = choosenProduct.colors[index].code;
        
    });
    


  });
});
currentProductColors.forEach((color, index) => {
    color.addEventListener('click', () =>{
        currentProductImage.src = choosenProduct.colors[index].img
    })
})
currentProductSizes.forEach((size, index)=>
{
    size.addEventListener('click', () => {
        currentProductSizes.forEach((size) => {
            size.style.backgroundColor = "white";
            size.style.color = "black";
        });
        size.style.backgroundColor ="black";
        size.style.color = "white";
    });
    
});

const currentProductButton = document.querySelector('.productButton')
const currentClose = document.querySelector('.close')
const currentPayment = document.querySelector('.payment')

currentProductButton.addEventListener('click', () => {
  currentPayment.style.display = 'flex';
});
currentClose.addEventListener('click', () => {
  currentPayment.style.display ='none';
})