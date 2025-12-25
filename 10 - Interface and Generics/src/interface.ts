// Interfaces :- works almost the same as the "type" keyword. In 80% of the cases both are interchangeable

interface Chai {
  flavour: string;
  price: number;
  milk?: boolean;
}

const masala: Chai = {
  flavour: "Masala",
  price: 30,
  milk: true,
};

interface Shop {
  readonly id: number;
  name: string;
}

const s: Shop = {
  id: 1,
  name: "ChaiPitStop",
};

// s.id = 2; // Error. Cannot edit property "id"

interface DiscountCalculator {
  (price: number): number;
}
const apply50: DiscountCalculator = (p) => p * 0.5;

interface TeaMachine {
  start(): void;
  stop(): void;
}

const machine: TeaMachine = {
  start() {
    console.log("Start");
  },
  stop() {
    console.log("Stop");
  },
};

// Index signatures
interface ChaiRatings {
  [flavour: string]: number;
}

const ratings: ChaiRatings = {
  masala: 4.5,
  ginger: 3.2,
};

// Unique feature: Two or more interface properties merge if the names of the interface are the same
interface User {
  name: string;
}

interface User {
  age: number;
}

// Interface User merge together to form a common interface User with properties name abd age
const u: User = {
  name: "Anand Mansabdar",
  age: 21,
};

// Extending Interfaces
interface A {
  a: string;
}
interface B {
  b: string;
}

interface C extends A, B {} // has combined properties of A and B
