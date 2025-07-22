// //SELECTION METHOD :

// const heading = document.getElementById('heading');

// console.log(heading);
// heading.style.color = 'red';

// const properties = [{ propertyname: 'color', value: 'red' }];

// properties.forEach((property) => {
//   heading.style[property.propertyname] = property.value;
// });

// //events
// const btn = document.getElementById('btn');

// // btn.addEventListener('dblclick',()=>{
// //     console.log('RUN WHEN EVENT IS FIRED')
// // document.body.classList.toggle('dark')
// // })

// // btn.addEventListener('mouseenter', () => {
// //   document.body.style.backgroundColor = 'red';
// // });

// // btn.addEventListener('mouseleave', () => {
// //   document.body.style.backgroundColor = 'white';
// // });

// document.body.addEventListener('keydown', (e) => {
//   console.log(e.key);
//   if (e.key === 'r') {
//     document.body.style.backgroundColor = 'red';
//   } else if(e.key === 'b') {
//     document.body.style.backgroundColor = 'blue';
//   }

// });

const firstname = document.getElementById('firstname');
const lastname = document.getElementById('lastname');
const form = document.getElementById('form');
console.log(form);
//2 addEventListener on the form ;
let data = {};
form.addEventListener('submit', (event) => {
  console.log(event);

  //this method prevent the form default behaviour which is auto submit and refresh the page
  event.preventDefault();
  //use .value property to access values from the input field
  console.log(firstname.value);
  console.log(lastname.value);

  (data.firstname = firstname.value),
    (data.lastname = lastname.value),
    (data.isSubmission = true);

  //set the field value blank after the form submission
  firstname.value = '';
  lastname.value = '';
});

if (data.isSubmission) {
  form.style.display = 'none';
  const head = document.createElement('h1');
  head.textContent = 'You have already submitted the form';
  document.body.appendChild(head);
}

// show the  data object on the screen

firstname.addEventListener('change', (event) => {
  console.log(event.target);
  console.log(event.target.value);
  console.log(event.target.name);
  console.log(`${event.target.name} : ${event.target.value}`);
});

const image = document.getElementById('photo');
console.dir(image);
console.log(image.src, image.alt);

//Create a input field task a todo from user on submission add to the list and show on the screen.
