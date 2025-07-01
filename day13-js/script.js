//print
console.log('JS');
//NOTE INTERPRETED , DYNAMICALLY TYPED  AND SYNCHRONOUS

//NOTE VARIABLE DECLATATION => ALWAYS USER camelCase eg(isJsFun) and use keyword to define varaible
college = 'IPSA';
console.log(college);

isJsFun = true;

college = 'arya';
console.log(college);

//NOTE DATATYPES , PRIMITIVE AND NON-PRIMIVITE

//NOTE PRIMITIVE

//NOTE 1st STRING ;
const firstName = 'Abc';
//NOTE typeof operator => return the type of value save in the variable
typeof firstName;
console.log(typeof firstName);

//NOTE 2nd Number ;

const age = 20;
console.log(typeof age);

//NOTE 3rd BOOLEAN ;
const isJsClassBoring = true;
console.log(typeof isJsClassBoring);

//NOTE 4th UNDEFINED ;
let company;
console.log(company);
console.log(typeof company);

//NOTE 5th NULL ;
let lastName = null;
console.log(lastName);
console.log(typeof null);

//TODO => what is the difference between null and undefined ?
//REVIEW - undefined => variable is declared but value is not assign yet the type of undefined is "UNDEFINED" , null => in a variable if we explicitly assign no value means zero , the type of null is "OBJECT".

//NOTE TOPIC => KEYWORD USED TO DECLARE VARIABLE:

//NOTE 1st let
let data = 'we are learning js🔥';
console.log(data);

//NOTE REASSIGNING LET
data = 'we are learning reactjs';
console.log(data);

//NOTE REDECLARATION 
// let data = 'hello' ;
// console.log(data)❌


//NOTE 2nd const 
const phoneNumber = 342434 ;

//❌NOTE REASSIGNING CONST
// phoneNumber = 43242;
// console.log(phoneNumber)

//❌NOTE REDECLARATION CONST
// const phoneNumber = 2434 ;

//NOTE VAR 
var companyName = 'meta' ;
//NOTE✔️ REASSIGNING THE VAR 
companyName = 'oracle' ;
console.log(companyName)
//NOTE✔️ REDECLARING THE VAR ;
var companyName = 'ibm' ;
console.log(companyName)
