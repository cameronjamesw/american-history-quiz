# The Star-Spangled Quiz - Manual Testing

![The Star Spangled Quiz](assets/images/amiresponsive-ss.png)

View the live sight here - [The Star Spangled Quiz](https://cameronjamesw.github.io/american-history-quiz)

# Automated Testing

## W3C Validator

[W3C](https://validator.w3.org/) was used to validate the HTML page of the website. It was also used to validate the CSS.

* [index.html](assets/images/validation/w3c-ss.png) - passed, no errors found

* [style.css](assets/images/validation/jigsaw-ss.png) - passed, no errors found

## JSHint Validator

[jshint](https://jshint.com/) was used to validate the JavaScript.

* [script.js](assets/images/validation/jshint-ss.png) - passed, no errors found

## Lighthouse

I used Lighthouse within the Chrome Developer Tools to test the performance, accessibility, best practices and SEO of the website.

![Lighthouse](assets/images/validation/lighthouse-ss.png)

# Manual Testing

## Features Testing

**Form Testing**

Feature | Test Case | Outcome | Screenshtot | Pass or Fail
--- | --- | --- | --- | ---
Hover Form Input | Hover over Input | Border changes color | ![Screenshot of hovering over a form input](assets/images/form-table-ss/hover-screenshot.png) | Pass
Sign-In Toggle Button | Click Sign-In | Reveals Sign-In Window, hides Confirm Password field | ![Scrrenshot of clicking the sign-in button](assets/images/form-table-ss/login-screenshot.png) | Pass
Sign-Up Toggle Button | Click Sign-Up | Reveals Sign-Up Window, displays Confirm Password field | ![Screenshot of clicking the sign-up button](assets/images/form-table-ss/signup-screenshot.png) | Pass
Form Validation #1 | Enter Short Username | Displays Relevent Error Msg | ![Screenshot of username too short error message](assets/images/form-table-ss/username-length-screenshot.png) | Pass
Form Validation #2 | Enter Username without Number | Displays Relevent Error Msg | ![Screenshot of username must contain number error message](assets/images/form-table-ss/username-number-screenshot.png) | Pass
Form Validation #3 | Enter Different Passwords | Displays Relevent Error Msg | ![Screenshot of passwords do not match error message](assets/images/form-table-ss/password-match-screenshot.png) | Pss
Form Validation #4 | Enter Short Password | DIsplays Relevent Error Msg | ![Screenshot of passsword too short error message](assets/images/form-table-ss/password-length-screenshot.png) | Pass
Form Validation #5 | Enter Password Without Number | Displays Relevent Error Msg | ![Screenshot of password must contain number error message](assets/images/form-table-ss/password-number-screenshot.png) | Pass
Submit Form | Click Submit | Submits form, displays difficulty window | ![Screenshot of click submit form outcome](assets/images/form-table-ss/hide-form-screenshot.png) | Pass
Continue As Guest | Click Continue As Guest | Hides form without submitting, displays difficulty window | ![Screenshot of continue as guest clikc outcome](assets/images/form-table-ss/hide-form-screenshot.png) | Pass

**Quiz Window Testing**

Feature | Test Case | Outcome | Screenshot | Pass or Fail
--- | --- | --- | --- | ---
Hover Begin Button | Hover Button | Changes Border & Text Color | ![GIF of hovering begin button](assets/images/quiz-table-ss/hover-begin-ezgif.com-video-to-gif-converter.gif) | Pass
Begin Button | Click Button | Hides Begin Window, Shows Quiz Window | ![GIF of clicking begin button](assets/images/quiz-table-ss/hide-begin.gif) | Pass
Hover Answer Button | Hover Answer | Changes Border & Text Color | ![GIF of hovering answer button](assets/images/quiz-table-ss/hover-answer-ezgif.com-video-to-gif-converter.gif) | Pass
Answer Button | Click An Answer | Changes Border & Text Color, reveals next question button | ![GIF of clicking an answer](assets/images/quiz-table-ss/select-answer-ezgif.com-video-to-gif-converter.gif) | Pass
Next Question | Click Next Question Button | Shows the next question | ![GIF of clicking next question button](assets/images/quiz-table-ss/select-next-question-ezgif.com-video-to-gif-converter.gif) | Pass
See Results | Click See Results Button | Collapses question window, reveals results window | ![GIF of clicking see results](assets/images/quiz-table-ss/select-get-results-ezgif.com-video-to-gif-converter.gif) | Pass
X Button | Click X Button | Exit Quiz before reaching the end | ![A GIF clicking the X button and collapsing the quiz window](assets/images/quiz-table-ss/collapse-quiz-ezgif.com-video-to-gif-converter.gif) | Pass

**Results Window Testing**

Feature | Test Case | Outcome | Screenshot | Pass or Fail
--- | --- | --- | --- | ----
Count Score | Select 5 correct answers | Displays test of "You Scored 5 out of 15" | ![Screenshot of score number feature](assets/images/results-table/correct-answers-ss.png) | Pass
Hover Try Again Button | Hover Button | Changes Border Color | ![GIF of hovering try again button](assets/images/results-table/hover-try-again-ezgif.com-video-to-gif-converter.gif) | Pass
Hover Exit Quiz Button | Hover Button | Changes Border Color | ![GIF of hovering exit quiz button](assets/images/results-table/hover-exti-quiz-ezgif.com-video-to-gif-converter.gif) | Pass
Try Again Button | Click Try Again Button | Collapses Results Window, reveals Begin Quiz Window | ![GIF of clicking try again button](assets/images/results-table/click-try-again-ezgif.com-video-to-gif-converter.gif) | Pass
Exit Quiz Button | Click Exit Quiz Button | Collapse Results Window | ![GIF of clicking exit quiz  button](assets/images/results-table/click-exit-quiz-ezgif.com-video-to-gif-converter.gif) | Pass


## Browser Compatiblity

## Responsiveness

## Code Validation

## Bugs

**Fixed Bugs**

No. | Bug | Expected Outcome | Actual Outcome | Fixed
--- | --- | --- | --- | ---
1 | No questions in the question window | Questions displayed upon clicking begin | ![A screenshot of no questions showing bug](assets/images/bugs-ss/no-questions-ss.gif) | Yes

**Known Bugs** 

No. | Bug | Expected Outcome | Actual Outcome
--- | --- | --- | ---
1 | Clicking the last answer multiple times will duplicate the See Results button | See Results button only displayed once | ![A GIF showing multiple See Results Button](assets/images/bugs-ss/multiple-check-results-ezgif.com-video-to-gif-converter.gif)
2 | Clicking the correct answer multiple times will increment score | Only incrementing the score once if answer is correct | ![A screenshot showing the score being too high](assets/images/bugs-ss/wrong-score.png)
3 | Background image scrolls with page on iOS Devices despite having fixed attribute | Content scrolls on top of a fixed background | 

## Lighthouse

## Accessibility