//NOTE some and every : => true or false => higher order methods :

const numbers = [1, 2, 3, 4, 5, 6, 11];

const someOutput = numbers.some((n) => {
  return n > 10;
});

console.log(someOutput);

const everyOutput = numbers.every((n) => {
  return n > 10;
});

console.log(everyOutput);

//NOTE reduce ; => numbers calculate => single value

const reducerOutput = numbers.reduce((acc, current) => {
  console.log('acc', acc, 'current', current);
  return acc + current;
}, 2);
console.log(reducerOutput);

const productData = [
  {
    name: 'shirt',
    quantity: 8,
    price: 500,
  },
  {
    name: 'jeans',
    quantity: 4,
    price: 1250,
  },
];

const totalCartPrice = productData.reduce((acc, item) => {
  console.log(acc, item);
  return acc + item.quantity * item.price;
}, 0);

console.log(totalCartPrice);

//use case => maximun reducer , //use case => reverse string ,

//NOTE lastIndexof ,
const evenNumbers = [2, 4, 6, 8, 2, 10];
console.log(evenNumbers.lastIndexOf(2));

//NOTE indexof ,
const jobs = ['mern', 'prompt engineer', 'mean'];

console.log(jobs.indexOf('mern'));

// NOTE findIndex

const obj = [
  {
    name: 'abc',
    age: 25,
  },
  {
    name: 'xyz',
    age: 23,
  },
];

const findIndexOutput = obj.findIndex((item) => {
  return item.age > 30;
});

console.log(findIndexOutput);

const arr = [1, 2, -3, 4, 5, -5];

//NOTE find the first negative number in an array and delete the element ;

const negativeIndex = arr.findIndex((n) => {
  return n < 0;
});

console.log(negativeIndex);
console.log(arr.splice(negativeIndex, 1));
console.log(arr);

//NOTE make a new array which have  all the positive number ;
//NOTE METHOD FILTER n > 0 ;

//NOTE Includes ;

const roles = ['user'];

console.log(roles.includes('admin'));

if (!roles.includes('admin')) {
  console.log('you are not authorize to perform this action');
}

//NOTE reverse  to reverse an arry
const pages = ['Home', 'About', 'Services', 'Blogs'];
const reversedPages = pages.reverse();
console.log('ORIGINAL ARRAY', pages);
console.log('reverse method', reversedPages);

//NOTE sort
const numbrs = [1, 2, 3, 4, 44, 5, 6, 9];
const sortedArray = numbrs.sort((a, b) => {
  console.log(a, b);
  return b - a;
});
console.log(sortedArray);
//NOTE join

const js = ['hello', 'JS'];
console.log(js.join(' '));

//NOTE method chaining ;

const naturalNumber = [2, 3, 4, 5, 6, 7, 12, 3, 44, 5, 6443, 223];

//filterout n > 20 then multiply * 3 ;
//method to be used => filter map  n * 3

const result = naturalNumber.filter((n) => n > 20).map((n) => n * 3);
console.log(result);

const students = [
  { name: 'Aman', score: 89 },
  { name: 'Akshay', score: 75 },
  { name: 'Rohit', score: 80 },
  { name: 'Shubham', score: 85 },
];

//NOTE find the students who's score is greater or equal to 80 and  sort them in descending order and  create a new array which only included their names.

//SECTION STRING METHODS
// length
const str = '    We are learning javascript       ';
console.log(typeof str);

console.log(str.length);
// toLowerCase()
console.log(str.toLowerCase());
// toUpperCase()
console.log(str.toUpperCase());

//NOTE  trim()

// console.log(str.trim())
// trimStart()

console.log(str.trimStart());
// trimEnd()

console.log(str.trimEnd());
// includes()

const email = 'ritesh@gmail.com';
console.log(email.includes('@'));

// startsWith()
const newStr = 'Javascript';
console.log(newStr.startsWith('A'));
// endsWith()
console.log(newStr.endsWith('e'));
// indexOf()
console.log(newStr.indexOf('z'));
// lastIndexOf()
console.log(newStr.lastIndexOf('a'));
// slice()
//NOTE when i use negative number as a starting index it return empty string
console.log(newStr.slice(-2, 1));
// substring()
// console.log(newStr.substring(-2 , 6))

// replace()
const sent = 'How How are you doing';
console.log(sent.replace('How', 'What'));
// replaceAll()
console.log(sent.replaceAll('How', 'What'));
// padStart()
const cardNumber = '4353';
const cN = cardNumber.padEnd(16, '*');
console.log(cN);
// padEnd()
// repeat()
// split()
// charAt()

// concat()
// match()
// matchAll()

//QUESTION TAKE A CARD NUMBER 432434343433343 extract last 4 character than use the padStart method to show the remaining card number as * ;

const debitCard = '2345434543454321';
console.log(debitCard.slice(-4).padStart(16, '*'));

//repeat ;

const check = 'ha-';
console.log(check.repeat(10));

//imp : split  convert a string into array

const intro = 'my name is ritesh';
const para =
  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla cumque placeat, voluptatem fugit facere at dicta eum earum vero quos magnam expedita fuga consectetur ritesh@gmail.com  iste natus nesciunt voluptates commodi dignissimos';
// const password = 'ritesh@gmail.com';
console.log(para.match('@'));

console.log(para.match(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/));

console.log(intro.charAt(3));

console.log(intro.split(' ').reverse().join(' '));





//attendence 

//shilpa , tina , nikita , sanjana , prem  , tushar , sachin , rohit