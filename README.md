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

* _Click on the link provided on epicenter_
* _This will lead you to the repository on GitHub where the webpage is stored_
* _Once you are on GitHub, you are able to see the code and the files in the webpage as well as this README_
* _From there, you can clone the repository to your desktop_
* _Open the html file in a browser of your choosing_


## Known Bugs

* _Any known issues_
* _should go here_

## Specs

Describe: beepBoop()

Test: "It should return an array of 0 if the number 0 is inputted."
Code: beepBoop(0)
Expected Output: [0]

Test: "It should return an array containing a range of numbers from 0 to the inputted number."
Code:beepBoop(6)
Expected Output: [0, 1, 2, 3, 4, 5, 6]

Test: "It should return an array where whenever there is a 1 digit displayed it is replaced with 'Beep!'."
Code: beepBoop(6)
Expected Output: [0, "Beep!", 2, 3, 4, 5, 6]

Test: "It should return an array where whenever there is a 2 digit displayed it is replaced with 'Boop!'."
Code: beepBoop(6)
Expected Output: [0, "Beep!", "Boop!", 3, 4, 5, 6]

Test: "It should return an array where whenever there is a digit of 3 displayed it is replaced with 'Won't you be my neighbor?'."
Code: beepBoop(6)
Expected Output: [0, "Beep!", "Boop!", "Won't you be my neighbor?", 4, 5, 6]




## License

_[Licensed By: MIT] (https://opensource.org/licenses/MIT)_

Copyright (c) _2022_ _Jack Jones_