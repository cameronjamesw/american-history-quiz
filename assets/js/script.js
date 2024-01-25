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
        showDifficulty();
        hideForm();
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
    event.preventDefault();
    form.style.maxHeight = ('0');
    showDifficulty();
}

/**
 * This function shows the difficulty menu
 */
function showDifficulty(){
    let beginDiv = document.getElementById('beginDiv');
    beginDiv.style.maxHeight = '1000px';
    beginDiv.style.transitionDelay = '2s';
};

// Easy Difficulty Button hover in, hover out

/**
 * This function makes the easy difficulty button change border and font
 * color to red 
 */

function beginHover(event){
    beginBtn.style.borderColor = 'red';
    beginBtn.style.color = 'red';
    beginBtn.style.cursor = 'pointer';
};

/**
 * This function makes the easy difficulty button change border 
 * and font color from red to white
 */
function beginOut(event){
    beginBtn.style.borderColor = 'white';
    beginBtn.style.color = 'white';
};

let beginBtn = document.getElementById('beginBtn');
beginBtn.addEventListener('mouseover', beginHover);
beginBtn.addEventListener('mouseout', beginOut);

// This section adds event listeners to the difficulty menu 

/**
 * This function hides the difficulty menu by setting the max-height
 * to 0px, this also removes the transition delay
 */
function hideDifficulty(){
    let beginDiv = document.getElementById('beginDiv');
    beginDiv.style.maxHeight = '0';
    beginDiv.style.transitionDelay = '0s';
};

/**
 * This function reveals the quiz window by setting the max-height
 * property to 1000px
 */
function showQuestionWindow() {
    let questionWindow = document.getElementById('questionWindow');
    questionWindow.style.maxHeight = '2000px';
    questionWindow.style.transitionDelay = '2s';
};


// This section adds functionality to the quiz window

let nextQuestionBtn = document.getElementById('nextQuestionBtn');
let questionElement = document.getElementById('questionText');
let answerDivElement = document.getElementById('answerDiv');
let shuffledQuestions;
let currentQuestionIndex;
let score = 0;

/**
 * This function hides the difficulty menu and reveals the easy quiz window
 */

function runQuiz() {
    hideDifficulty();
    showQuestionWindow();
    shuffledQuestions = easyQuestions.sort(() => Math.random() - .5);
    currentQuestionIndex = 0;
    getQuestion();
};

beginBtn.addEventListener('click', runQuiz);


nextQuestionBtn.addEventListener('click', () => {
    currentQuestionIndex++;
    getQuestion();
});

function getQuestion(){
    resetState();
    getNextQuestion(shuffledQuestions[currentQuestionIndex]);
    let questionNumber = document.getElementById('questionNoText');
    questionNumber.innerHTML = `<span class="white">Question ` + (parseInt(currentQuestionIndex) + 1) + ` of 15</span>`;
};

function getNextQuestion(easyQuestions) {
    questionElement.innerHTML = easyQuestions.question;
    easyQuestions.answer.forEach(answer => {
        let button = document.createElement('div');
        button.innerHTML = answer.text;
        button.classList.add('answerText');
        if (answer.correct){
            button.dataset.correct = answer.correct;
        } button.addEventListener('click', showAnswer);
        answerDivElement.appendChild(button);
    })
};

function resetState(){
    nextQuestionBtn.style.display = 'none';
    while (answerDivElement.firstChild){
        answerDivElement.removeChild(answerDivElement.firstChild);
    };
};

function showAnswer(e){
    let eventButtons = document.getElementsByClassName('answerText');
    for (let eventButton of eventButtons) {
        eventButton.removeEventListener('click', showAnswer);
    };
    
    let clickedButton = e.target;
    
    let questionArray = easyQuestions;
    let answerTrue = questionArray[0].answer[0].correct;
        
    let correct = clickedButton.dataset.correct;
    Array.from(answerDivElement.children).forEach(button => {
        setAnswerClass(button, button.dataset.correct)
    });

dataType = clickedButton.classList.contains('correct');
    console.log(dataType);
    if (dataType) {
        score = ++score;
        let scoreText = document.getElementById('score');
    scoreText.innerHTML = parseInt(score);
    };   

    if (shuffledQuestions.length > currentQuestionIndex + 1) {
         nextQuestionBtn.style.display = 'block';
    } else if (shuffledQuestions.length = currentQuestionIndex + 1) {
        let seeResultsBtn = document.getElementById('seeResultsID');
        seeResultsBtn.classList.add('seeResultsBtn');
        seeResultsBtn.classList.add('question-btn');
        seeResultsBtn.style.cursor = 'pointer';
        seeResultsBtn.style.display = 'block';
        seeResultsBtn.addEventListener('click', showResultsWindow);
    };
};

function showResultsWindow() {
    let questionWindow = document.getElementById('questionWindow');
    questionWindow.style.maxHeight = '0';
    questionWindow.style.transitionDelay = '0s';
    let resultsWindow = document.getElementById('resultsDiv');
    resultsWindow.style.maxHeight ='1000px';
    resultsWindow.style.transitionDelay = '2s';
};

function setAnswerClass(element, correct){
    clearAnswerClass(element);
    if (correct) {
        element.classList.add('correct')
        element.setAttribute('data-type', 'correct');
    } else {
        element.classList.add('wrong');
        element.setAttribute('data-type', 'false');
    }
};

function clearAnswerClass(element){
    element.classList.remove('correct');
    element.classList.remove('wrong');
    element.removeAttribute('data-type', 'correct');
    element.removeAttribute('data-type', 'false');
};

