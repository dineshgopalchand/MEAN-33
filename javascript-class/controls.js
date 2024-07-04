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

// Loops
// while
// 1+2+3+4+5... +100
console.log(1 + 2 + 3 + 4 + 5);

// increment/decrement  : num+=1/num++
//condition num<=100
/* 
    init
    while(condition){
        increment/decrement
    }
*/
var sum = 0;
var num = 1;
while (num <= 100) {
  sum += num; // sum=sum+num;
  num++;
}
console.log(sum);

// 2+4+6+...+200
var num = 1;
var sum = 0;
while (num <= 200) {
  if (num % 2 == 0) {
    sum += num;
  }
  num++;
}

console.log(sum);

var num = 500,
  sum = 0,
  count = 0,
  totalCount = 1000;

while (count < totalCount) {
  if (num % 2 == 0) {
    count++;
    sum += num;
  }
  num++;
}
console.log(sum);

// do while

// do{
// // statement
// }while(condition)
// 1 + 2 + 3 + 4 + 5...+100;
var num = 1,
  end = 100,
  sum = 0;
do {
  sum += num;
  num++;
} while (num <= end);
console.log(sum);

// for

// for(init;condition;inc/dec){
// statment
// }

for (
  var num = 1, sum = 0, count = 0, totalCount = 1000;
  count < totalCount;
  num++
) {
  if (num % 2 == 0) {
    count++;
    sum += num;
  }
}
console.log(sum);

var num = 1,
  sum = 0,
  count = 0,
  totalCount = 1000;
for (;;) {
  if (!(count < totalCount)) {
    break;
  }
  if (num % 2 == 0) {
    count++;
    sum += num;
  }
  num++;
}
console.log(sum);
var nameVal = "dinesh";
console.log(nameVal.charAt(nameVal.length - 1));
console.log(nameVal.length);
var nameVal = "ABCabc";
console.log(nameVal.charCodeAt(3));
console.log(nameVal.concat("123"));

// forof

var studentNameArr = ["Dinesh", "Priyanka", "Deepa", "Angshuman"];
console.log(studentNameArr.length);
for (var index = 0; index < studentNameArr.length; index++) {
  console.log(`${studentNameArr[index]} have a pen`);
}

for (const ele of studentNameArr) {
  console.log(`${ele} have a book`);
}

studentNameArr.forEach(function (ele) {
  console.log(`${ele} have a bag`);
});

// studentNameArr.
// forin

var studentDetails = {
  name: "Santosh",
  location: "Bangalore",
  phone: "+919876543211",
};
console.log(Object.entries(studentDetails));
for (const iterator of Object.entries(studentDetails)) {
  console.log(`${iterator[0]} :${iterator[1]} `);
}
for (const key in studentDetails) {
  //   if (Object.hasOwnProperty.call(studentDetails, key)) {
  // const element = studentDetails[key];
  console.log(`${key} :${studentDetails[key]} `);
  //   }
}
// forEach
