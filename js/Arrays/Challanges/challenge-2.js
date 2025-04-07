// You have a jar full of candies, but your little siblings keep eating the last one !
// Your job is to remove the last candy from the jar and return the updated jar.

// Problem statement - Create a function that removes the last candy from the jar and returns the updated jar.

function eatCandy(candyJar) {
    // Remove the last candy from the jar and return the updated jar

    // pop() method removes the last element from an array and returns that element. This method changes the length of the array.
    candyJar.pop();
    return candyJar;
}

const candyJar = ['chocolate', 'lollipop', 'gummy bear', 'jelly bean'];
console.log(eatCandy(candyJar)); // ['chocolate', 'lollipop', 'gummy bear']