//type conversion

//convert number to number : gets converted 
let score = 33;
// console.log(typeof score); //prints number
// console.log(typeof (score)); //prints number
let valueInNumber = Number(score)
// console.log(typeof valueInNumber); //prints number
// console.log(typeof (valueInNumber)); //prints number

//convert string to number : gets converted
let run = "33"
// console.log(typeof run); //prints string
// console.log(typeof (run)); //string
let valueInRun = Number(run);
// console.log(typeof valueInRun); //prints number
// console.log(typeof (valueInRun)); //prints number

//convert string to number : gets converted but value is NaN
let digits = "123abc"
// console.log(typeof digits); //prints string
// console.log(typeof (digits)); //prints string
let valueInDigits = Number(digits);
// console.log(typeof valueInDigits); //prints number
// console.log(valueInDigits); //prints NaN

//convert null to number : gets converted but value is 0
let value = null
// console.log(typeof value); //prints object
let valueInValue = Number(value)
// console.log(typeof valueInValue); //prints number
// console.log(valueInValue); //prints 0

//convert undefined to number : gets converted but value is NaN
let cardValue = undefined
// console.log(typeof cardValue); //prints undefined
let valueIncardValue = Number(cardValue)
// console.log(typeof valueIncardValue); //prints number
// console.log(valueIncardValue); //prints Nan

//convert number to boolean : gets converted 1=>true, 0=>false
let isLoggedIn = 1;
let booleanIsLoggedIn = Boolean(isLoggedIn);
// console.log(booleanIsLoggedIn) //prints true

//convert emplty string to boolean : gets converted to false
let human = ""
let booleanHuman = Boolean(human);
// console.log(booleanHuman); //prints false

//convert string to boolean : gets converted to true
let greet = "Hello";
let booleanGreet = Boolean(greet);
// console.log(booleanGreet); //prints true

//convert number to string : gets converted
let randomNumber = 1592;
// console.log(typeof randomNumber); //prints number
let stringRandomNumber = String(randomNumber);
// console.log(stringRandomNumber);// prints 1592
// console.log(typeof stringRandomNumber); //prints string


//**************************************OPERATIONS********************************* */
let val = 10;
let negVal = -val;
// console.log(negVal);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**4);
// console.log(2/2);
// console.log(2%2);

let str1 = "Hello";
let str2 = " World!!";
let str3 = str1 + str2;
// console.log(str3);

// console.log("1" + 2);
// console.log(1 + "2");
// console.log("1"+2+2);
// console.log(1+2+"2");
//console.log((3+4)*5 % 5) //preferable

// console.log(+true); //prints 1
// console.log(+""); //prints 0

let num1, num2, num3

// num3 = num2 = num1 = 10+15 //nor preferable

let gameCounter = 100;
gameCounter++;
//++gameCounter;
// console.log(gameCounter);