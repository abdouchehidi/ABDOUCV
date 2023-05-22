// Main.js

function validateEmail(email) {
    // regex pattern for validating email
    var pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return pattern.test(email);
}

function validatePassword(password) {
    // regex pattern for validating password
    var pattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    // password must have at least 8 characters, at least one letter, and at least one number
    return pattern.test(password);
}

function validateLoginForm() {
    var email = document.getElementById("login_email").value;
    var password = document.getElementById("login_password").value;
    
    if (email === "") {
        alert("Please enter your email.");
        return false;
    }
    
    if (!validateEmail(email)) {
        alert("Please enter a valid email.");
        return false;
    }
    
    if (password === "") {
        alert("Please enter your password.");
        return false;
    }
    
    if (!validatePassword(password)) {
        alert("Please enter a valid password. Password must have at least 8 characters, at least one letter, and at least one number.");
        return false;
    }
    
    return true;
}

function validateSignupForm() {
    var fullName = document.getElementById("signup_fullname").value;
    var email = document.getElementById("signup_email").value;
    var password = document.getElementById("signup_password").value;
    
    if (fullName === "") {
        alert("Please enter your full name.");
        return false;
    }
    
    if (email === "") {
        alert("Please enter your email.");
        return false;
    }
    
    if (!validateEmail(email)) {
        alert("Please enter a valid email.");
        return false;
    }
    
    if (password === "") {
        alert("Please enter your password.");
        return false;
    }
    
    if (!validatePassword(password)) {
        alert("Please enter a valid password. Password must have at least 8 characters, at least one letter, and at least one number.");
        return false;
    }
    
    return true;
}

document.addEventListener("DOMContentLoaded", function() {
    var loginBtn = document.getElementById("login_btn");
    var signupBtn = document.getElementById("signup_btn");
    
    var loginForm = document.getElementById("loginform");
    var signupForm = document.getElementById("signupform");
    
    loginBtn.addEventListener("click", function() {
        loginForm.style.display = "block";
        signupForm.style.display = "none";
    });
    
    signupBtn.addEventListener("click", function() {
        loginForm.style.display = "none";
        signupForm.style.display = "block";
    });
});
