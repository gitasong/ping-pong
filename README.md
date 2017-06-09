# Let's Play Ping Pong!

#### Variant of the classic "fizz-buzz" problem.

#### By Nicole Freed

#### on Github: [https://github.com/gitasong/ping-pong](https://github.com/gitasong/ping-pong)

#### on Github Pages: [https://gitasong.github.io/ping-pong](https://gitasong.github.io/ping-pong)

## Description

Variant of the classic "fizz-buzz" problem where the user enters a number and the browser returns the count up to the number, replacing multiples of 3 with "ping," multiples of 5 with "pong," and multiples of both 3 and 5 with "ping-pong."

## Setup/Installation Requirements

* Migrate to Github repository at https://github.com/gitasong/ping-pong.
* Clone Github repository to your desktop using git clone https://github.com/gitasong/ping-pong.git in the Terminal.
* Unzip repository.
* Double-click on index.html to load it into your default browser.
* Follow instructions in the web page that opens.

## Behavior Specifications

* The program displays its output to its web page.
  - _Example Input: <any>_
  - _Expected Output: <any; displays to web page>_

* The program will enter new results when the user clicks the "Submit" button and enters a new number.
  - _Example Input: <new input>_
  - _Expected Output: <new results>_

* The program will handle no input with the error message "Please enter a number."
  - _Example Input: <null>_
  - _Expected Output: "Please enter a number"_

* The program will handle non-numeric input with the error message "Please enter a number."
  - _Example Input: "*!$$@^%"_
  - _Expected Output: "Please enter a number"_

* The program will handle mixed numeric and non-numeric input with the error message "Please enter a number."
  - _Example Input: "miners79"_
  - _Expected Output: "Please enter a number."_

* The program can count up to the provided number.
  - _Example Input: 2_
  - _Expected Output: [1, 2]_

* When a number counting up to the inputted number is divisible by 3, the output is "ping".
  - _Example Input: 4_
  - _Expected Output: [1, 2, "ping", 4]_

* When a number counting up to the inputted number is divisible by 5, the output is "pong".
  - _Example Input: 6_
  - _Expected Output: [1, 2, "ping", 4, "pong", 6]_

* When the inputted number is divisible by both 3 and 5, the output is "ping-pong".
  - _Example Input: 16_
  - _Expected Output: [1, 2, "ping", 4, "pong", "ping", 7, 8, "ping", "pong", 11, "ping", 13, 14, "ping-pong", 16]_

## Known Bugs

Count/Results section will still display after Submit button click and alert if user enters 0, non-numeric input, mixed input, or no input.

## Support and contact details

You can contact me at gitasong@github.io with any questions.

## Technologies Used

* HTML 5
* CSS 3
* Javascript 5
* JQuery 3

### License

This software is licensed under the GPL 2.0 license.

Copyright (c) 2016 Nicole Freed
