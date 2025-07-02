//NOTE TYPE CONVERSION AND COERSION

let isJsFun = 'true';
console.log(typeof isJsFun); //string

//NOTE TYPE CONVERSION => when we convert the datatype of any variable explicitly(manual) using some  functions.

const newIsJsFun = Boolean(isJsFun);
console.log(typeof newIsJsFun); //boolean

const age = '34';
const newAge = Number(age);
console.log(typeof newAge);

const phoneNumber = 22343324; //number
const newPhoneNumber = String(phoneNumber);
console.log(typeof newPhoneNumber); //string

//NOTE TYPE COERSION : javascript automatically converts the types.
//NOTE STATEMENT AND EXPRESSION :
const sum = '4' + 4;
console.log(typeof sum);

const substract = '5' - 2;
console.log(substract);
console.log(typeof substract);

const booleanString = true + 1;
console.log(booleanString);

//TODO WHAT IS THE DIFFERNECE BETWEEN TYPE CONVERSION AND COERSION .

//NOTE OPERATORS :

//NOTE AIRTHMATIC OPERATORS :

//NOTE + , - , * , / , % , **  , ++ , -- ;

console.log(4 + 4);
console.log('This' + 'is'); //NOTE concate

//NOTE ASSIGNMENT OPERATORS ;
//NOTE = , += , -= , /= , *= , %=

//NOTE = assignment operators
let a = 5;

let z = 5;
// z = z + 10 ;
z += 10;
console.log(z);
//NOTE += add and assign ;

//COMPARISON OPERATORS
//NOTE == , ===  , != , !==  , >  , <  , <= , >=

//NOTE == (DOUBLE EQUAL OR LOOSE EQUALITY) ;
//NOTE === (TRIPLE EQUAL OR STRICT EQUALITY) => also compares data type
console.log('5' === 5);

//NOTE != LOOSE NOT EQUAL TO ;

console.log('5' != 5);

//NOTE !== STRICT NOT EQUAL TO ;
console.log('5' !== 5);
console.log(5 > 3);
console.log(4 < 5);
console.log(4 >= 4);
console.log(5 <= 5);

//NOTE LOGICAL && || !

console.log(true && false);
console.log(false || true);
console.log(!true);

// console.log('hi' && 'bye')
// console.log( ''  &&  1)

//NOTE UNARY OPERATORS (++ , -- , ! , typeof);
let ab = 5;
ab++;
console.log(ab);
ab--;
console.log(ab);

//NOTE PRINTING STRING USING VARIABLES AND TAKING USER INPUT ;

const firstname = 'ritesh';
const jobProfile = 'MERN STACK DEVELOPER';
const technology = 'REACTJS';

// const bio = 'my' + ' ' +  'name' + ' ' + firstname ; ❌

//NOTE TEMPLATE (LITERAL) STRING OR STRING INTERPOLATION;
const newBio = `my
name is ${firstname}`;
console.log('newBio', newBio);

//NOTE USER INPUT =>
//const namee = prompt('Enter your name') ;
//const agee = prompt('Enter your age');
//const newagee = +agee;
//console.log(typeof newagee);
//const isPermission = confirm('should i procced');
//console.log(isPermission);

//NOTE CONDITIONAL STATEMENT

//NOTE if else if else
// condition end result => boolean
const firstnamee = 'abc';

if (firstnamee === 'fdsadf') {
  console.log('this block will run');
} else if (firstnamee === 'abc') {
  console.log('if firstname is abc then it will run');
} else {
  console.log('if above condition is false then this will run');
}

//NOTE *TRUTHY AND FALSY VALUES
if ('') {
  console.log('this is an empty string');
}

if (0) {
  console.log('this is a zero');
}

if (undefined) {
  console.log('this is undefined');
}

if (-1) {
  console.log('this is minus -1');
}

if (null) {
  console.log('this is a null value');
}

const collegeName = 'ABC';
if (collegeName) {
  console.log(`my college is ${collegeName}`);
}

//NOTE NESTED CONDITIONAL STATEMENT ;
// const username = prompt('Enter username');
// const password = prompt('Enter your Password');
// const uN = 'ritesh123';
// const pass = 'ritesh123';

// if (username === uN) {
//   if (password === pass) {
//     alert('User login successfull');
//   } else {
//     alert('Password donot match');
//   }
// } else {
//   alert('User is not registered  , Please register and try again');
// }

if (true) console.log('hello..............');

console.log('123');

//NOTE TERNARY OPERATOR ;

true
  ? console.log('this is ternary')
  : console.log('this is run if ternary is not true');

// condition ? run if condition true : this will run
