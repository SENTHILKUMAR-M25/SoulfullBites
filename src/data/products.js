const products = [

  {
    category: "Choco Pies",
    items: [
      {
        name: "Dark Chocolate",
        img: "/images/choco-pies/dark-chocolate.jpg",
        prices: {
          pack4: 90,
          single: 25
        }
      },

      {
        name: "Milk Chocolate",
        img: "/images/choco-pies/milk-chocolate.jpg",
        prices: {
          pack4: 110,
          single: 30
        }
      },

      {
        name: "White Chocolate",
        img: "/images/choco-pies/white-chocolate.jpg",
        prices: {
          pack4: 130,
          single: 35
        }
      }
    ]
  },

  {
    category: "Ball & Heart Bites",
    items: [
      { name: "Butter Scotch", img: "/images/bites/butterscotch.jpg", price: 10 },
      { name: "Strawberry", img: "/images/bites/strawberry.jpg", price: 10 },
      { name: "Pineapple", img: "/images/bites/pineapple.jpg", price: 10 },
      { name: "Choco Truffle", img: "/images/bites/choco-truffle.jpg", price: 10 },
      { name: "Kiwi Oreo", img: "/images/bites/kiwi-oreo.jpg", price: 10 }
    ]
  },

  {
    category: "Classic Cakes",
    items: [
      { name: "Vanilla", img: "/images/cakes/vanilla.jpg", prices: { halfKg: 350, oneKg: 700 } },
      { name: "Chocolate", img: "/images/cakes/chocolate.jpg", prices: { halfKg: 400, oneKg: 800 } },
      { name: "Chocolate Truffle", img: "/images/cakes/choco-truffle.jpg", prices: { halfKg: 450, oneKg: 900 } },
      { name: "Black Forest", img: "/images/cakes/black-forest.jpg", prices: { halfKg: 450, oneKg: 900 } },
      { name: "White Forest", img: "/images/cakes/white-forest.jpg", prices: { halfKg: 475, oneKg: 950 } }
    ]
  },

  {
    category: "Brownies",
    items: [
      { name: "Classic Brownie", img: "/images/brownies/classic.jpg", prices: { halfKg: 600, oneKg: 1100 } },
      { name: "Nutella Brownie", img: "/images/brownies/nutella.jpg", prices: { halfKg: 950, oneKg: 1800 } },
      { name: "Oreo Brownie", img: "/images/brownies/oreo.jpg", prices: { halfKg: 750, oneKg: 1400 } }
    ]
  },

  {
    category: "Jar Cakes",
    items: [
      { name: "Butterscotch", img: "/images/jar-cakes/butterscotch.jpg", price: 99 },
      { name: "Choco Chips", img: "/images/jar-cakes/choco-chips.jpg", price: 99 },
      { name: "Strawberry", img: "/images/jar-cakes/strawberry.jpg", price: 99 },
      { name: "Black Forest", img: "/images/jar-cakes/black-forest.jpg", price: 119 },
      { name: "Red Velvet", img: "/images/jar-cakes/red-velvet.jpg", price: 119 }
    ]
  },

  {
    category: "Pastries",
    items: [
      { name: "Vanilla", img: "/images/pastries/vanilla.jpg", price: 50 },
      { name: "Eggless Vanilla", img: "/images/pastries/eggless-vanilla.jpg", price: 55 },
      { name: "Chocolate", img: "/images/pastries/chocolate.jpg", price: 60 },
      { name: "Orange", img: "/images/pastries/orange.jpg", price: 70 },
      { name: "Pineapple", img: "/images/pastries/pineapple.jpg", price: 70 },
      { name: "Strawberry", img: "/images/pastries/strawberry.jpg", price: 70 },
      { name: "Butterscotch", img: "/images/pastries/butterscotch.jpg", price: 70 },
      { name: "Black Forest", img: "/images/pastries/black-forest.jpg", price: 80 },
      { name: "White Forest", img: "/images/pastries/white-forest.jpg", price: 85 },
      { name: "Black Currant", img: "/images/pastries/black-currant.jpg", price: 90 },
      { name: "Mango", img: "/images/pastries/mango.jpg", price: 90 },
      { name: "Blueberry", img: "/images/pastries/blueberry.jpg", price: 90 },
      { name: "Raspberry", img: "/images/pastries/raspberry.jpg", price: 90 },
      { name: "Choco Truffle", img: "/images/pastries/choco-truffle.jpg", price: 95 },
      { name: "Red Velvet", img: "/images/pastries/red-velvet.jpg", price: 95 }
    ]
  
  },
   {
  category: "Dream Cake Version 1",
  items: [
    { name: "Vanilla", img: "/images/dreamcake/v1/vanilla.jpg", prices: { "250g": 289, "500g": 528 } },
    { name: "Chocolate Dark", img: "/images/dreamcake/v1/choco-dark.jpg", prices: { "250g": 304, "500g": 558 } },
    { name: "Chocolate Milk", img: "/images/dreamcake/v1/choco-milk.jpg", prices: { "250g": 314, "500g": 578 } },
    { name: "Triple Choco", img: "/images/dreamcake/v1/triple-choco.jpg", prices: { "250g": 339, "500g": 628 } },
    { name: "Butterscotch", img: "/images/dreamcake/v1/butterscotch.jpg", prices: { "250g": 309, "500g": 568 } },
    { name: "Black Forest", img: "/images/dreamcake/v1/black-forest.jpg", prices: { "250g": 324, "500g": 598 } },
    { name: "Strawberry", img: "/images/dreamcake/v1/strawberry.jpg", prices: { "250g": 300, "500g": 550 } },
    { name: "White Forest", img: "/images/dreamcake/v1/white-forest.jpg", prices: { "250g": 334, "500g": 618 } },
    { name: "Oreo", img: "/images/dreamcake/v1/oreo.jpg", prices: { "250g": 329, "500g": 608 } }
  ]
},
{
  category: "Dream Cake Version 2",
  items: [
    { name: "Vanilla", img: "/images/dreamcake/v2/vanilla.jpg", prices: { "250g": 239, "500g": 478 } },
    { name: "Chocolate Dark", img: "/images/dreamcake/v2/choco-dark.jpg", prices: { "250g": 254, "500g": 508 } },
    { name: "Chocolate Milk", img: "/images/dreamcake/v2/choco-milk.jpg", prices: { "250g": 264, "500g": 528 } },
    { name: "Triple Choco", img: "/images/dreamcake/v2/triple-choco.jpg", prices: { "250g": 289, "500g": 578 } },
    { name: "Butterscotch", img: "/images/dreamcake/v2/butterscotch.jpg", prices: { "250g": 259, "500g": 518 } },
    { name: "Black Forest", img: "/images/dreamcake/v2/black-forest.jpg", prices: { "250g": 274, "500g": 548 } },
    { name: "Strawberry", img: "/images/dreamcake/v2/strawberry.jpg", prices: { "250g": 250, "500g": 500 } },
    { name: "White Forest", img: "/images/dreamcake/v2/white-forest.jpg", prices: { "250g": 284, "500g": 568 } },
    { name: "Oreo", img: "/images/dreamcake/v2/oreo.jpg", prices: { "250g": 279, "500g": 558 } }
  ]
}

];

export default products;