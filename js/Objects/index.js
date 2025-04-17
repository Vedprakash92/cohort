const teas = {
    name: "Lemon Tea",
    type: "Lemon",
    caffeine: "Low",
}

//console.log(teas.name);
//console.log(teas["type"]);

// Add a new property to the object
teas.origin = "India";

//console.log(teas);

// Change the caffeine value to "Medium"

teas.caffeine = "Medium";



// Delete the type property from the object

delete teas.type;

console.log(teas);

// check if the origin property exists in the object

// if(teas.origin){
//     console.log("Origin property exists");
// }

console.log("origin" in teas);

// use for in loop to print all the properties of the teas object

for (let key in teas) {
    //console.log(key + ": " + teas[key]);
}

// Create a nested object 

const teaObj = {
    greenTea: {
        name: "Green Tea",
        type: "Green",
        caffeine: "Low",
        origin: "China"
    },
    blackTea: {
        name: "Black Tea",
        type: "Black",
        caffeine: "High",
        origin: "India"
    }
}

//console.log(teaObj.greenTea.name);

// Create a copy of tea object 

const teaCopy = {...teaObj};
teaCopy.greenTea.origin = "Japan";
console.log(teaObj, "teaCopy");

const copyTeaObj = Object.assign({}, teaObj);

//console.log(copyTeaObj, "copyTeaObj");