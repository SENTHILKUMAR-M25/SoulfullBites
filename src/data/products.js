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

  // {
  //   category: "Brownies",
  //   items: [
  //     { name: "Classic Brownie", img: "/images/brownies/classic.jpg", prices: { halfKg: 600, oneKg: 1100 } },
  //     { name: "Nutella Brownie", img: "/images/brownies/nutella.jpg", prices: { halfKg: 950, oneKg: 1800 } },
  //     { name: "Oreo Brownie", img: "/images/brownies/oreo.jpg", prices: { halfKg: 750, oneKg: 1400 } }
  //   ]
  // },
{
  category: "Brownies",
  items: [
    { name: "Classic Brownie", img: "/images/brownies/classic.jpg", prices: { halfKg: 600, oneKg: 1100 } },
    { name: "Blondie Brownie", img: "/images/brownies/blondie.jpg", prices: { halfKg: 700, oneKg: 1300 } },
    { name: "Dark Chocolate Brownie", img: "/images/brownies/dark-chocolate.jpg", prices: { halfKg: 650, oneKg: 1200 } },
    { name: "Double Chocolate Brownie", img: "/images/brownies/double-chocolate.jpg", prices: { halfKg: 750, oneKg: 1400 } },
    { name: "Triple Chocolate Brownie", img: "/images/brownies/triple-chocolate.jpg", prices: { halfKg: 850, oneKg: 1600 } },
    { name: "Nutella Brownie", img: "/images/brownies/nutella.jpg", prices: { halfKg: 950, oneKg: 1800 } },
    { name: "Oreo Chocolate Brownie", img: "/images/brownies/oreo.jpg", prices: { halfKg: 750, oneKg: 1400 } },
    { name: "Biscoff Chocolate Brownie", img: "/images/brownies/biscoff.jpg", prices: { halfKg: 950, oneKg: 1800 } },
    { name: "Pista Brownie", img: "/images/brownies/pista.jpg", prices: { halfKg: 1000, oneKg: 1900 } },
    { name: "Almond Brownie", img: "/images/brownies/almond.jpg", prices: { halfKg: 900, oneKg: 1700 } },
    { name: "Walnut Brownie", img: "/images/brownies/walnut.jpg", prices: { halfKg: 800, oneKg: 1500 } },
    { name: "Peanut Butter Swirl Brownie", img: "/images/brownies/pb-swirl.jpg", prices: { halfKg: 750, oneKg: 1400 } },
    { name: "Sandwich Brownie", img: "/images/brownies/sandwich.jpg", prices: { halfKg: 800, oneKg: 1500 } }
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
},

{
    category: "Sandwiches",
    items: [
      {
        subCategory: "Hot & Spicy",
        items: [
          { name: "Veg Cheesy Sandwich", img: "/images/sandwiches/veg-cheesy.jpg", price: 50 },
          { name: "Corn Cheesy Sandwich", img: "/images/sandwiches/corn-cheesy.jpg", price: 70 },
          { name: "Capsicum Cheesy Sandwich", img: "/images/sandwiches/capsicum-cheesy.jpg", price: 75 },
          { name: "Paneer Tikka Sandwich", img: "/images/sandwiches/paneer-tikka.jpg", price: 80 },
          { name: "Mushroom Cheesy Sandwich", img: "/images/sandwiches/mushroom-cheesy.jpg", price: 85 },
          { name: "Paneer Cheesy Sandwich", img: "/images/sandwiches/paneer-cheesy.jpg", price: 100 },
          { name: "Chicken Mayo Sandwich", img: "/images/sandwiches/chicken-mayo.jpg", price: 120 },
          { name: "Chicken Cheese Sandwich", img: "/images/sandwiches/chicken-cheese.jpg", price: 150 }
        ]
      },
      {
        subCategory: "Hot & Sweet",
        items: [
          { name: "Jam And Honey Sandwich", img: "/images/sandwiches/jam-honey.jpg", price: 40 },
          { name: "Peanut Butter Sandwich", img: "/images/sandwiches/peanut-butter.jpg", price: 80 },
          { name: "Nutella Sandwich", img: "/images/sandwiches/nutella.jpg", price: 100 }
        ]
      }
    ]
  },
  {
  category: "Bun Varieties",
  items: [
    { name: "Jam Bun", img: "/images/buns/jam-bun.jpg", price: 20 },
    { name: "Cream Bun", img: "/images/buns/cream-bun.jpg", price: 30 },
    { name: "Fruit (Tutli Frutti) Bun", img: "/images/buns/fruit-bun.jpg", price: 35 },
    { name: "Chocolate Cream Bun", img: "/images/buns/chocolate-cream-bun.jpg", price: 40 },
    { name: "Butter Bun", img: "/images/buns/butter-bun.jpg", price: 40 },
    { name: "Caramel Bun", img: "/images/buns/caramel-bun.jpg", price: 45 },
    { name: "Strawberry Bun", img: "/images/buns/strawberry-bun.jpg", price: 50 },
    { name: "Pineapple Bun", img: "/images/buns/pineapple-bun.jpg", price: 50 },
    { name: "Orange Bun", img: "/images/buns/orange-bun.jpg", price: 50 },
    { name: "Cherry Bun", img: "/images/buns/cherry-bun.jpg", price: 60 },
    { name: "Cheese Cream Bun", img: "/images/buns/cheese-cream-bun.jpg", price: 80 },
    { name: "Garlic Butter Bun", img: "/images/buns/garlic-butter-bun.jpg", price: 85 },
    { name: "Oreo Cream Bun", img: "/images/buns/oreo-cream-bun.jpg", price: 90 },
    { name: "Korean Bun", img: "/images/buns/korean-bun.jpg", price: 90 },
    { name: "Chocolate Lava Bun", img: "/images/buns/chocolate-lava-bun.jpg", price: 95 },
    { name: "Nutella Bun", img: "/images/buns/nutella-bun.jpg", price: 100 }
  ]
},
];

