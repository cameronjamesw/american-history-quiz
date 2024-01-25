# The Star-Spangled Quiz - Testing

![The Star Spangled Quiz](assets/images/amiresponsive-ss.png)

View the live sight here - [The Star Spangled Quiz](https://cameronjamesw.github.io/american-history-quiz)

# Testing Contents

* [Automated Testing](#automated-testing)
    * [W3C Validator](#w3c-validator)
    * [JSHint Validator](#jshint-validator)
    * [Lighthouse](#lighthouse)
* [Manual Testing](#manual-testing)
    * [Features Testing](#features-testing)
    * [Browser Compatibilty & Responsivity](#browser-compatiblity--responsiveness)
    * [Bugs](#bugs)
    * [Accessiblity](#accessibility)


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


## Browser Compatiblity & Responsiveness

Browser | width > 768px | width > 1024px | 1024px < width | pass/fail
--- | --- | --- | --- | ---
Chrome | ![Chrome Mobile View](assets/images/responsive-img/chrome-mobile-ss.png) | ![Chrome Tablet View](assets/images/responsive-img/chrome-tablet-ss.png) | ![Chrome desktop view](assets/images/responsive-img/chrome-desktop-ss.png)| Pass
Safari | ![Safari Mobile View](assets/images/responsive-img/safari-mobile-ss.png) | ![Safari Tablet View](assets/images/responsive-img/safari-tablet-ss.png) | ![Safari Desktop View](assets/images/responsive-img/safari-desktop-ss.png) | Pass
FireFox | ![Firefox mobile view](assets/images/responsive-img/firefox-mobile-ss.png) | ![Firefox tablet view](assets/images/responsive-img/firefox-tablet-ss.png) | ![Firefox desktop view](assets/images/responsive-img/firefox-desktop-ss.png) | Pass
Microsoft Edge | ![Edge mobile view](assets/images/responsive-img/edge-mobile-ss.png) | ![Edge tablet view](assets/images/responsive-img/edge-tablet-ss.png) | ![Edge desktop view](assets/images/responsive-img/edge-desktop-ss.png) | Pass

## Bugs

**Fixed Bugs**

No. | Bug | Expected Outcome | Actual Outcome | Fixed
--- | --- | --- | --- | ---
1 | No questions in the question window | Questions displayed upon clicking begin | ![A screenshot of no questions showing bug](assets/images/bugs-ss/no-questions-ss.gif) | Yes
2 | Clicking the last answer multiple times will duplicate the See Results button | See Results button only displayed once | ![A GIF showing multiple See Results Button](assets/images/bugs-ss/multiple-check-results-ezgif.com-video-to-gif-converter.gif) | Yes
3 | Clicking the correct answer multiple times will increment score | Only incrementing the score once if answer is correct | ![A screenshot showing the score being too high](assets/images/bugs-ss/wrong-score.png) | Yes
4 | When reseting quiz, see result button would not show | See Results button displayed after last question | ![A screenshot of the see results button not showing](assets/images/bugs-ss/no-results-bug-ss.png) | Yes

**Known Bugs** 

No. | Bug | Expected Outcome | Actual Outcome
--- | --- | --- | ---
1 | Background image scrolls with page on iOS Devices despite having fixed attribute | Content scrolls on top of a fixed background | ![GIF showing the background moving with the image](assets/images/bugs-ss/background-bug.gif)

## Accessibility

I have been mindful during coding to ensure that the website is as accessible friendly as possible. This has been have achieved by:

* Using a semantic HTML structure.
* Using a hover state on all buttons on the site to make it clear to the user if they are hovering over a button.
* Choosing a sans serif font for the site - these fonts are suitable for people with dyslexia.
* Ensuring that there is a sufficient colour contrast throughout the site regarding the meaninful content.

Using the Web Disability Simulator within Google Chrome Dev Tools, I have been able to test the website against some of the major accessiblity impairments. With both green and red being important colors within the color scheme, I was interested to see how somebody with this visual impairment would see the website. Here is the result.. 

![Screenshot of the website through a red/green color blind perspective](assets/images/red-green-blind-ss.png)

When considering implementing future features, it would be very beneficial to accompany the visual impairment of being fully color blind. Through doing some research earlier, it has become clear to me that the quiz window of my website is not very accessible to someone with this visual impairment. 

![Screenshot of the website through a fully color blind perspective](assets/images/full-color-blind-ss.png)