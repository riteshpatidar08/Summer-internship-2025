// DOM  DOCUMENT => HTML FILE  , script file => js file , stylesheet => css file

//DOM => document => html => object => modal

//NOTE DOCUMENT => HTML FILE :
console.log(document);
console.dir(document.body);

//DOM MANIPULATION => SELECT
//HOW TO SELECT ELEMENTS IN A JAVASRICPT FILE :

//METHOD 1 => getElementById ;
const theHeadingTag = document.getElementById('heading');
console.log(theHeadingTag);
console.dir(theHeadingTag);

//METHOD 2 => getElementsByTagName ;
//return htmlcollection which looks like array ;
const allPara = document.getElementsByTagName('p');
console.log(allPara);

//using spread operator  you can convert htmlcollection to array;
const newArr = [...allPara];

console.log(newArr);

newArr.forEach((el) => {
  console.log(el);
});
// const arr = [1,2,3,4] ;
// console.log(arr.includes()
