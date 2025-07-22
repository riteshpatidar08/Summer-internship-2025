// // DOM  DOCUMENT => HTML FILE  , script file => js file , stylesheet => css file

// //DOM => document => html => object => modal

// //NOTE DOCUMENT => HTML FILE :
// console.log(document);
// console.dir(document.body);

// //DOM MANIPULATION => SELECT
// //HOW TO SELECT ELEMENTS IN A JAVASRICPT FILE :

// //METHOD 1 => getElementById ;
// const theHeadingTag = document.getElementById('heading');
// console.log(theHeadingTag);
// console.dir(theHeadingTag);

// //METHOD 2 => getElementsByTagName ;
// //return htmlcollection which looks like array ;
// const allPara = document.getElementsByTagName('p');
// console.log(allPara);

// //using spread operator  you can convert htmlcollection to array;
// const newArr = [...allPara];

// console.log(newArr);

// newArr.forEach((el) => {
//   console.log(el);
// });
// // const arr = [1,2,3,4] ;
// // console.log(arr.includes()

// //NOTE 3 => getElementsByClassName

// const container  = document.getElementsByClassName('container') ;
// console.log(container)

// //NOTE 4 => querySelector
// const head = document.querySelector('h1') ;
// console.log(head)

// //NOTE queryselector all returns a nodelist
// const querySelectorall  = document.querySelectorAll('h1')

// console.log(querySelectorall)

// querySelectorall.forEach((el)=>{
//   console.log(el)
// })

// Read text content read img src and href

//select

const para = document.getElementById('para');

console.log('textContent', para.textContent);
console.log('innerText', para.innerText);
console.log('innerHTML', para.innerHTML);

para.textContent = '<div><p>hello</p></div>';
para.innerText = '<div><p>hello</p></div>';
para.innerHTML = `<div><p>hello</p></div>`;

const anchor = document.getElementById('link');
console.dir(anchor);
console.log(anchor.href);
console.log(anchor.textContent);

anchor.textContent = 'amazon';
anchor.href = 'https://amazon.in';
//textContent
//innerText
//innerHTML

//NOTE CREATE

//first create an element
const spanTag = document.createElement('span');

console.log(spanTag);
//then fill out the content
spanTag.innerText = 'this is span tag';
console.log(spanTag);
//then decide the placement where you want to add a new element;
document.body.append(spanTag);

const product = {
  name: 'Lo! Foods Gluten Free Millet Ragi Chips Healthy Snacks',
  imgUrl:
    'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/4a2d5e14-4425-4d2d-8958-6d51c6fd73d9.png',
  price: '99',
  quantity: '75g',
  timeToDeliver: '8 mins',
};

//first you have to create a div then fill all the data using tags

//NOTE creating a div 
const container = document.createElement('div');
console.log(container);


//NOTE attribute set using js

container.setAttribute('id' , 'container')
// console.log(container.getAttribute('id'))
// container.removeAttribute('id')




//filling the content
container.innerHTML = `<img src=${product.imgUrl} alt=test-image/>
 <span>${product.timeToDeliver}</span> 
 <h3>${product.name}</h3>
 <span class='span'>${product.quantity}</span>
 <span>Rs.${product.price}</span>`;

 //apending the div to the body
document.body.append(container);

// [

//   {

//     "productName": "Kab's Jackpot Schezwan Chilli Crisps",

//     "flavour": "Schezwan",

//     "type": "Munchies",

//     "unit": "80 g",

//     "price": 65,

//     "currency": "INR",

//     "taxInclusive": true,

//     "shelfLife": "12 months",

//     "description": "Jackpot schezwan chilli sticks are here to take your taste buds on a thrilling expedition! These chilli sticks are bursting with authentic schezwan spices, creating a flavor explosion that's both bold and satisfying. We've crafted a unique blend of spices that delivers a perfect harmony of heat and savory goodness.",

//     "fssaiLicense": "10012011000629",

//     "manufacturer": {

//       "name": "Kwality Foods (Nepal) Pvt. Limited",

//       "address": "Duhabi, Sunsari, Nepal"

//     },

//     "marketer": {

//       "name": "Rama Vision Ltd.",

//       "address": "Rama House, 23, Najafgarh Road Industrial Area, Shivaji Marg, New Delhi - 110015, India"

//     },

//     "countryOfOrigin": "Nepal",

//     "seller": {

//       "name": "BLINK COMMERCE PRIVATE LIMITED",

//       "address": "Plot no 26, Narayan Nagar, Tonk Road, Jaipur - 302017",

//       "fssaiLicense": "10018064001545"

//     },

//     "returnPolicy": {

//       "isReturnable": false,

//       "replacementAllowed": true,

//       "replacementConditions": [

//         "Damaged",

//         "Defective",

//         "Incorrect",

//         "Expired"

//       ],

//       "timeLimit": "72 hours",

//       "returnCondition": "Item must be sealed/unopened/unused and in original condition"

//     },

//     "customerCare": {

//       "email": "info@blinkit.com"

//     },

//     "disclaimer": "Every effort is made to maintain accuracy of all information. However, actual product packaging and materials may contain more and/or different information. It is recommended not to solely rely on the information presented."

//   }

// ]
