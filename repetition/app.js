let person = {
  name: "Jack",
  age: 5830,
  city: "Tashkent",
};
let person1 = {
  name: "full",
  age: 8282,
  city: "Jizzax",
};
let person2 = [
  ["day", 10],
  ["week", 5],
  ["month", 7],
];
console.log(Object.assign(person, person1));
console.log(Object.entries(person1)); // array ko'rinishda saqlaydi
console.log(Object.fromEntries(person2)); // array ko'rinishdagi datani obj ko'rinishda olib beradi
console.log(Object.values(person1)); //faqat xamma valuelarni oladi
console.log(Object.keys(person1)); //faqat xamma keylarni oladi
console.log(JSON.stringify(person1)); // qande ko'rinishda bo'sa shu data typda obberadi

// Create an Array
const fruits = [
  { name: "apples", quantity: 300 },
  { name: "bananas", quantity: 500 },
  { name: "oranges", quantity: 200 },
  { name: "kiwi", quantity: 150 },
];

// Callback function to Group Elements
function myCallback({ quantity }) {
  return quantity > 200 ? "ok" : "low";
}

// Group by Quantity
const result = Object.groupBy(fruits, myCallback);
console.log(result);
