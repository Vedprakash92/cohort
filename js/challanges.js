// You just need to implement the hasDiscount function
// function hasDiscount(product) {
//     //check is product should be valid object
//   // Check if product has discount property
  
//   if(product && product.discount){
//     return true;
//   } else {
//     return false;
//   }
// }

// const product = {
//     name:'Laptop',
//     price: 1000,
    
// }

// console.log(hasDiscount(product)); // true

// const user = {
//     name: 'John',
// }
// // You just need to implement the removePassword function
// function removePassword(user) {
//     // Remove password property
//     if(user){
//         delete user.password;
//         return user;
//     }
// }

// console.log(removePassword(user)); // { name: 'John' }
// console.log(user); // { name: 'John' }


// // You just need to implement the countProperties function
// function countProperties(user) {
//   // Return the number of properties in user
//   if(user){
//     return Object.keys(user).length;
//   }
// }

// console.log(countProperties(user)); // 3

// const obj1 = {
//     name: 'John',
//     age: 30
// }
  
// const obj2 = {
//     name: 'Jane',
//     city: 'New York'
// }
// // You just need to implement the mergeObjects function
// function mergeObjects(obj1, obj2) {
//     // Merge obj1 and obj2 into a single object
//     if(obj1 && obj2){
//         return {...obj1, ...obj2};
//     }
// }

// console.log(mergeObjects(obj1, obj2)); // { name: 'Jane', age: 30, city: 'New York' }

// You just need to implement the objectToArray function
// function objectToArray(obj) {
//     // Convert the object into an array of key-value pairs
//     if(obj){
//         return Object.entries(obj);
//     }
// }

// console.log(objectToArray(user))

// const user = {
//     name: 'Vedprakash',
//     age: 30,
//     email:null
// }

// You just need to implement the cleanObject function
// function cleanObject(obj) {
//     // Remove all properties with null or undefined values
//     if(obj){
//         for(let key in obj){
//             if(obj[key] === null || obj[key] === undefined){
//                 delete obj[key];
//             }
//         }
//         return obj;
//     }
// }

// console.log(cleanObject(user)); // { name: 'Vedprakash', age: 30 }

// You just need to implement the deepClone function
// function deepClone(obj) {
//     // Return a deep copy of obj
//     if(obj){
//         return JSON.parse(JSON.stringify(obj));
//     }
// }

// function getNestedValue(obj, keyPath) {
//     if (obj && keyPath) {
//         let keys = keyPath.split('.');
//         let value = obj;
        
//         for (let key of keys) {
            
//             if (value[key] !== undefined) { // Ensure the key exists
//                 value = value[key];
//             } else {
//                 return undefined; // Return undefined if any key is missing
//             }
//         }
//         return value;
//     }
//     return undefined; // Return undefined if obj or keyPath is invalid
// }

// // Example Object
// const obj = {
//     user: {
//         name: 'Vedprakash',
//         address: {
//             city: 'New York',
//             street: {
//                 number: 22,
//                 name: 'Wall Street'
//             }
//         }
//     }
// };

// // Test
// console.log(getNestedValue(obj, 'user.address.city')); // Output: New York

const user = {
    name: 'Vedprakash',   
}

// You just need to implement the removePassword function
function removePassword(user) {
    // Remove password property
    if(user){
        delete user.password;
        return user;
    }
}

console.log(removePassword(user)); // { name: 'Vedprakash' }
