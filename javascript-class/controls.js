// condition

var numVal = 13; // odd
var rem = numVal % 2;
// if
// ifelse
// ternary operator
// switch case

// if(condition){
//     statement
// }

// "this is"+
//  "dinesh";

//  `this is
//  dinesh`;

if (!(numVal % 2)) {
  //   console.log(numVal + " is even number");
  console.log(`${numVal} is even number`);
}

if (numVal % 2) {
  //   console.log(numVal + " is odd number");
  console.log(`${numVal} is odd number`);
}

// if else
if (!(numVal % 2)) {
  console.log(`${numVal} is even number`);
} else {
  console.log(`${numVal} is odd number`);
}

// if else if
var someNum = 23;
// even/odd/zero
if (someNum === 0) {
  console.log(`${someNum} is zero`);
} else if (!(someNum % 2)) {
  console.log(`${someNum} is even number`);
} else {
  console.log(`${someNum} is odd number`);
}

var color = "Red"; // Red/Green/Blue

switch (color) {
  case "Red":
    console.log("red ball");
    console.log("red ball!!");
    break;
  case "Green":
    console.log("green ball");
    break;
  case "Blue":
    console.log("blue ball");
    break;
  default:
    console.log("unknown colored ball");
}

// ternary operator (?:)
var numVal = 13;
if (!(numVal % 2)) {
  console.log(`${numVal} is even number`);
} else {
  console.log(`${numVal} is odd number`);
}

var result = `${numVal} is ${numVal % 2 ? "odd" : "even"} number...`;
console.log(result);

var result = numVal % 2 ? "odd" : "even";
console.log(`${numVal} is ${result} number...`);
