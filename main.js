const signInButton = document.getElementById('sign-In');
const signUpButton = document.getElementById('sign-Up');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => 
container.classList.add('right-panel-active'))

signInButton.addEventListener('click', () => 
container.classList.remove('right-panel-active'))
