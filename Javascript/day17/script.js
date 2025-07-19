// //!SECTION Array methods :

// const arr = [1,2,3,45,5] ;

// console.log(arr)
// console.log(typeof arr)

// arr.push()
// //what is the meaning of methods :

// const mydetails = {
//     name : "ritesh" ,
//     age : 28 ,
//     details : function(){
//         console.log(`my name ${this.name} and my age is ${this.age}`)
//     }
// }

// mydetails.details()

//ARRAY METHODS :

//NOTE MODIFY THE ORIGINAL ARRAY :

const products = ['AC', 'TV', 'MOBILE', 'FRIDGE'];

//NOTE 1. PUSH METHOD :
//TODO THINGS TO REMEMBER :
//1. WHAT A METHOD RETURNS : 2 : it mutates the original array or not :

const pushOutput = products.push('COOLER');

//1 check the original if change :
console.log('ORIGINAL ARRAY', products);

//2 check the method output what it returns :
//TODO RETURNS NEW ARRAY LENGTH :
console.log('PUSH METHOD', pushOutput);

//NOTE 2 POP ;

const popOutput = products.pop();

//NOTE RETURNS THE DELETED ELEMENT
console.log('POP', popOutput);

//NOTE MODIFY THE ORIGNAL ARRAY
console.log('ORIGINAL ARRY', products);

//NOTE SHIFT REMOVE ELEMENT FROM START
const shiftOutput = products.shift();

console.log(shiftOutput);
console.log('ORIGINAL ARRAY', products);

//NOTE UNSHIFT ADD ELEMENT TO START
const unshiftOutput = products.unshift('COOLER');

//RETURNS : new array length ;
console.log(unshiftOutput);
console.log('ORIGINAL ARRAY', products);

//NOTE SPLICE TO ADD , REMOVE AND EXTRACT SOME PART OF ARRAY ;

const groceries = ['CURD', 'FRUITS', 'VEGETABLES'];

//DELTE AN ITEM ON A SPECIFIC INDEX
console.log(groceries.splice(1, 1));
console.log('ORIGINAL ARRAY', groceries);

//INSET NEW ITEM ON  A INDEX
console.log(groceries.splice(1, 0, 'FRUITS'));
console.log(groceries);

//DELETE AN ITEM ON PARTICULAR INDEX THEN INSERT NEW ITEM
console.log(groceries.splice(2, 1, 'BISCUITS', 'HAIR OIL'));
console.log(groceries);

// const alphabets = [a, x, b, y];
// make a sequence like a,b,x,y use splice remove and insert element ;

//NON-MODIFIYING METHOD :

//NOTE SLICE :
//USE CASE : TO EXTRACT A PART OF AN ARRAY
const numbers = ['1', '2', '3', '4', '5', '6', '7'];

console.log(numbers.slice(1, 6));

console.log(numbers.slice(-2));
//DONOT MUTATE THE ORIGINAL ARRAY :
console.log(numbers);

//NOTE CONCAT : CONCATE TWO ARRAY :

const frontEnd = ['HTML', 'CSS', 'JS', 'REACT'];
const backEnd = ['NODEJS', 'EXPRESS', 'MONGODB'];

const mernStack = frontEnd.concat(backEnd);
console.log(mernStack);

//NOTE FLAT => FlATTEN OUT THE NESTED ARRY :

const num = [1, 2, [4, [6]], 7];

console.log(num.flat(2));

//NOTE ITERATION METHODS WHICH LOOPS ON ARRAY :

//NOTE FOREACH

const jobs = ['DATA SCIENCE', 'ML', 'DEVOPS'];

const forEachOutput = jobs.forEach((job) => {
  console.log(job);
});

console.log(forEachOutput);

//create a numbers array and multiply it by 2  ;

//NOTE IMP FIND() ;

const evenNumbers = [2, 4, 6, 8, 10, 22, 34, 38, 70, 72];

const findOutput = evenNumbers.find((num) => {
  return num > 20;
});

console.log(findOutput);

const usersData = [
  { id: 1, name: 'TEST', city: 'Jaipur' },
  { id: 2, name: 'TEST2', city: 'UDAIPUR' },
];

const user = usersData.find((data) => {
  console.log(data);
  return data.id === 2;
});

//NOTE FILTER

// const evenNumbers = [2, 4, 6, 8, 10, 22, 34, 38, 70, 72];

const filterOutput = evenNumbers.filter((num) => {
  return num > 20;
});

console.log(filterOutput);

//category select mobile ;

const mart = [
  { name: 'TV', category: 'electronics' },
  { name: 'iphone', category: 'mobile' },
  { name: 'PIXEL', category: 'mobile' },
];

// const mobileItems = mart.filter((item) => {
//   return item.category === 'mobile';
// });

const mobileItems = mart.filter((item) => item.category === 'mobile');
console.log(mobileItems);

//NOTE ***** map method ;

const nm = [1, 2, 3, 4, 5, 6];
const mappedOutput = nm.map((n) => {
  return n * 3;
});
console.log(mappedOutput);

//RETURNS ALWAYS RETURN A NEW ARRAY WHICH IS THE RESULT OF TRANSFORMATION WE HAVE APPLIED :
const itemWithAddedPrice = mart.map((item, index) => {
  console.log(index);
  item.price = 324234;
  return item;
});
console.log(itemWithAddedPrice);
