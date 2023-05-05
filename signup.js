const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
    container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
    container.classList.remove("right-panel-active");
});

document.getElementById("signup-form").addEventListener("submit", function(event) {
    // prevent the default form submission behavior
    event.preventDefault();
  
    // redirect the user to the login page
    window.location.href = "login.html";
  });
  
