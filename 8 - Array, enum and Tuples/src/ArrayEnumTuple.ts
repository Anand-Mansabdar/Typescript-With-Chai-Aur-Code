// Defining type of an array that contains strings only
const chaiFlavours: string[] = ["Masala", "Ginger", "Elaichi"];

// Defining type of an array that contains numbers only
const chaiPrice: number[] = [10, 15, 25];

const rating: Array<number> = [4.5, 5.0];

// Array of objects
type Chai = {
  name: string;
  price: number;
};

const menu: Chai[] = [
  { name: "Masala tea", price: 15 },
  { name: "Lemon tea", price: 20 },
];

// Readonly arrays - Arrays that once are defined but cannot be modified later
const cities: readonly string[] = ["Hyderabad", "Vadodara", "Mumbai"];
// cities.push("Pune") // Error - Cannot push

// Multidimensional Arrays
const table: number[][] = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

// TUPLES
let chaiTuple: [string, number];
chaiTuple = ["Masala Chai", 20];
// chaiTuple = [60, 'Tandoori Chai'] // Error - First index should contain a string and then a number not the other way around

let userInfo: [string, number, boolean?];
userInfo = ["Anand Mansabdar", 20, true]; // correct
userInfo = ["Virat Kohli", 37]; // Correct

// Readonly tuples
const location: readonly [number, number] = [28.66, 32.22];

// Named tuple :- Normal tuple types are difficult to understand as we dont know what values we require to store
const chaiItems: [name: string, price: number] = ["Masala", 25]; // Readable... We are strong name, and price in a tuple

// ENUMS :- Used to restrict the choices for the user
enum CupSize {
  SMALL,
  MEDIUM,
  LARGE,
}

const size = CupSize.MEDIUM;

// AutoIncremental Enums
enum Status {
  PENDING = 100,
  SERVED, // 101
  CANCELLED, // 102
}
// We have defined PENDING as 100, so we are also required to define SERVED and CANCELLED.
// If not defined they automatically get values 101(100+1) and 102(100+2) respectively...

enum ChaiType {
  MASALA = "masala",
  GINGER = "ginger",
}

function makeChai(type: ChaiType) {
  console.log(`Making: ${type}`);
}

makeChai(ChaiType.GINGER);
makeChai(ChaiType.MASALA);
//makeChai("masala") // Error, Cannot pass strings. We have to select them as above example

// Creating constant enums
const enum Sugars {
  LOW = 1,
  MEDIUM = 2,
  HIGH = 3,
}

const sugar = Sugars.MEDIUM;

// Unexpected Behaviour - We can push something inside of a tuple
let t: [number, string] = [21, "Anand"];
t.push(188); // No error, because at the end of the day a tuple is an array only
