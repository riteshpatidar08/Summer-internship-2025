//SECTION ARRAY OF OBJECT

const arr = [
  1,
  'string',
  null,
  undefined,
  {
    name: 'ritesh',
    age: 27,
  },
];

console.log(arr[4].name);

//NOTE LOOP => for , while , do while , for of , for in

// for(initialize ; condition ; increment/decrement) ;

for (let i = 1; i <= 10; i++) {
  console.log(i);
}
//NOTE iterable array , string

const firstName = 'Ritesh';

for (let i = 0; i <= firstName.length - 1; i++) {
  console.log(firstName[i]);
}

//sum n natural numbers ;

function sumOfNaturalNumber(n) {
  console.log(n);
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    console.log(i);
    sum += i;
  }
  return sum;
}
console.log(sumOfNaturalNumber(100));

//NOTE break ; continue

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 10];

// for (let i = 0; i < numbers.length; i++) {
//   if (numbers[i] === 2) {
//     continue;
//   }
//   console.log(i);
// }

//NOTE : const items = ['phone' , 'laptop' , 'tv' , 'ps5' ,'ac'] ;
// find if tv exist in the items array ;

//NOTE count number of vowels in the string  ;
//NOTE REVERSE A STRING  ;

//NOTE const students = [{name : "aman" , marks : 90} , {name : "shubham" , marks : 70} , {name : "ram" , marks : 55}] ;

//NOTE NESTED LOOP ;

// function PrintTable(n) {
//   for (let i = 1; i <= n; i++) {
//     for (let j = 1; j <= 10; j++) {
//       console.log(`${i} * ${j} = ${i * j}`);
//     }
//   }
// }
// PrintTable(10);

//while loop

const ar = [1, 2, 3, 4, 5, 6, 7];
let i = 0;
while (i < ar.length) {
  console.log(ar[i]);
  i++;
}

//loop till a password match , take user input ;

// let pass ;

// while(pass !== 'admin123'){
//   pass = prompt('Enter your password')
// }

//NOTE do while ;
let j = 0;
do {
  console.log(j); //print
  j++; //increment
} while (j < 10); //condition check

//do this while this condition is true ;

// let username = 'admin123';
// let password = 'admin@123';
// let inputUser;
// let inputPass;
// do {
//   inputUser = prompt('Enter your username');
//   inputPass = prompt('Enter your Password');
//   if (inputUser !== username && inputPass !== password) {
//     alert('username and password not match , Please try again');
//   }
// } while (inputUser !== username && inputPass !== password);

// alert('successfully login');

//NOTE for of and for in ;

const items = ['phone', 'laptop', 'tv', 'ps5', 'ac'];

//for of and for in
//NOTE elements read
for (let item of items) {
  console.log(item);
}
//NOTE index read
for (let index in items) {
  console.log(index);
}

//SECTION ARRAY METHODS :

