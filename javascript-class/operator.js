// Arithmetic Operator
// + ->plus
// - ->minus
// x (*) -> multiplication
// / ->division
// % -> modulus

var numValue1 = 30;
var numValue2 = 20;
var result = numValue1 + numValue2;
console.log(result);
var result = numValue1 - numValue2;
console.log(result);
var result = numValue1 * numValue2;
console.log(result);
var result = numValue1 / numValue2;
console.log(result);

var result = numValue1 % numValue2;
console.log(result);

// numValue1 = numValue1 + 1;
numValue1++;
console.log(numValue1);

// numValue2 = numValue2 - 1;
numValue2--;
console.log(numValue2);

// numValue2 =
//   numValue2 *
//   numValue2 *
//   numValue2 *
//   numValue2 *
//   numValue2 *
//   numValue2 *
//   numValue2 *
//   numValue2 *
//   numValue2 *
//   numValue2;
// numValue2 = numValue2 ** 15;
numValue2 = Math.pow(numValue2, 15);

console.log(numValue2);

// 9.30764956882561e+31
// 9.30764956882561 * 10**31

// 9.30764956882561e-31
// 9.30764956882561 / 10**31

// Assignment Operator
var result = 12;
console.log(result);
var result1 = (result2 = 12 * 3);
console.log({ result1, result2 });

var num = 12;
// num = num + 1;
// num = num++;

// num = num + 2;
// num += 2;
// console.log(num);

// num -= 2;
// console.log(num);

// num *= 2;
// console.log(num);

// num /= 2;
// console.log(num);

// num %= 5;
// console.log(num);

num **= 5;
// num=num**5
console.log(num);

//  Logical operator

// OR -> ||
// AND -> &&
// NOT -> !

// condition1 || condition2 (OR)
// t || t => t
// t || F => t
// f || t => t
// f || f => f

// condition1 && condition2  (AND)
// t && t => t
// t && F => f
// f && t => f
// f && f => f

// !condition  (NOT)
// t => f
// f => t

// Comparison Operators

// == // equal
var num1 = 23;
var num2 = 23;
console.log(num1 == num2);
var num11 = 26;
var num21 = "26";
console.log(num11 == num21);
console.log(num11 === num21);

var num1 = 5 + 1 + 26 + 1;
var num2 = 5 + 1 + "26" + 1;
console.log(num1, num2);

console.log(26 / 5); //5.2
console.log("26" / 5); // 5.2

console.log(5 ** "2"); //
console.log("5" ** "2"); //
