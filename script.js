
var petArray = ["cat","cow","dog"];
petArray.push("sheep");
console.log(petArray [1]);
console.log(petArray.length);

var catObject = [
    {
        name: "Lucy",
        colour: "White",
        age: 2
    },
    {
        name: "Bella",
        colour: "Ginger",
        age: 5
    },
    {
        name: "Luna",
        colour: "Black",
        age: 7
    }
];

console.log(catObject[2]);

var catArray = [catObject];
var arrayLength = catArray.length;
for (var i = 0; i < arrayLength; i++) {
    console.log(catArray[i]);
}

function logToConsole(animal){
    var animal = animal;
    return animal;
}

var animal0 = logToConsole("Donkey");
console.log(animal0);



// Whats your favorite colour?

// Green.

// Whats your favorite flower?

// Peonies. 