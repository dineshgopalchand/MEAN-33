// var variableName='value';
// var /let /const
// number/string/boolean/object

var variableName = "some value12";
console.log(variableName);

/*
Rules for variable name
_ $ a-z A-Z -- first character of variable name
_$a-zA-Z0-9 -  second character onward
there is no limit for number of char
eg. mySchoolNameDetails

use camelCase or snake_case
*/

/*
  Naming convention
  - camelCase - firstSecondThird
  - PascalCase(upper camel case) - FirstSecondThird
  - kabab-case - first-second-third
  - snake_case - first_second_third
 */

var studentName = "Gopal"; // string type
console.log(studentName);
studentName = "Priyanka";
console.log(studentName);
console.log(typeof studentName);
studentName = 100; // number
console.log(studentName);
console.log(typeof studentName);

// data types
var nameVal = "Santosh"; // string
console.log(typeof nameVal);
var studentCount = 3; // number
console.log(typeof studentCount);
var isValid = true; // boolean
console.log(typeof isValid);
var studentList = ["Dinesh", "Priyanka", "Deepa", "Angshuman"]; // Object(Array)
console.log(typeof studentList);
var studentDetails = {
  name: "Santosh",
  location: "Bangalore",
  phone: "+919876543211",
}; // object
console.log(typeof studentDetails);
var nullVal = null; // object(null)
console.log(typeof nullVal);
var undefinedVal; // undefined
console.log(typeof undefinedVal);

// var /let /const
// var -> re-assignment and re-declaration is allowed
var nameValue = "Dinesh";
var nameValue = "Gopal";
console.log({ nameValue });

// let -> re-assignment  is allowed but re-declaration is not allowed
let location = "bangalore";
location = "Chennai";
console.log({ location });

// const ->   re-assignment and re-declaration is not allowed
const phone = "+919876543211";

console.log({ phone });
