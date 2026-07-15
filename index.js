// function func1(){
//     return 2
// }

// function func2(){
//     return 4
// }

// let a = (func1(), func2())

// console.log(a);

// const arr = ["one","two", "three"];
// const str = 'Hello'

// const res = arr.includes('on')
// const re = arr.includes('onetwo')
// const newVar = str.includes('ll')

// console.log(res);
// console.log(re);
// console.log(newVar);

// const names = ["alice" , "bob" , "charlie"];

// const greetings = names.map(names=> toUppercase());

// console.log(greetings);

const prices = [10, 20, 30, 40];

// Your turn! Fill in the blank:
const discountPrices = prices.map(price => price/2);

console.log(discountPrices);

const products = [
  { id: 1, name: "Laptop", price: 999 },
  { id: 2, name: "Phone", price: 699 },
  { id: 3, name: "Headphones", price: 150 }
];

// Goal: Get an array of just the names: ["Laptop", "Phone", "Headphones"]
const productNames = products.map(product => product.name );
console.log(productNames);


const cart = [
  { item: "Apple", price: 1.5, quantity: 3 },
  { item: "Bread", price: 2.0, quantity: 1 },
  { item: "Milk", price: 3.5, quantity: 2 }
];

// Goal: ["Apple: $4.5", "Bread: $2", "Milk: $7"]
const cartSummaries = cart.map(cartItem => {
  // 1. Calculate the total price (price * quantity)
  const total = cartItem.price * cartItem.quantity;
  
  // 2. Return the string format: "ItemName: $TotalPrice"
  return `${cartItem.item}: $${total}`;
});