export default products;




// import Dark_Chocolate from "../assets/ChocoPies/"
// import Milk_Chocolate from "../assets/ChocoPies/"
// import White_Chocolate from "../assets/ChocoPies/"
// import Butter_Scotch from "../assets/Ball&HeartBites/"
// import Strawberry from "../assets/Ball&HeartBites/"
// import Pineapple from "../assets/Ball&HeartBites/"
// import Choco_Truffle from "../assets/Ball&HeartBites/"
// import Vanilla from "../assets/Classic Cakes/"
// import Chocolate from "../assets/Classic Cakes/"
// import Chocolate_Truffle from "../assets/Classic Cakes/"
// import Black_Forest from "../assets/Classic Cakes/"
// import White_Forest from "../assets/Classic Cakes/"
// import Classic_Brownie from "../assets/Brownies/"
// import Nutella_Brownie from "../assets/Brownies/"
// import Oreo_Brownie from "../assets/Brownies/"
// import Butterscotch from "../assets/JarCakes/"
// import Choco_Chips from "../assets/JarCakes/"
// import Strawberry from "../assets/JarCakes/"
// import Black_Forest from "../assets/JarCakes/"
// import Red_Velvet from "../assets/JarCakes/"
// import Vanilla from "../assets/Pastries"


// const products = [

//   {
//     category: "Choco Pies",
//     items: [
//       {
//         name: "Dark Chocolate",
//         img: Dark_Chocolate,
//         prices: {
//           pack4: 90,
//           single: 25
//         }
//       },

//       {
//         name: "Milk Chocolate",
//         img:Milk_Chocolate,
//         prices: {
//           pack4: 110,
//           single: 30
//         }
//       },

//       {
//         name: "White Chocolate",
//         img: White_Chocolate,
//         prices: {
//           pack4: 130,
//           single: 35
//         }
//       }
//     ]
//   },

//   {
//     category: "Ball & Heart Bites",
//     items: [
//       { name: "ButterScotch", img: Butter_Scotch, price: 10 },
//       { name: "Strawberry", img: Strawberry, price: 10 },
//       { name: "Pineapple", img: Pineapple, price: 10 },
//       { name: "Choco Truffle", img: Choco_Truffle, price: 10 },
//     ]
//   },

//   {
//     category: "Classic Cakes",
//     items: [
//       { name: "Vanilla", img: Vanilla, prices: { halfKg: 350, oneKg: 700 } },
//       { name: "Chocolate", img: Chocolate, prices: { halfKg: 400, oneKg: 800 } },
//       { name: "Chocolate Truffle", img: Chocolate_Truffle, prices: { halfKg: 450, oneKg: 900 } },
//       { name: "Black Forest", img: Black_Forest, prices: { halfKg: 450, oneKg: 900 } },
//       { name: "White Forest", img: White_Forest, prices: { halfKg: 475, oneKg: 950 } }
//     ]
//   },

