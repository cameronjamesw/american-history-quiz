/* This is the form validation */

function handleSubmit(event) {
    event.preventDefault();

    let passwordValue = document.getElementById('password').value;
    let passwordValueLength = document.getElementById('password').value.length
    let confirmPasswordValue = document.getElementById('confirm-password').value;
    let errorMsg = document.getElementById('error-msg');

    if (passwordValue !== confirmPasswordValue) {
        console.log('passwords do not match');
        errorMsg.innerHTML = 'Passwords do not match';
    } else if (passwordValueLength < 6) {
        console.log('Password must be at least 6 characters');
        errorMsg.innerHTML = 'password must be at least 6 characters';
    } else {
        form.submit();
    }
}
    

let form = document.getElementById('form');
form.addEventListener('submit', handleSubmit);

