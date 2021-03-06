# _Mr. Roboger's Neighborhood_

#### By _**Jack Jones**_

#### _This application will take user input and return with different behaviors based on the input provided._

## Technologies Used

* _HTML_
* _CSS_
* _Javascript_
* _jQuery_

## Description

_This application is designed to showcase knowledge of arrays and looping. The webpage takes input from the user and will display a message. This message will change depending on what the users input actually is. There are exceptions as well. The users input is a number- it can be any number. Based on the number provided, the user will then get a result of an array containing numbers as well as hidden messages._

## Setup/Installation Requirements

* _First, clone this repository to your own desktop_
* _Do this by running git clone with the link provided inside of your terminal_
* _After it is cloned, you can right click on the project folder and open it up in a browser of your choosing to view_


## Known Bugs

* _There are no known bugs at this time_

## Specs

Describe: beepBoop()

Test: "It should return an array of 0 if the number 0 is inputted."
Code: beepBoop(0)
Expected Output: [0]

Test: "It should replace all numbers containing a '1' with 'Beep!'."
Code: beepBoop(1)
Expected Output: [0, "Beep!"]

Test: "It should replace all numbers containing a '2' with 'Boop!'."
Code: beepBoop(2)
Expected Output: [0, "Beep!", "Boop!"]

Test: "It should replace all numbers containing a '3' with 'Won't you be my neighbor!'."
Code: beepBoop(3)
Expected Output: [0, "Beep!", "Boop!", "Won't you be my neighbor!"]

Test: "The number 13 should return 'Won't you be my neighbor?'."
Code: roboExceptions(13)
Expected Output: [0, Beep!, Boop!, Won't you be my neighbor?, 4, 5, 6, 7, 8, 9, 10, Beep!, Boop!, Wont you be my neighbor?]

Test: "The number 21 should return 'Boop!'."
Code: roboExceptions(21)
Expected Output: [0, Beep!, Boop!, Won't you be my neighbor?, 4, 5, 6, 7, 8, 9, 10, Beep!, Boop!, Wont you be my neighbor?] 14, 15, 16, 17, 18, 19, Boop!, Boop!] Boop!, ]

Test: "The number 32 should be replaced with 'Won't you be my neighbor?'."
Code: roboExceptions(32)
Expected Output: [0, "Beep!", Boop!, Won't you be my neighbor?, 4, 5, 6, 7, 8, 9, 10, Beep!, Boop!, Wont you be my neighbor?] 14, 15, 16, 17, 18, 19, Boop!, Boop!, Boop!, Won't you be my neighbor?, Boop!, Boop!, Boop!, Boop!, Boop!, Boop!, Won't you be my neighbor?, Won't you be my neighbor?, Won't you be my neighbor?]


## License

_[Licensed By: MIT] (https://opensource.org/licenses/MIT)_

Copyright (c) _2022_ _Jack Jones_