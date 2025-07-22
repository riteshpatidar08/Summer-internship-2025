const para = document.getElementsByTagName('p');

console.log(para[0].textContent);
const singlePara = para[0];

singlePara.setAttribute('id', 'first_para');

//take prompt from the user what is your status online or offline :

//if user enter online then show green text with Active if user enter offline use random time to show last:seen with grey text ; (window + v)

const status = prompt('Enter your status choose from online or offline');

console.log(status);

const fillData = document.getElementById('user-status');
console.log(fillData);

if (status === 'online') {
  fillData.textContent = '🟢 Active ';
  // fillData.setAttribute('class' , 'online')
  console.log(fillData.classList);
  fillData.classList.add('online');
} else {
  fillData.textContent = 'last 3 min ago';
  fillData.classList.add('offline');
}
