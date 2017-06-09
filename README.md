# Let's Play Ping Pong!

#### Variant of the classic "fizz-buzz" problem.

#### By Nicole Freed

## Description

Variant of the classic "fizz-buzz" problem where the user enters a number and the browser returns the count up to the number, replacing multiples of 3 with "ping," multiples of 5 with "pong," and multiples of both 3 and 5 with "ping-pong."

## Setup/Installation Requirements

* Migrate to Github repository at https://github.com/gitasong/ping-pong.
* Clone Github repository to your desktop using git clone https://github.com/gitasong/ping-pong.git.
* Unzip repository.
* Double-click on index.html to load it into your default browser.
* Follow instructions in the web page that opens.

## Behavior Specifications

* The program displays its output to its web page.
- Example Input: <any>
- Expected Output: <any; displays to web page>

* The program will enter new results when the user clicks the "Submit" button and enters a new number.
- Example Input: <new input>
- Expected Output: <new results>

* The program will handle no input with the error message "Please enter a number."
- Example Input: <null>
- Expected Output: "Please enter a number"

* The program will handle non-numeric input with the error message "Please enter a number."
- Example Input: "*!$$@^%"
- Expected Output: "Please enter a number"

* The program will handle mixed numeric and non-numeric input with the error message "Please enter a number."
- Example Input: "miners79"
- Expected Output: "Please enter a number."

* The program can count up to the provided number.
- Example Input: 2
- Expected Output: [1, 2]

* When a number counting up to the inputted number is divisible by 3, the output is "ping".
- Example Input: 4
- Expected Output: [1, 2, "ping", 4]

* When a number counting up to the inputted number is divisible by 5, the output is "pong".
- Example Input: 6
- Expected Output: [1, 2, "ping", 4, "pong", 6]

* When the inputted number is divisible by both 3 and 5, the output is "ping-pong".
- Example Input: 16
- Expected Output: [1, 2, "ping", 4, "pong", "ping", 7, 8, "ping", "pong", 11, "ping", 13, 14, "ping-pong", 16]

## Known Bugs

No known bugs.

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
