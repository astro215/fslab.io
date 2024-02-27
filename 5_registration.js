const form = document.getElementById('registrationForm');

const firstName = document.getElementById('firstName');
const firstNameError = document.getElementById('firstNameError');

const lastName = document.getElementById('lastName');
const lastNameError = document.getElementById('lastNameError');

const email = document.getElementById('email');
const emailError = document.getElementById('emailError');

const password = document.getElementById('password');
const passwordError = document.getElementById('passwordError');




form.addEventListener('submit', function(event) {

    console.log(event);

    // Validate first name
    let hasError = false;
    if (firstName.value === '') {
        firstNameError.textContent = 'First name is required';
        hasError = true;
    } else {
        firstNameError.textContent = '';
    }
    if (hasError) {
        event.preventDefault(); // Prevent form submission if there are errors
    }

    // Validate last name

    if (lastName.value === '') {
        lastNameError.textContent = 'Last name is required';
        hasError = true;
    } else {
        lastNameError.textContent = '';
    }

    // Email Validation
    if (email.value.trim() === '') {
        emailError.textContent = 'Email is required';
        hasError = true;
    } else if (!isValidEmail(email.value.trim())) {
        emailError.textContent = 'Invalid email format';
        hasError = true;
    } else {
        emailError.textContent = '';
    }



    // Password Validation
    if (password.value.trim() === '') {
        passwordError.textContent = 'Password is required';
        hasError = true;
    } else if (password.value.trim().length < 8) {
        passwordError.textContent = 'Password must be at least 8 characters long';
        hasError = true;
    } else if (!/[A-Z]/.test(password.value)) {
        passwordError.textContent = 'Password must contain at least one uppercase letter';
        hasError = true;
    } else if (!/[!@#$%^&*(),.?":{}|<>]/.test(password.value)) {
        passwordError.textContent = 'Password must contain at least one symbol (!@#$%^&*(),.?":{}|<>)';
        hasError = true;
    } else {
        passwordError.textContent = '';
    }

    if (hasError) {
        event.preventDefault(); // Prevent form submission if there are errors
    }


});


// Email Format Validation Function
function isValidEmail(email) {
    // Regular expression for validating email format
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}