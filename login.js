const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const modal = document.getElementById('modal');

signUpButton.addEventListener('click', () => {
    container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
    container.classList.remove("right-panel-active");
});