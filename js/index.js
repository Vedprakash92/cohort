// 1. Write a function that takes an array of days and returns the number of working days in the array. Working days are Monday to Friday.
// function wokkingDays(days) {
//     let workingDayCount = 0;
//     const holidays = ['Saturday', 'Sunday'];

//     for (let i = 0; i < days.length; i++) {
//         if(!holidays.includes(days[i])) {
//             workingDayCount ++;
//         }
//     }
//     return workingDayCount;
// }
// const days = ['Monday', 'Tuesday', 'Wednesday', 'Friday']
// console.log(wokkingDays(days))


// You just need to implement the totalStars function
// function totalStars(starLevels) {
//     let total = 0;
//     for (let i = 0; i < starLevels.length; i++) {
//         console.log(starLevels[i]);
//         total += starLevels[i].length;
//     }
//     return total;
// }

// const starLevels = [["*", "*", "*"],["*", "*", "*"],["*", "*", "*"]];
// console.log(totalStars(starLevels)); // 9

// You just need to implement the totalPrice function
// function totalPrice(prices) {
  
//     let total = 0;
//     for (let i = 0; i < prices.length; i++) {
//         console.log(prices[i]);
//         total += prices[i];
//     }
//     return total;
// }


// const prices = [10.8, 20.5, 30];
// console.log(totalPrice(prices)); // 60

// function shinyDiamondRug(n) {
//     let result = '';
//     for (let i = 1; i <= n; i++) {
//         result += ' '.repeat(n - i) + '*'.repeat(2 * i - 1) + '\n';
//     }
//     return result;
  
// }

// console.log(shinyDiamondRug(5));

// *
// **
// * * *
// ** * *
// * * * **
// * * * *
// * * *
// * *
// *
// function pyramidPattern(n) {
//     let result = '';
//     for (let i = 1; i <= n; i++) {
//         result += ' '.repeat(n - i) + '*'.repeat(2 * i - 1) + '\n';
//     }
//     return result;
// }

//console.log(pyramidPattern(5));

// Function to generate a diamond pattern
// function printDiamond(n) {
//     // Upper part of the diamond
//     for (let i = 1; i <= n; i++) {
//         console.log(" ".repeat(n - i) + "*".repeat(2 * i - 1));
//     }
//     // Lower part of the diamond
//     for (let i = n - 1; i >= 1; i--) {
//         console.log(" ".repeat(n - i) + "*".repeat(2 * i - 1));
//     }
// }

// // Call the function with the desired size
// printDiamond(5);

// * * * * *

// * * * *

// * * *

// * *

// *

// Function to generate the inverted triangle pattern
// Function to generate the inverted triangle pattern
// function printInvertedTriangle(n) {
//     let mountain = "";
//     for (let i = n; i >= 1; i--) {
//         mountain += "*".repeat(i) + "\n"; // Trim trailing space
//       }
    
//     return mountain;
// }

// // Call the function with the desired number of rows
// console.log(printInvertedTriangle(5));

// You just need to implement the createStudentProfile function
// You just need to implement the createStudentProfile function
// function createStudentProfile(name, age, grade) {
//   // Return an object with name, age, and grade
//     return {
//         name: name,
//         age: age,
//         grade: grade
//     };
// }

// You just need to implement the createStudentProfile function
// function createStudentProfile(name, age, grade) {
//     // Return an object with name, age, and grade

//     if(
//       typeof name !== 'string' || 
//       typeof grade !== 'string' || 
//       typeof age !== 'number' || 
//       age <= 5 ||
//       name === ""
//       ) {
//         return "Invalid Input";
//       }
  
//     return { name, age, grade }
// }

// console.log(createStudentProfile("John", 10, "A")); // { name: 'John', age: 10, grade: 'A' }


function addCarColor(car, color) {

    // Add color property to the car object
    if(color === "" ||
      typeof car !== 'object' && car !== null
      ) {
        return "Invalid color"
    }
    

    
    console.log(car.color = color);
    console.log(car);
    return {
      car
    }  
}

// Example with the provided input
const input = { "car": {"brand": "Toyota", "model": "Corolla"}, "color": "Red" };
console.log(addCarColor(input)); // {"brand":"Toyota","model":"Corolla","color":"Red"}

// Example with invalid input
// const invalidInput = { "vehicle": {"make": "Honda", "type": "Civic"}, "shade": "Blue" };
// console.log(addCarColor(invalidInput)); // "Invalid input"
