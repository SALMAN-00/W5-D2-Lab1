// When the user chooses one of the channel buttons, change the src attribute of the img inside the .tv-show div
// You should write a single function to change the channel that accepts a single input, the channel number, and uses a conditional statement to change the TV to the image specific to that channel.
// When you set up your event listeners for the buttons, the callback function should call upon that change channel function
// Use a conditional statement to evaluate which channel they've chosen, so you can set a specific image for each channel
// Feel free to look up and use any images of your choice and include them in your conditional statement! Be sure to use an absolute path to the image file.

let oneChanel = document.getElementById("one");
let towChanel = document.getElementById("two");
let threeChanel = document.getElementById("three");
let fourChanel = document.getElementById("four");
let fiveChanel = document.getElementById("five");
let sixChanel = document.getElementById("six");
let sevenChanel = document.getElementById("seven");
let eightChanel = document.getElementById("eight");
let nineChanel = document.getElementById("nine");
let screenChanle = document.getElementById("imgScreen");

oneChanel.addEventListener("click", () => {
  screenChanle.src =
    "https://ga-instruction.s3.amazonaws.com/assets/front-end-web-development/fewd-conditionals-images/blue-planet.jpg";
});
towChanel.addEventListener("click", () => {
  screenChanle.src =
    "https://ga-instruction.s3.amazonaws.com/assets/front-end-web-development/fewd-conditionals-images/deadpool.jpg";
});
threeChanel.addEventListener("click", x => {
  screenChanle.src =
    "https://ga-instruction.s3.amazonaws.com/assets/front-end-web-development/fewd-conditionals-images/gravity.jpg";
});
fourChanel.addEventListener("click", x => {
  screenChanle.src =
    "https://ga-instruction.s3.amazonaws.com/assets/front-end-web-development/fewd-conditionals-images/good-will-hunting.jpg";
});
fiveChanel.addEventListener("click", x => {
  screenChanle.src =
    "https://ga-instruction.s3.amazonaws.com/assets/front-end-web-development/fewd-conditionals-images/cnn.jpg";
});
sixChanel.addEventListener("click", x => {
  screenChanle.src =
    "https://ga-instruction.s3.amazonaws.com/assets/front-end-web-development/fewd-conditionals-images/koyaanisqatsi.jpg";
});

sevenChanel.addEventListener("click", x => {
  screenChanle.src =
    "https://ga-instruction.s3.amazonaws.com/assets/front-end-web-development/fewd-conditionals-images/parts-unknown.jpg";
});

eightChanel.addEventListener("click", x => {
  screenChanle.src =
    "https://ga-instruction.s3.amazonaws.com/assets/front-end-web-development/fewd-conditionals-images/star-wars-solo.jpeg";
});

nineChanel.addEventListener("click", x => {
  screenChanle.src =
    "https://ga-instruction.s3.amazonaws.com/assets/front-end-web-development/fewd-conditionals-images/stranger-things.jpg";
});

// Image files
/*
1-
https://ga-instruction.s3.amazonaws.com/assets/front-end-web-development/fewd-conditionals-images/blue-planet.jpg

2-

3-

4-

5-

6-

7-

8-

9-
*/

// Variables
// 1 - get channel from the remote
// 2 - get the screen and change in the image in there

// Pseudo-code
// Variable1, listen to it for a click
// function() {Listener would update the image in the screen}
