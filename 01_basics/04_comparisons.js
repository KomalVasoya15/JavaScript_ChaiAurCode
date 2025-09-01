// console.log(5>2);
// console.log(5>12);
// console.log(5>=2);
// console.log(5<2);
// console.log(5==2);
// console.log(5!=2);

console.log("2" > 1); //true
console.log("02" > 1); //true

//------------------------ avoid below comparisons ----------------------------------
console.log(null > 0); //false
console.log(null == 0); //false
console.log(null >= 0); //true
/*
The reason is that an equality check == and comparisons > < >= <= work differently
comparisons convert null to a number, treating it as 0
that's why (3) null >= 0 is a true and (1) null > 0 is false
*/
console.log(undefined == 0); //false
console.log(undefined > 0); //false
console.log(undefined < 0); //false
//------------------------------------------------------------------------------------
// strict check : ===
console.log( "2" === 2); //false comparison for data type as well as value






