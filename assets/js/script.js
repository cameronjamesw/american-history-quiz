/* This code switches between sign-in and sign-up */

let signinBtn = document.getElementById('signinBtn');
let signupBtn = document.getElementById('signupBtn');
let title = document.getElementById('title');
let usernameField = document.getElementById('username');
let passwordField = document.getElementById('password');
let passwordConfirmedField = document.getElementById('confirm-password');

/* Add Comment */
function showSignin(){
    title.innerHTML = 'Sign-In';
    signinBtn.classList.add('active');
    signupBtn.classList.remove('active');
    passwordConfirmedField.style.display = 'none';
    passwordField.setAttribute('placeholder', 'Enter Password')
    usernameField.setAttribute('placeholder', 'Enter Username');
};

/* Add comment */
function showSignup(){
    title.innerHTML = 'Sign-Up';
    signupBtn.classList.add('active');
    signinBtn.classList.remove('active');
    passwordConfirmedField.style.display = 'block';
    passwordField.setAttribute('placeholder', 'Create Password');
    usernameField.setAttribute('placeholder', 'Create Username');
};

signinBtn.addEventListener('click', showSignin);

signupBtn.addEventListener('click', showSignup)
/* This is the form validation */

/**
 *  This function checks the form validation to see
 * that the username and passwords match the criteria provided and
 * submits the form if so.
 */
function handleSubmit(event) {
    event.preventDefault();

    let usernameLength = document.getElementById('username').value.length;
    let user = document.getElementById('username').value;
    let passwordValue = document.getElementById('password').value;
    let passwordValueLength = document.getElementById('password').value.length
    let confirmPasswordValue = document.getElementById('confirm-password').value;
    let userErrorMsg = document.getElementById('user-msg');
    let passErrorMsg = document.getElementById('error-msg');
    let title = document.getElementById('title').innerHTML;

    if (usernameLength < 6) {
        console.log('Username must be at least 6 characters');
        userErrorMsg.innerHTML = 'Username must be at least 6 characters';
    } else if (!user.match(/[0-9]/)) {
        console.log('Username must contain a number');
        userErrorMsg.innerHTML = 'Username must contain a number';
    } else if (passwordValue !== confirmPasswordValue) {
        userErrorMsg.innerHTML = '';
        console.log('Passwords do not match');
        passErrorMsg.innerHTML = 'Passwords do not match.';
    } else if (passwordValueLength < 6) {
        userErrorMsg.innerHTML = '';
        console.log('Password must be at least 6 characters');
        passErrorMsg.innerHTML = 'Password must be at least 6 characters.';
    } else if (passwordValueLength > 20) {
            console.log('Password must be less than 20 characters');
            passErrorMsg.innerHTML = 'Password must be less than 20 characters.';
        } else if (!passwordValue.match(/[0-9]/)) {
            userErrorMsg.innerHTML = '';
        console.log('Password must contain a number');
        passErrorMsg.innerHTML = 'Password must contain a number.';
    } else {
        passErrorMsg.innerHTML = '';
        userErrorMsg.innerHTML = '';
        form.submit();
    }
}
    
let form = document.getElementById('form');
form.addEventListener('submit', handleSubmit);