// This section refers to the Results Window 

function closeQuiz() {
    let resultsWindow = document.getElementById('resultsDiv');
    resultsWindow.style.maxHeight ='0';
    resultsWindow.style.transitionDelay = '0s';
};

function tryAgain() {
    closeQuiz();
    let beginDiv = document.getElementById('beginDiv');
    beginDiv.style.maxHeight = '1000px';
    beginDiv.style.transitionDelay = '3s';
    let nextQuestionDiv = document.getElementById('nextQuestionDiv');
    let seeResultsBtn = document.getElementById('seeResultsID');
    nextQuestionDiv.removeChild(seeResultsBtn);
    seeResultsBtn.classList.remove('seeResultsBtn');
    seeResultsBtn.classList.remove('question-btn');
    score = 0;

};

let tryAgainBtn = document.getElementById('tryAgainBtn');
tryAgainBtn.addEventListener('click', tryAgain);

let exitQuizBtn = document.getElementById('exitQuizBtn');
exitQuizBtn.addEventListener('click', closeQuiz);

function leaveQuizWindow() {
    hiddenOverlay.style.display = 'block';
};

function exitQuiz() {
    let questionWindow = document.getElementById('questionWindow');
    questionWindow.style.maxHeight = '0';
    questionWindow.style.transitionDelay = '0s';
};

let crossBtn = document.getElementById('quizCross');
crossBtn.addEventListener('click', exitQuiz);

const easyQuestions = [
    {
        question: 'Who was the first President of the United States of America?',
        answer: [
            {text: 'John Adams', correct: false},
            {text: 'George Washington', correct: true},
            {text: 'Benedict Arnold', correct: false},
            {text: 'Donald Trump', correct: false}
        ]
    },
    {
        question: 'In what year did the War of Independence begin?',
        answer: [
            {text: '1861', correct: false},
            {text: '1929', correct: false},
            {text: '1766', correct: false},
            {text: '1776', correct: true}
        ]
    },
    {
        question: 'What was the name of the ship the Pilgrims sailed on?',
        answer: [
            {text: 'The Mayflower', correct: true},
            {text: 'The George Washington', correct: false},
            {text: 'Titanic', correct: false},
            {text: 'HMS Agamemnon', correct: false}
        ]
    },
    {
        question: 'How many stars are on the American Flag?',
        answer: [
            {text: '13', correct: false},
            {text: '100', correct: false},
            {text: '50', correct: true},
            {text: '55', correct: false}
        ]
    },
    {
        question: 'How many Presidents have the US had as of 2023?',
        answer: [
            {text: '40', correct: false},
            {text: '50', correct: false},
            {text: '20', correct: false},
            {text: '46', correct: true}
        ]
    },
    {
        question: 'How many US Presidents have been assassinated?',
        answer: [
            {text: '4', correct: true},
            {text: 'none', correct: false},
            {text: '5', correct: false},
            {text: '7', correct: false}
        ]
    },
    {
        question: 'Which US state has a famous link to the Battle of the Alamo?',
        answer: [
            {text: 'Michigan', correct: false},
            {text: 'Texas', correct: true},
            {text: 'Florida', correct: false},
            {text: 'New Mexico', correct: false}
       ]
    },
    {
        question: 'The American Civil War was fought between which groups?',
        answer: [
            {text: 'Great Britain & America', correct: false},
            {text: 'Democrats & Republicans', correct: false},
            {text: 'Communists & Capitalists', correct: false},
            {text: 'Union & Confederacy', correct: true}
        ]
    },
    {
        question: 'In total, how many people were killed in the Salem Witch Trials?',
        answer: [
            {text: '20', correct: false},
            {text: '24', correct: false},
            {text: '22', correct: false},
            {text: '25', correct: true}
        ]
    },
    {
        question: 'Which state of America has the biggest land mass?',
        answer: [
            {text: 'Alaska', correct: true},
            {text: 'California', correct: false},
            {text: 'Florida', correct: false},
            {text: 'Massachusetts', correct: false}
        ]
    },
    {
        question: 'Who was the first President to live in The White House?',
        answer: [
            {text: 'George Washington', correct: false},
            {text: 'John Adams', correct: true},
            {text: 'Thomas Jefferson', correct: false},
            {text: 'James Madison', correct: false}
        ]
    },
    {
        question: '"Speak softly and carry a big stick" was a famous saying of which President?',
        answer: [
            {text: 'Franklin Roosevelt', correct: false},
            {text: 'Dwight Eisenhower', correct: false},
            {text: 'Theodore Roosevelt', correct: true},
            {text: 'Abraham Lincoln', correct: false}
        ]
    },
    {
        question: 'What is the capital city of Wyoming?',
        answer: [
            {text: 'Chyenne', correct: true},
            {text: 'Baton Rouge', correct: false},
            {text: 'Tallahasee', correct: false},
            {text: 'Casper', correct: false}
        ]
    },
    {
        question: 'What was the name of the oil rig that exploded in the Gulf of Mexico in 2010?',
        answer: [
            {text: 'Magnolia', correct: false},
            {text: 'Mad Dog', correct: false},
            {text: 'Petronius', correct: false},
            {text: 'Deepwater Horizon', correct: true}
        ]
    },
    {
        question: 'Known as one of the Founding Fathers of the United States, this man was born in Boston in 1706',
        answer: [
            {text: 'Alexander Hamilton', correct: false},
            {text: 'Benjamin Franklin', correct: true},
            {text: 'Patrick Henry', correct: false},
            {text: 'Thomas Jefferson', correct: false}
        ]
    }
];