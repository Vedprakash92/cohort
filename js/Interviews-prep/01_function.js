
// function greet (name) {
//     console.log(`Hello ${name}`)
// }
// greet("Vedprakash");
// greet("Harsh")

const person1 = {
    name:"Vedprakash",
    greet: function () {
        //console.log(`Hello ${this.name}`);
    }
}

const person2 = {
    name:"Harsh"
}


const bindGreet = person1.greet.bind(person2);

//Bind returns a new function

//bindGreet();

let globleUser = "Hi, I am globleUser";
//console.log('globleUser before: ', globleUser )


function modifyGloble() {
    globleUser = "Globle User you are modified";

    let blockScope = "I am blocked-scoped, i am changed inside functions only.";
    //console.log(blockScope);
}

modifyGloble();

//console.log('globleUser after:', globleUser)

const user1 = {
    userName:"vedprakash",
    greet: function() {
        console.log(`Hi I am ${this.userName}`)
    },
}

const user2 = {
    userName:"Harsh"
}

//user1.greet();

//user1.greet.call(user2);


const obj = {
    personName: "Vedprakash",
    greet: function () {
        console.log(`Hello ${this.personName}`)
    }
}
console.log("I am Ved");

setTimeout(() => {
    obj.greet.bind(obj);
}, 0)
Promise.resolve().then(() => {
    console.log("Promise Resolve : 1")
    Promise.resolve().then(() => {
        console.log("Promise Resolve : 2")

        Promise.resolve().then(() => {
            console.log("Promise Resolve : 3")

            Promise.resolve().then(() => {
                console.log("Promise Resolve : 4")
            });
        });
    });
});

setTimeout(() => {
    obj.greet.bind(obj);
}, 1000 * 5)

console.log("Byy Byy Ved");