//   {
//     category: "Brownies",
//     items: [
//       { name: "Classic Brownie", img: Classic_Brownie, prices: { halfKg: 600, oneKg: 1100 } },
//       { name: "Nutella_Brownie", img: Nutella_Brownie, prices: { halfKg: 950, oneKg: 1800 } },
//       { name: "Oreo_Brownie", img: Oreo_Brownie, prices: { halfKg: 750, oneKg: 1400 } }
//     ]
//   },

//   {
//     category: "Jar Cakes",
//     items: [
//       { name: "Butterscotch", img: Butterscotch, price: 99 },
//       { name: "Choco Chips", img: Choco_Chips, price: 99 },
//       { name: "Strawberry", img: Strawberry, price: 99 },
//       { name: "Black Forest", img: Black_Forest, price: 119 },
//       { name: "Red Velvet", img: Red_Velvet, price: 119 }
//     ]
//   },

//   {
//     category: "Pastries",
//     items: [
//       { name: "Vanilla", img: "/images/pastries/vanilla.jpg", price: 50 },
//       { name: "Eggless Vanilla", img: "/images/pastries/eggless-vanilla.jpg", price: 55 },
//       { name: "Chocolate", img: "/images/pastries/chocolate.jpg", price: 60 },
//       { name: "Orange", img: "/images/pastries/orange.jpg", price: 70 },
//       { name: "Pineapple", img: "/images/pastries/pineapple.jpg", price: 70 },
//       { name: "Strawberry", img: "/images/pastries/strawberry.jpg", price: 70 },
//       { name: "Butterscotch", img: "/images/pastries/butterscotch.jpg", price: 70 },
//       { name: "Black Forest", img: "/images/pastries/black-forest.jpg", price: 80 },
//       { name: "White Forest", img: "/images/pastries/white-forest.jpg", price: 85 },
//       { name: "Black Currant", img: "/images/pastries/black-currant.jpg", price: 90 },
//       { name: "Mango", img: "/images/pastries/mango.jpg", price: 90 },
//       { name: "Blueberry", img: "/images/pastries/blueberry.jpg", price: 90 },
//       { name: "Raspberry", img: "/images/pastries/raspberry.jpg", price: 90 },
//       { name: "Choco Truffle", img: "/images/pastries/choco-truffle.jpg", price: 95 },
//       { name: "Red Velvet", img: "/images/pastries/red-velvet.jpg", price: 95 }
//     ]
  
//   },
//    {
//   category: "Dream Cake Version 1",
//   items: [
//     { name: "Vanilla", img: "/images/dreamcake/v1/vanilla.jpg", prices: { "250g": 289, "500g": 528 } },
//     { name: "Chocolate Dark", img: "/images/dreamcake/v1/choco-dark.jpg", prices: { "250g": 304, "500g": 558 } },
//     { name: "Chocolate Milk", img: "/images/dreamcake/v1/choco-milk.jpg", prices: { "250g": 314, "500g": 578 } },
//     { name: "Triple Choco", img: "/images/dreamcake/v1/triple-choco.jpg", prices: { "250g": 339, "500g": 628 } },
//     { name: "Butterscotch", img: "/images/dreamcake/v1/butterscotch.jpg", prices: { "250g": 309, "500g": 568 } },
//     { name: "Black Forest", img: "/images/dreamcake/v1/black-forest.jpg", prices: { "250g": 324, "500g": 598 } },
//     { name: "Strawberry", img: "/images/dreamcake/v1/strawberry.jpg", prices: { "250g": 300, "500g": 550 } },
//     { name: "White Forest", img: "/images/dreamcake/v1/white-forest.jpg", prices: { "250g": 334, "500g": 618 } },
//     { name: "Oreo", img: "/images/dreamcake/v1/oreo.jpg", prices: { "250g": 329, "500g": 608 } }
//   ]
// },
// {
//   category: "Dream Cake Version 2",
//   items: [
//     { name: "Vanilla", img: "/images/dreamcake/v2/vanilla.jpg", prices: { "250g": 239, "500g": 478 } },
//     { name: "Chocolate Dark", img: "/images/dreamcake/v2/choco-dark.jpg", prices: { "250g": 254, "500g": 508 } },
//     { name: "Chocolate Milk", img: "/images/dreamcake/v2/choco-milk.jpg", prices: { "250g": 264, "500g": 528 } },
//     { name: "Triple Choco", img: "/images/dreamcake/v2/triple-choco.jpg", prices: { "250g": 289, "500g": 578 } },
//     { name: "Butterscotch", img: "/images/dreamcake/v2/butterscotch.jpg", prices: { "250g": 259, "500g": 518 } },
//     { name: "Black Forest", img: "/images/dreamcake/v2/black-forest.jpg", prices: { "250g": 274, "500g": 548 } },
//     { name: "Strawberry", img: "/images/dreamcake/v2/strawberry.jpg", prices: { "250g": 250, "500g": 500 } },
//     { name: "White Forest", img: "/images/dreamcake/v2/white-forest.jpg", prices: { "250g": 284, "500g": 568 } },
//     { name: "Oreo", img: "/images/dreamcake/v2/oreo.jpg", prices: { "250g": 279, "500g": 558 } }
//   ]
// },

