// Write a polifill for the for Each Loop

const array = [1, 2, 3, 4, 5];

// ForEach Loop Signature needs to be understand - No return value, function input, value and index. 
// Call the function for every value

// if(!Array.prototype.myForEach) {
//     Array.prototype.myForEach = function(userFn) {
//         const originalArray = this; // this is pointing to the current to current Object
//         for(let i = 0; i < originalArray.length; i++) {
//             userFn(originalArray[i], i);
//         }
//     }

// }
// array.myForEach(function(value, index){
//     console.log(`myForEach Value at index ${index} is ${value}`);
// })


// .Map Signature needs to be understand - Return new array, each element itrate, userFn

// if(!Array.prototype.myMap) {
//     Array.prototype.myMap = function(userFn) {
//         const originalArray = this
//         const result = [];

//         for(let i = 0; i < originalArray.length; i++) {
//             const value = userFn(originalArray[i], i);
//             result.push(value);
//         }
//         return result;
//     }
// }

// const res = array.myMap((e) => e * 3);
// console.log(res);

// .Filter Signature needs to be understand - Return new array, each element itrate, userFn

// if(!Array.prototype.myFilter) {
//     Array.prototype.myFilter = function(userFn) {
//         const originalArray = this;
//         const result = [];

//         for(let i = 0; i < originalArray.length; i++) {
//             const value = userFn(originalArray[i], i);
//             if(value) {
//                 result.push(originalArray[i]);
//             }
//         }
//         return result;
//     }
// }

//const res2 = array.myFilter((e) => e > 3);

//console.log(res2);

// .Reduce Signature needs to be understand - Return single value, each element itrate, userFn

if(!Array.prototype.myReduce) {
    Array.prototype.myReduce = function(userFn, initialValue) {
        const originalArray = this;
        let accumulator  = initialValue;

        for (let i = 0; i < originalArray.length; i++) {
            if(accumulator === undefined) {
                accumulator = originalArray[i];
            } else {
                accumulator = userFn(accumulator, originalArray[i], i);
            }
        }
    }
}
