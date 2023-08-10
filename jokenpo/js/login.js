const input  = document.querySelector('.login-input');
const button = document.querySelector('.login-button');
const form   = document.querySelector('.login-form');

const validateInput = (event) => {
    if(event.target.value.length > 2){
        button.removeAttribute('disabled');
    }else{
        button.setAttribute('disabled', '');
    }
}

input.addEventListener('input', validateInput);

const handleSubmit = (event) => {
    event.preventDefault();
    localStorage.setItem('player', input.value);
    window.location = '../pages/game.html';
}

form.addEventListener('submit', handleSubmit);