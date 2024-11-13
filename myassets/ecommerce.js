const wrapper = document.querySelector(".sliderwrapper");
const menuItems = document.querySelectorAll(".menuitem");

const products = [
  {
    id: 1,
    title: "Air Force",
    price: 119,
    description:"Nike Air Force Collection: Elevate your style and step into unparalleled comfort with the iconic Nike Air Force collection, where classic design meets cutting-edge technology to provide versatile footwear options for any occasion",
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
    description: 'Nike Air Jordan Collection: Immerse yourself in the legendary heritage of the Nike Air Jordan collection, where timeless design intertwines with state-of-the-art innovation, delivering unparalleled style and performance for every step you take. From the hardwood to the streets, embrace the iconic silhouette and legendary history of Air Jordan, crafted to elevate your game and make a statement wherever you go',
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
    description:'Nike Blazer Collection: Embrace timeless elegance and versatile style with Nike Blazer, where classic design meets contemporary flair for an iconic look that leaves a lasting impression',
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
    price: 135,
    description: "Nike Crater Collection: Discover sustainable innovation and modern style with Nike Crater, where eco-conscious materials meet contemporary design for a fresh look that's as good for the planet as it is for your wardrobe",
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
    price: 185,
    description: 'Nike Hippie Collection: Embrace a retro-inspired vibe with Nike Hippie, where vintage aesthetics meet modern comfort for a laid-back look that exudes effortless style',
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

// let choosenProduct = products[0];
let choosenProduct = products[0]

const currentProductImage = document.querySelector(".productImg");
const currentProductDescription = document.querySelector(".productDescription");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");
const currentProductPrice=document.querySelector(".productprice");

const searchInput = document.querySelector('.searchinput')
menuItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    // change the current slide
    wrapper.style.transform = `translateX(${-100 * index}vw)`;
    //change the  choosen product
    // choosenProduct = products[index];
    choosenProduct = products[index]

    //change texts of current products
    currentProductTitle.textContent = choosenProduct.title;
    currentProductImage.src = choosenProduct.colors[0].img;
    currentProductPrice.textContent = "$" + choosenProduct.price;
    currentProductDescription.textContent = choosenProduct.description;
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
searchInput.addEventListener("input", e => {
  const value = e.target.value
  console.log(value);
})