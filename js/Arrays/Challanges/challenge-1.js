// You are organizing a party and have a list of guests. But just before the party starts, a new friend to join. you need to add them to guist list.

//Problem statement - Create a function that adds a new guest list and return the updated guest list.

const guestList = ['Vedprakash', 'Saurabh', 'Shivendra', 'Ankit'];
const newGuest = 'Harsh';

function addGuest(guestList, newGuest) {
    // Add the newUest to guestList and resture the updated guestList
    // push() method adds one or more elements to the end of an array and returns the new length of the array.
    guestList.push(newGuest);
    return guestList;
}

console.log(addGuest(guestList, newGuest)); // ['Vedprakash', 'Saurabh', 'Shivendra', 'Ankit', 'Harsh']