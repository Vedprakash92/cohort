const name = ["Vedprakash", "Rohit", "Shivendra", "Ankit", "Harsh"];

//sort using for loop

for(let i = 0; i < name.length; i++){
    for(let j = i + 1; j < name.length; j++) {
        if(name[i] < name[j]){
            let temp = name[i];
            name[i] = name[j];
            name[j] = temp;
        }
    }
}

//console.log(name, "name");


// Write Prototype of debouncing function

Function.prototype.debounce = function(delay) {
    let timer;
    const userFn = this;

    return function(...args) {
        clearTimeout(timer);
        timer = setTimeout(() => {
            userFn.apply(this, args);
        }, delay)
    }
}

const sayHello = (name) => {
    console.log(`Hello ${name}`);
}

const debouncedSay = sayHello.debounce(1000);

console.log(debouncedSay("Ved"));
console.log(debouncedSay("Prakash"));
console.log(debouncedSay("Poddar"));


// Difference between debouncing and throttling in JavaScript with example and explanation

// debouncing is used to prevent the function from being called multiple times in a short period of time, while throttling is used to limit the rate at which a function is called

// Throttling is used to limit the rate at which a function is called

// Reconsilation in React JS

//React Reconciliation refers to React’s process of comparing the current and previous states of the Virtual DOM and updating the DOM efficiently. 
//It makes the DOM updates faster in React. 
//It updates the virtual DOM first and then uses the diffing algorithm to make efficient and optimized updates in the Real DOM.