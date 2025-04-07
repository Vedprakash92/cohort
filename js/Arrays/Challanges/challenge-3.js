// A puppy named Max was playing in the park, but the went to the first position of the queue inserted of waiting at the end.
// You need to add Max at the beginning of the queue 

// Problem statement - Create a function that adds a puppy to the front of the queue and return the updated queue.

const puppyQueue = ['Bella', 'Charlie', 'Lucy', 'Daisy'];
const newPuppy = 'Max';

function addPuppy(queue, puppyName) {
    // Add the puppy at the beginning of the queue and return the updated queue

    // unshift() method adds one element to the beginning of an array and returns the new length of the array.
    queue.unshift(puppyName);
    return queue;
}

console.log(addPuppy(puppyQueue, newPuppy)); // ['Max', 'Buddy', 'Bella', 'Charlie', 'Lucy', 'Daisy']