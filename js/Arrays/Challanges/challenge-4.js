// A School bus has students inside, but the fisrt student in line needs to get off at the next step. 
// Remove the first student from the bus.

// Problem statement - Create a function that removes the student from the bus and returns the updated bus.

const bus = ['John', 'Emma', 'Sophia', 'Liam'];

function removeStudent(bus) {
    // Remove the first student from the bus and return the updated bus

    // shift() method removes the first element from an array and returns that element. This method changes the length of the array.
    bus.shift();
    return bus;
}

console.log(removeStudent(bus)); // ['Emma', 'Sophia', 'Liam']