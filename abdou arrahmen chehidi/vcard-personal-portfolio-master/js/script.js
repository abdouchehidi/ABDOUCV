var card = document.getElementById("card");

function openRegister(){
    card.style.transform = "rotateY(-180deg)";
}

function openLogin(){
    card.style.transform = "rotateY(0)";
}
const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    checkInputs();
});

function checkInputs() {

    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();

    if (usernameValue === '') {

        setErrorFor(username, 'Username cannot be blank');

    } else {

        setSuccessFor(username);

    }

    if (emailValue === '') {

        setErrorFor(email, 'Email cannot be blank');

    } else if (!isEmail(emailValue)) {
        setErrorFor(email, 'Email is not valid');
    } else {
        setSuccessFor(email);
    }

    if (passwordValue === '') {
        setErrorFor(password, 'password cannot be blank');
    } else {
        setSuccessFor(password);
    }

    if (password2Value === '') {
        setErrorFor(password2, 'password2 cannot be blank');
    } else if(passwordValue != password2Value){
        setErrorFor(password2, 'password does not match');
    }else{
        setSuccessFor(password2);
    }
}

function setErrorFor(input, message) {
    const formControl = input.parentElement; //.form-control
    const small = formControl.querySelector('small');

    small.innerText = message;

    formControl.className = 'form-control error';
}

function setSuccessFor(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}

function isEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}
function showSuccessMessage() {
    var form = document.getElementById('form');
    var successMessage = document.getElementById('success-message');
  
    // Perform form submission logic here
    // For demonstration purposes, we'll simulate a successful form submission with a delay of 2 seconds
    setTimeout(function() {
      form.reset(); // Reset the form
      successMessage.classList.add('show'); // Add the 'show' class to display the success message with fade-in animation
      setTimeout(function() {
        successMessage.classList.remove('show'); // Remove the 'show' class to initiate the fade-out animation
      }, 3000); // Wait for 3 seconds before fading out the success message
    }, 2000);
  }
  
  