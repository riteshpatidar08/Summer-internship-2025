// // //NOTE SCOPE :

// // //global ,  function scope , block ,

// // // var a = 5;
// // let firstname;

// // //function will create a local scope for itself from this scope no variable leaks to outer scope ;
// // function test() {
// //   firstname = 'ritesh';
// // }

// // console.log(test());
// // console.log(firstname);

// // if (true) {
// //   let course = 'MERN';
// // }

// // // console.log(course);

// // //NOTE POINTS TO REMEMBER
// // //block scope let const var  ;
// // //function scope let const var (local scope) ;
// // //global let const var ;

// // //NOTE variable shadowing

// // let age = 21;

// // function calculateAge() {
// //   let age = 23;
// //   console.log(age);
// // }

// // calculateAge();
// // console.log(age);

// // //NOTE SCOPE CHAINING ;
// // const a = 'global';
// // function outer() {
// //   const a = 'local';
// //   function inner() {
// //     function inner1() {
// //       function inner2() {
// //         console.log(a);
// //       }
// //       inner2();
// //     }
// //     inner1();
// //   }
// //   inner();
// // }

// // outer();

// // const college = 'test';

// // function demo() {
// //   console.log(college);
// // }

// // //NOTE global scope => college  => lexical scope

// //NOTE => HOISTING (110%)
// //in hoisting all the decalration moves to the top of the scope ;

// //JS GLOBAL OBJECT  :
// console.log(window)

// //CASE 1 . we can access function decalration from global window object
// window.test()

// function test(){
//     console.log('test is running')
// }

// //CASE 2 VAR  KEYWORD
// console.log(evenNumber)

//GLOBAL VARIABLE //window object key : value pair
var evenNumber = 4;

//LET

// console.log(oddNumber)
//ERROR CANNOT ACCESS VARIABLENAME BEFORE INITIALIZATION
let oddNumber = 3;

// console.log(naturalNumber);

const naturalNumber = '1234';
// console.log(naturalNumber)

//NOTE THIS KEYWORD

//NOTE WHEN  I USE THIS KEYWORD IN GLOBAL SCOPE IT WILL POINT TO WINDOW OBJECT
console.log(this);

//NOTE WHEN I USE THIS KEYWORD IN FUNCTION DECALARATION ;
function sum() {
  console.log(this);
}

sum();

//NOTE IN CASE OF ARROW FUNCTION
//NOTE THINGS TO REMEMBER  ARROW FUNCTION DONOT HAVE ITS OWN THIS KEYWORD IT WILL USE ITS LEXICAL SCOPE THIS
const substract = () => {
  console.log(this);
};
substract();

//NOTE OBJECT
//always use function declaration when creating methods in an object
const mydetails = {
  name: 'RITESH',
  printName: function () {
    console.log(this);
  },
  printAnother: () => {
    console.log(this);
  },
};
mydetails.printName();
mydetails.printAnother();


//string method ;
//array method ;
//object method ;

//loops ,conditional statement  , rest operator
//destructring 
//spread oprator
//hoisting
//scope 
//this keyword 


