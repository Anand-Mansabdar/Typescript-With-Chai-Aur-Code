// TYPE INFERENCING

let drink = "chai"; // Automatically infers the type of "drink" as string

// drink = 0
// Error as once the type is inferred as a string it cannot be set to a number

// Typescript automatically infers the default datatypes present in JS
let cups = Math.random() > 0.5 ? 10 : "5"; // Infers the type of cup as number or string

let channelName = "ChaiAurCode";

// TYPE ANNOTATION
let chaiFlavour: string = "Masala Chai";
chaiFlavour = "Ginger Tea";
// We have to specify that the variable chaiFlavour will store only string values by annotating it with :string

let age: number = 20;
let isStudent: boolean = true;
