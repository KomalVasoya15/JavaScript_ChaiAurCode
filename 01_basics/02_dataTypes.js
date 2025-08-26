"use strict"; //treat all JS code as newer version

// alert(3+3); 
/* this will give the ReferenceError: alert is not defined
because we're using node js and not the browser.
JS's engine is hided in browser. so this will be working when used under developer's tool : console
*/

//code readability should be high
// console.log(3+4); console.log("Hello World!!"); //not a good practice
//good practice is to write a statement in a new line
// console.log(3+4); 
// console.log("Hello World!!"); 

//DataTypes in JS
/*
number => 2,3,10,... 2 to power 53
bigint - for big numbers, use in stock market apps
string => ""
boolean => true/false
null => standalone value i.e. let state = null
undefined => value is not defined i.e., let state;
symbol => used for uniqueness


//objects => 
    
*/
console.log(typeof undefined); //undefined
console.log(typeof null); //object