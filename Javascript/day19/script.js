// function getInitials(name) {
//   //1st convert the string into array
//   //   const convertedArray = name.split(' ');
//   //   const mappedOutput =
//   //     convertedArray.map((word) => word.charAt(0)).join('.') + '.';
//   //   console.log(mappedOutput);
//   return (
//     name
//       .split(' ')
//       .map((word) => word.charAt(0))
//       .join('.') + '.'
//   );
// }

// console.log(getInitials('Smith John'));

// //OBJECT METHODS :

// const mydetail = {
//   name: 'ritesh',
//   JobTitle: 'MERN STACK DEVELOPER',
// };

// //OBJECT.keys() ;
// //always return an iterable
// const output = Object.keys(mydetail);
// output.forEach((key) => console.log(key + ':' + mydetail[key]));

// //OBJECT.values()
// //return the values of an object in an array ;

// Object.values(mydetail).forEach((value) => console.log(value));

// //OBJECT.ENTRIES() ;

// const entriesOutput = Object.entries(mydetail);
// entriesOutput.forEach((elm) => {
//   const [key, value] = elm;
//   console.log(`${key} : ${value}`);
// });

// //NOTE DESTRUCTURING (ES6 2015) ;
// //NOTE  destructuring is used to extract  values from an array and store them into seperate variables :

// const arr = [1, 2, 3, 4, 5, 6];
// const [a, , c] = [1, 2, 3];
// console.log(a, c);

// const product = ['tv', 'ac', 'iron', 'cooler'];
// const [item1, item2, item3, item4 = 'table'] = product;

// console.log(item1, item2, item3, item4);

// //default values

// //NOTE DESTRUCTURING OBJECT :

// const car = {
//   name: 'Honda',
//   color: 'white',
//   model: 2020,
//   engine: '1500cc',
// };
// //OBJECT DESTRUCTURING WORKS ON THE BASIS OF KEY NAME , ORDER DOES NOT MATTER
// const { name: carName, model, color, engine = '2000cc' } = car;
// console.log(carName, color, model, engine);

const userData = {
  username: 'admin123',
  password: 'admin@123',
  roles: ['admin', 'superadmin', 'user'],
};

//Use destructuring to access the values and also store roles using array destructuring into separate  variables;

const { username, password, roles } = userData;
const [x, y, z] = roles;
console.log(username, password, x, y, z);

//NOTE [1,2,3,[4,5],6,7] //nested destructuring

// const [a, b, c, [d, e], f, g] = [1, 2, (3)[(4, 5)], 6, 7];

//nested destructuring
const mydetails = {
  name: 'abc',
  address: {
    houseno: {
      houseName: 'krishnaKunj',
    },
  },
};
const {
  name,
  address: {
    houseno: { houseName },
  },
} = mydetails;

console.log(houseName);

//NOTE SPREAD OPERATOR (...) ES6  ;

//spread operator takes all the values out of an array and write them individually ;

//USE CASE 1 to create a shallow copy of an array
const fruits = ['mango', 'papaya', 'pomengranate'];
// console.log(...fruits)
const fruits2 = [...fruits];
console.log(fruits2);

//use case 2 to merge two arrays :
const frontendTech = ['html', 'css', 'js'];
const backendTech = ['node', 'express'];

const mern = [...frontendTech, ...backendTech];
console.log(mern);

//Use case 3 used to add values in start or end;

const newfrontend = ['figma', ...frontendTech, 'reactjs'];
console.log(newfrontend);

//Use to create a shallow copy
const arr = [1, 2, 3, 4, 5, 6];
const arr2 = [...arr];
arr2.push(7);
console.log('arr', arr);
console.log('arr2', arr2);

//how can we use destruturing in object ;

const laptop = {
  name: 'THINKPAD X1 YOGA',
  color: 'METALLIC GREY',
  price: 150000,
  processor: 'intel i5',
};
//note replace the values of any key
console.log({ ...laptop, price: 200000 });

//use case 1 : shallow copy ;
// const laptop2 = laptop ;
const laptop2 = { ...laptop };
laptop2.processor = 'INTEL i7';

console.log(laptop);
console.log(laptop2);

//USE CASE 2nd to merge two objects ;

const specifications = {
  processor: 'Intel i7',
  ram: '32gb',
  ssd: '1tb',
};

const newLaptop = { ...laptop, ...specifications };

console.log(newLaptop);

//spread operator => use case in array and object (...)

//NOTE array => to create shallow copy , merge two array , add values start and end
//NOTE note object = to create shallow copy , merge two object ,
//NOTE IMP => update any specific property values

//NOTE REST OPERTOR(...) ;

//NOTE rest operator packs the remaining values of an array into a variable and give an array of remaining values.

const [first, second, ...third] = [1, 2, 3, 4, 5, 6];
console.log(first, second, third);


const shares = ['mrf' , 'polycab' ,'tata'] ;

const [a,b,c='grse'] = [shares] ;