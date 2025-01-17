const title = Document.querySelector('#main-heading');
title.style.color = 'red';
const listItemd = document.querySelectorAll('list-items');

for(i = 0; i < listItems.length; i++){
    listItems.style.fontSize = '2rem'
}

const ul = document.querySelector('ul');
const li = document.createElement('li');
ul.append(li)


const firstlistItem = document.querySelector('list-items');

console.log(firstlistItem.innertext);
console.log(firstlistItem.textContent);
console.log(firstlistItem.innerHTML);

li.innerText = 'x-men';
//modifying sttributes and classes

li.setAttribute('id','main-heading');
li.removeAttribute('id');

const title  = document.querySelector('main-heading');
console.log(title.getAttribute('id'));

li.classList.add('list-items')

console.log(li.classList.contains('list-items'));
//remove Elements
li.remove();

let ul = document.querySelector('ul');
console.log(ul.parentNode.parentNode);
console.log(ul.parentElement.parentElement);

const html = document.documentElement;
console.log(html.parentNode);
console.log(html.parentElement);

let ul = document.querySelector('ul');
console.log(ul.childNodes);
console.log(ul.firstChild);
console.log(ul.lastChild);

ul.childNodes[1].style.background = 'blue';

let ul = document.querySelector('ul');
const div = document.querySelector('div');
console.log(div.childNodes);
console.log(ul.prevousElementsibling);
console.log(ul.nextElementSibling);



//addEventListeners
const button2 = document.querySelector('btn-2');

function alertBtn() {
    alert('i love js');
}

button2.addEventListener("click",alertBtn);
const newBackgroundColor = document.querySelector(box-3);

function changeBgColor(){
    newBackgroundColor.style.background = 'blue';

};
newBackgroundColor.addEventListener('mouseover',changeBgColor);

