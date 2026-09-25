//alert(1);
//mostly use document.querySelector() or document.querySelectorAll() as its very dynamic and supports CSS like name conventions
//for classes and other advantages, on other hand, document.get ElementById() can only select one by id element val of HTML, and 
//doesnt support CSS like class syntax

//Hpw to pass as aparas to document.querySelector('');
// --all in quotes
// --tags:  'h1'
// --class: '.container'
// --id:    '#message'


//Single Element:
// console.log(document.getElementById('my-form'));
// console.log(document.querySelector(('.container')));
// console.log(document.querySelector(('h1')));


//Multiple Elements:
// console.log(document.querySelectorAll('.item'));

// const items = document.querySelectorAll('.item');
// items.forEach((item) => console.log(item));

const ul = document.querySelector('.items');//browser shows elements in UI.
console.log(ul);
//ul.remove();//deletes the <ul> element—along with all of the <li> items nested inside it—from the DOM tree.
//brower stops showing that in UI.

//ul.lastElementChild.remove();  //del last list

ul.firstElementChild.textContent = 'Hello';
ul.children[1].innerText = "Alwin";
ul.lastElementChild.innerHTML = '<h1>Mathew</h1>';

//Changing CSS properties
const btn = document.querySelector('.btn');
btn.style.background = 'red';


//Create an Event Listener: (event ,fn to run when this event happens)
btn.addEventListener('click',(e) => {    //'click' is built-in keyword, u can try:mouseover,mouseout events to be triggered
    e.preventDefault();  //else, def behavior makes line below to just flash for a sec and then disappear,now it stays
//  console.log(e.target.className);         //form is no longer submitting through the browser's standard behavior.
    document.querySelector('#my-form').style.background = '#ccc';

    //Changing background of <body> by applying bg-dark class when form submitted
    document.querySelector('body').classList.add('bg-dark');

    //We've ul assigned to ref-var, so we don't do document.querySelector() again
    ul.lastElementChild.innerHTML = '<h1>State change when u submit!</h1>';
});                      