// {
//     category: "Sandwiches",
//     items: [
//       {
//         subCategory: "Hot & Spicy",
//         items: [
//           { name: "Veg Cheesy Sandwich", img: "/images/sandwiches/veg-cheesy.jpg", price: 50 },
//           { name: "Corn Cheesy Sandwich", img: "/images/sandwiches/corn-cheesy.jpg", price: 70 },
//           { name: "Capsicum Cheesy Sandwich", img: "/images/sandwiches/capsicum-cheesy.jpg", price: 75 },
//           { name: "Paneer Tikka Sandwich", img: "/images/sandwiches/paneer-tikka.jpg", price: 80 },
//           { name: "Mushroom Cheesy Sandwich", img: "/images/sandwiches/mushroom-cheesy.jpg", price: 85 },
//           { name: "Paneer Cheesy Sandwich", img: "/images/sandwiches/paneer-cheesy.jpg", price: 100 },
//           { name: "Chicken Mayo Sandwich", img: "/images/sandwiches/chicken-mayo.jpg", price: 120 },
//           { name: "Chicken Cheese Sandwich", img: "/images/sandwiches/chicken-cheese.jpg", price: 150 }
//         ]
//       },
//       {
//         subCategory: "Hot & Sweet",
//         items: [
//           { name: "Jam And Honey Sandwich", img: "/images/sandwiches/jam-honey.jpg", price: 40 },
//           { name: "Peanut Butter Sandwich", img: "/images/sandwiches/peanut-butter.jpg", price: 80 },
//           { name: "Nutella Sandwich", img: "/images/sandwiches/nutella.jpg", price: 100 }
//         ]
//       }
//     ]
//   },
//   {
//   category: "Bun Varieties",
//   items: [
//     { name: "Jam Bun", img: "/images/buns/jam-bun.jpg", price: 20 },
//     { name: "Cream Bun", img: "/images/buns/cream-bun.jpg", price: 30 },
//     { name: "Fruit (Tutli Frutti) Bun", img: "/images/buns/fruit-bun.jpg", price: 35 },
//     { name: "Chocolate Cream Bun", img: "/images/buns/chocolate-cream-bun.jpg", price: 40 },
//     { name: "Butter Bun", img: "/images/buns/butter-bun.jpg", price: 40 },
//     { name: "Caramel Bun", img: "/images/buns/caramel-bun.jpg", price: 45 },
//     { name: "Strawberry Bun", img: "/images/buns/strawberry-bun.jpg", price: 50 },
//     { name: "Pineapple Bun", img: "/images/buns/pineapple-bun.jpg", price: 50 },
//     { name: "Orange Bun", img: "/images/buns/orange-bun.jpg", price: 50 },
//     { name: "Cherry Bun", img: "/images/buns/cherry-bun.jpg", price: 60 },
//     { name: "Cheese Cream Bun", img: "/images/buns/cheese-cream-bun.jpg", price: 80 },
//     { name: "Garlic Butter Bun", img: "/images/buns/garlic-butter-bun.jpg", price: 85 },
//     { name: "Oreo Cream Bun", img: "/images/buns/oreo-cream-bun.jpg", price: 90 },
//     { name: "Korean Bun", img: "/images/buns/korean-bun.jpg", price: 90 },
//     { name: "Chocolate Lava Bun", img: "/images/buns/chocolate-lava-bun.jpg", price: 95 },
//     { name: "Nutella Bun", img: "/images/buns/nutella-bun.jpg", price: 100 }
//   ]
// },
// ];

// export default products;