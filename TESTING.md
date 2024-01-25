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
X Button | Click X Button | Exit Quiz before reaching the end | ![A GIF clicking the X button and collapsing the quiz window](assets/images/quiz-table-ss/collapse-quiz-ezgif.com-video-to-gif-converter.gif)


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