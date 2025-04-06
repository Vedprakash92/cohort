// Problem: Create a array it contains different types of teas.

// Solution:
const teas = ['Green Tea', 'Black Tea', 'Herbal Tea', 'Orange Pekon', 'Ice Team'];

//console.log(teas);

// Problem: Add "Chimola Tea" to the existing array.

teas.push('Chimola Tea');
//console.log(teas);

// Problem: Remove "Ice Tea" from the existing array.

const index = teas.indexOf('Ice Team');
if (index > -1) {
    teas.splice(index, 1);
}

//console.log(teas);

// Problem: Filter the list to only includes teas that are caffeinated.

const caffeinatedTeas = teas.filter(tea => {
    return tea !== 'Herbal Tea';
});

//console.log(caffeinatedTeas);

// Problem: Sort the teas alphabetically.

const sortedTeas = teas.sort();
//console.log(sortedTeas);

// Problem: Reverse the order of the teas.
const reversArray = teas.reverse();

// Problem: Use the for loop to print each tea in the array.

for (let i= 0; i < teas.length; i++){
    //console.log(teas[i]);
}

// Problem : Use the forEach method to count the teas in the array that is caffeinated (Excluding Herbal Tea).

let caffeinatedTeasCount = 0;

for (let i = 0; i < teas.length; i++){
    if(teas[i] !== 'Herbal Tea'){
        caffeinatedTeasCount ++;
    }
}
//console.log(caffeinatedTeasCount);

// Problem : Use a for loop to create a new array that all teas name in uppercase.

// for (let i = 0; i < teas.length; i++) {
//     teas[i] = teas[i].toUpperCase();
// }

//console.log(teas);

// Problem : Use the for loop to tea name that contains the most characters.

let longestTea = '';
for (let i = 0; i < teas.length; i++) {

    if(teas[i].length > longestTea.length){
        longestTea = teas[i];
    }
}

//console.log(longestTea);

// Problem : Use the for loop to find the tea name that contains the fewest characters.

let smallestTea = teas[0];
for (let i = 0; i < teas.length; i++) {
    if(teas[i].length < longestTea.length){
        smallestTea = teas[i];
    }
}

//console.log(smallestTea);

// Problem : Use the for loop to reverse the order of the teas.
let reversedArray = []; 
for (let i = teas.length - 1; i >= 0; i--) {
    reversedArray.push(teas[i]);
}

//console.log(reversedArray)

// Problem : Use the for loop to create a new array that contains the first letter of each tea name.

let firstLetterArray = [];
for (let i = 0; i < teas.length; i++) {
    firstLetterArray.push(teas[i][0]);
}

//console.log(firstLetterArray);

//Porblem : Insert the tea "Leamon Tea" after "Green Tea" in the array.

const indexofGreenTea = teas.indexOf('Green Tea');

console.log(indexofGreenTea);
if (indexofGreenTea > -1) {
    teas.splice(indexofGreenTea + 1, 0, 'Leamon Tea');
}

console.log(teas);



