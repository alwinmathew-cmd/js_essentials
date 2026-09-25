//Making JS objects from HTML tags/element
const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');

myForm.addEventListener('submit',onSubmit);

// function onSubmit(e){ //Simplest submit event listener fn 
//   e.preventDefault();

//   if(nameInput.value && emailInput.value){
//     alert('Success,form submitted!')
//   }
//   else{
//     alert('Both fields mandatory!')
//   }
// }

function onSubmit(e){
  e.preventDefault();

  if(nameInput.value === '' || emailInput.value === ''){
    msg.classList.add('error');//Adding error class to make raw error HTM msg below in red
    msg.innerHTML = 'Please enter all fields!';//Displaying error as raw message

    setTimeout(() => msg.remove(),3000)//time in ms, for error to disappear

  }
  else{
    //Create a new UI element(HTML tag <li></li> equivalent) dynamically (like creating a DB object)
    const li = document.createElement('li');
    // Attach text payload inside the new <li> element
    li.appendChild(document.createTextNode(`${nameInput.value} : ${emailInput.value}`));//li tag just created holds entered val

    // Append the newly created <li> into the <ul> container in the DOM tree
    userList.appendChild(li);

    //Clear fields: Reset input fields (clear user input)
    nameInput.value = '';
    emailInput.value = '';
  }
}