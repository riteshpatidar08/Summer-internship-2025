// //SECTION switch case :

// let color = prompt('Select color from red , yellow , green ');

// switch (color) {
//   case 'yellow':
//     console.log(`color of light is ${color}`);
//     break;
//   case 'red':
//     console.log(`color of light is ${color}`);
//   default:
//     console.log('enter valid a color value');
// }

// //TODO NOTE IMPLEMENT A CALCULATOR USING SWITCH CASE use - , * , / , + operators ;

// //SECTION => FUNCTIONS :

// function test() {
//   //function body
// }

// // test functionName
// //() => parameter => variables

// //NOTE Calling a function => test(arguments) => real values

// const a = 5;

// console.log(a * a);

// const b = 7;
// console.log(b * b);

//NOTE FUNCTION DECLARATION

square(10);

function square(a) {
  console.log(a * a);
}

// greet()

// function greet(){
//     console.log('hello')
//   }

//NOTE 2 . FUNCTION EXPRESSION
//NOTE EXPRESSION =>
// sum(1,2)
let sum = function (a, b) {
  console.log(a + b);
};

//NOTE 3 . ARROW FUNCTION  (ES6 2015) ;

const greet = () => console.log('hello js');
greet();

//NOTE arrow function with multiple parameter
const sum2 = (a, b) => console.log(a + b);
sum2(2, 3);

//NOTE if we have single parameter we can write arrow function like this
const squaree = (a) => console.log(a * a);
squaree(5);

//NOTE if we have multiple statements we have to use the curly braces to write the function body
const substract = (a, b) => {
  console.log('substracting...');
  console.log(a - b);
};

substract(5, 3);

function Intro(firstname) {
  return `My name is ${firstname}`;
}

const a = Intro('Ritesh');
console.log(a);

//NOTE return keyword always return a single value
function sm(a, b) {
  return a, b;
}

console.log(sm(1, 2));

//creating an arrow function with single paramter ;

function dummy2(a) {
  return a * a;
}
const dummy = (a) => {
  console.log('squaring');
  return a * a;
};

//NOTE NON-PRIMITVE DATATYPES :

//NOTE => ARRAY , OBJECTS ;

//what is an array ?

//NOTE DATA STRUCTURE ;  collection of values => element

//1.CREATE
const arr = ['abc', 'xyz', 1, true, null, undefined];

//NOTE OPERATIONS
//2. Accessing an element
console.log(arr[5]);

//3. find the length of an array
console.log(arr.length);

//4. accessing last element without knowing the last index of an array ;
console.log(arr[arr.length - 1]);

//5. modifying an array
arr[2] = 8; //modify the value at index 2
console.log(arr);

//3-4 methods :

//NOTE 1 Add an element to the last of an array :

arr.push('hello');
console.log(arr);

//remove an element from the last :
arr.pop();
console.log(arr);

//NOTE OBJECT :

const Product = {
  name: 'Samsung Tv',
  price: 34599444,
  color: 'black',
};

const dairyProduct = {
  name: 'Amul butter',
  quantity: '100g',
  price: 'rs50',
};
//NOTE accessing the value of any specific key :

//NOTE DOT NOTATION AND BRACKET NOTATION

console.log(dairyProduct.name);
console.log(dairyProduct.price);

//to print something on web page you can use document.write()
document.write(dairyProduct.name);

//modify
dairyProduct.name = 'Amul Salted Butter';
console.log(dairyProduct);



const mydetails = {
  firstName : 'Ritesh' ,
  age : 28 ,
  friends : ['abc' , 'xyz'],
  hasDrivingLicencse : true ,
  "two hundred" : 200
}

console.log(mydetails.friends[0])
console.log(mydetails.hasDrivingLicencse)
console.log(mydetails['two hundred'])

//BRACKET[] 
// const input = prompt('what you want to know about me firstname ,age')
// input = 'age'

// console.log(mydetails['age'])

// create a function knowAboutme(firstname ,age) ;

function knowAboutme(key){
 return mydetails[key]
}

console.log(knowAboutme('first'))


//Array and object 

