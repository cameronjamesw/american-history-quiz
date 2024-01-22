// This code switches between sign-in and sign-up 

let signinBtn = document.getElementById('signinBtn');
let signupBtn = document.getElementById('signupBtn');
let title = document.getElementById('title');
let usernameField = document.getElementById('username');
let passwordField = document.getElementById('password');
let passwordConfirmedField = document.getElementById('confirm-password');

/**
 * This function will hide the 'confirm password' field, as well as changing the title to 'sign-in'
 * and highlight the sign-in button. Placeholder text changes too.
 */
function showSignin(){
    title.innerHTML = 'Sign-In';
    signinBtn.classList.add('active');
    signupBtn.classList.remove('active');
    passwordConfirmedField.style.maxHeight = '0';
    passwordConfirmedField.style.paddingTop = '0';
    passwordConfirmedField.style.paddingBottom = '0';
    passwordField.setAttribute('placeholder', 'Enter Password')
    usernameField.setAttribute('placeholder', 'Enter Username');
};

/**
 * This function will show the 'confirm passowrd' field, as well as changing the title to 'sign-up'
 * and highlight the sign-up button. Placeholder text changes too.
 */
function showSignup(){
    title.innerHTML = 'Sign-Up';
    signupBtn.classList.add('active');
    signinBtn.classList.remove('active');
    passwordConfirmedField.style.maxHeight = '80px';
    passwordConfirmedField.style.paddingBottom = '20px';
    passwordConfirmedField.style.paddingTop = '20px';
    passwordField.setAttribute('placeholder', 'Create Password');
    usernameField.setAttribute('placeholder', 'Create Username');
};

signinBtn.addEventListener('click', showSignin);

signupBtn.addEventListener('click', showSignup)

// This is the form validation

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
        hideForm();
        showDifficulty();
    }
}


let guest = document.getElementById('guestBtn');
guest.addEventListener('click', hideForm);

let form = document.getElementById('form');
form.addEventListener('submit', handleSubmit);

// This section hides the form to show difficulty

/**
 * This function hides the form
 */
function hideForm(){
    form.style.display = ('none');
}

/**
 * This function shows the difficulty menu
 */
function showDifficulty(){
    let difficultyDiv = document.getElementById('difficultyDiv');
    difficultyDiv.style.maxHeight = '800px';
};

// Come back to this code later
/*
 let diffBtns = document.getElementsByClassName('diffBtn');
function hoverDiffBtn(event){
  diffBtns.style.backgroundColor = 'red';
};  

 document.addEventListener('DOMContentLoaded', function(){
    let diffBtns = document.getElementsByClassName('diffBtn');
    
    for (i = 0; i <= diffBtns.length; i++){
        console.log(diffBtns[i]);
        diffBtns[i].addEventListener('mouseover', btnHover);
    };
 }
 ); */


// Come back to this later
/*
function btnHover(event){
    let diffBtns = document.getElementsByClassName('diffBtn');
    for (i = 0; i <= diffBtns.length; i++){
        if (diffBtns[0]){
            diffBtns[0].style.backgroundColor = 'red';
        } else if (diffBtns[1]){
            diffBtns[1].style.backgroundColor = 'red';
        } else {
         diffBtns[2].style.backgroundColor = 'red';
    }};
}; */


// Difficulty Button Hover Functions

// Easy Difficulty Button hover in, hover out

/**
 * This function makes the easy difficulty button change border and font
 * color to red 
 */

function easyHover(event){
    easyBtn.style.borderColor = 'red';
    easyBtn.style.color = 'red';
    easyBtn.style.cursor = 'pointer';
};

/**
 * This function makes the easy difficulty button change border 
 * and font color from red to white
 */
function easyOut(event){
    easyBtn.style.borderColor = 'white';
    easyBtn.style.color = 'white';
};

let easyBtn = document.getElementById('easyBtn');
easyBtn.addEventListener('mouseover', easyHover);
easyBtn.addEventListener('mouseout', easyOut);

// Medium Difficulty Button hover in, hover out
/**
 * This function makes the medium difficulty button change border and font
 * color to red 
 */
function medHover(event){
    medBtn.style.borderColor = 'red';
    medBtn.style.color = 'red';
    medBtn.style.cursor = 'pointer';
};

/**
 * This function makes the medium difficulty button change border 
 * and font color from red to white
 */
function medOut(event){
    medBtn.style.borderColor = 'white';
    medBtn.style.color = 'white';
};

let medBtn = document.getElementById('medBtn');
medBtn.addEventListener('mouseover', medHover);
medBtn.addEventListener('mouseout', medOut);

// Hard difficulty button hover in, hover out
/**
 * This function makes the hard difficulty button change border and font
 * color to red 
 */
function hardHover(event){
    hardBtn.style.borderColor = 'red';
    hardBtn.style.color = 'red';
    hardBtn.style.cursor = 'pointer';
};

/**
 * This function makes the hard difficulty button change border 
 * and font color from red to white
 */
function hardOut(event){
    hardBtn.style.borderColor = 'white';
    hardBtn.style.color = 'white';
};

let hardBtn = document.getElementById('hardBtn');
hardBtn.addEventListener('mouseover', hardHover);
hardBtn.addEventListener('mouseout', hardOut);