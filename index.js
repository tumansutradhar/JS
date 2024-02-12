// Alert Function
alert("Hello, World!");

// Type checker
typeof (123);
typeof ("Tuman");
typeof (true);

// Input
prompt("What is your name?");

// Variable
var myName = "Tuman";
var yourAge = prompt("Enter your age?");
alert("Your age is: " + yourAge);

// Exercise start
var a = 3;
var b = 8;
var c = a;
a = b;
b = c;
console.log("a is " + a);
console.log("b is " + b);
// Exercise end

// String
var message = "Hello,";
var name = "Tuman";
alert(message + name);

// Length
var newName = "Bishal";
newName.length;

// Exercise start
var tweet = prompt("Compose your tweet:");
var tweetCount = tweet.length;
alert("You have written" + tweetCount + "characters, you have" + (140 - tweetCount) + "characters remaining");
// Exercise end

// Slice(X,Y)
var name = "Tuman";
name.slice(0, 1);

// Exercise start
var tweet = prompt("Compose your tweet:");
var tweetSlice = tweet.slice(0, 140);
alert(tweetSlice);
// Exercise end

// Uppercase & Lowercase
// Exercise start
var userName = prompt("Enter your name:");
var firstChar = userName.slice(0, 1);
var upperCase = firstChar.toUpperCase(); //UpperCase: TUMAN
var restOfName = userName.slice(1, userName.length);
restOfName = restOfName.toLowerCase(); //LowerCase: tuman
var finalName = upperCase + restOfName;
alert("Hello, " + finalName);
// Exercise end

// Arithmetic & Modulo Operator
// Addition
var A = 2 + 3; //Output 5
// Subtraction
var B = 10 - 2; //Output 8
// Multiplication
var C = 3 * 3; //Output 9
// Division
var D = 6 / 2; //Output 3
// Modulo
var E = 9 % 6; //Output 3

// Precedence
var cost = 3 + 5 * 2; //Output 13
var cost = (3 + 5) * 2; //Output 16

// Dog age to Human Age Formula
// humanAge=(dogAge - 2) * 4 + 21
var dogAge = prompt("Enter Dog Age:");
var humanAge = (dogAge - 2) * 4 + 21;
alert("Dog age is" + humanAge + "years old in human years");

// Increment & Decrement Expression
var x = 5;
x = x + 1; //Output 6

var x = 5;
x++; //Output 6

// Function
function getMilk() {
    alert("Leave House");
    alert("Move Right");
    alert("Move Up");
    alert("Move Up");
    alert("Move Right");
    alert("Buy Milk");
    alert("Move Left");
    alert("Move Up");
    alert("Move Up");
    alert("Move Left");
    alert("Enter House");
}
getMilk(); //For output

// Parameters & Arguments
// Parameters: inside of () value is called parameters
function getMilk(bottles) {
    alert("Leave House");
    alert("Move Right");
    alert("Move Up");
    alert("Move Up");
    alert("Move Right");
    alert("Buy" + bottles + "Milk");
    alert("Move Left");
    alert("Move Up");
    alert("Move Up");
    alert("Move Left");
    alert("Enter House");
}
// Arguments: function call is arguments
getMilk(10); //Then the output is 10 times in one movement
// Exercise start
function buyMilk(money) {
    var numberOfMilk = Math.floor(money / 1.5);
    alert("Buy" + numberOfMilk + "bottles of Milk")
}
buyMilk(5); //Output 3
// Exercise end
