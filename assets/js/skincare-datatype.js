// object of my name, age, classes, interests, travel, skincare products, and budget
var aidan = {
  name: "Aidan",
  age: 15,
  classes:["AP CSP", "Chinese", "AP Calc", "English", "AP Bio"],
  interests:["Video Games", "Skincare", "Music"],
  travel:["Japan", "Korea", "Hong Kong", "Taiwan"],
  skincareProducts: 10,
  budget: 94.76,
  male: true,
};

// print object
console.log(aidan);

// adding more values to the array
aidan.classes.push("Online World History");
aidan.interests.push("Programming");
console.log(aidan);
console.log(aidan.classes);
console.log(aidan.interests);

// mathematical calculation to calculate budget after spending money on two more products
console.log('I want to buy 2 more skincare products, each costing 10 dollars each, how much money will I have after that?');
const costPerSkincareProduct = 10;
const numberOfSkincareProducts = 2;
aidan.budget -= costPerSkincareProduct * numberOfSkincareProducts;
aidan.skincareProducts += numberOfSkincareProducts;
console.log(`After buying ${numberOfSkincareProducts} more skincare products, I will have ${aidan.budget} dollars left.`);
console.log(`I will have ${aidan.skincareProducts} skincare products are buying 2 more`);

// print type of datatype 
console.log(`The datatype of the classes array is an ${typeof aidan.classes}`);
console.log(`The datatype of skincareProducts is a ${typeof aidan.skincareProducts}`);
console.log(`The datatype of budget is a ${typeof aidan.budget}`);
console.log(`The datatype of male is ${typeof aidan.male}`);