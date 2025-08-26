const accountId = 567890;
let accountEmail = "abc@exaple.com";
var accountPassword = "example@123";
accountCity = "Baroda";

// accountId = 098765; //Not Allowed because const values never changes
accountEmail = "xyz@example.com";
accountPassword = "example@456";
accountCity = "Vadodara";

// console.log(accountId);
/*
Prefer not to use var 
because of issues in block scope and functional scope
*/

//***example code of Block Scope***//
//  function example() {
//         let myVariable = 10; // Block-scoped
//         if (true) {
//             let blockScopedVar = 5; // Visible only inside this if block
//             console.log(myVariable); // Outputs: 10
//             console.log(blockScopedVar); // Outputs: 5
//         }
//         // console.log(blockScopedVar); // Error: blockScopedVar is not defined here
//     }



//***example code of Functional Scope***//
    // function example() {
    //     var myFunctionScopedVar = "Hello"; // Function-scoped
    //     if (true) {
    //         var anotherVar = "World"; // Also accessible outside the if block but within the function
    //         console.log(myFunctionScopedVar); // Outputs: Hello
    //         console.log(anotherVar); // Outputs: World
    //     }
    //     console.log(myFunctionScopedVar); // Outputs: Hello
    //     console.log(anotherVar); // Outputs: World
    // }




console.table([accountId, accountEmail, accountPassword, accountCity]);