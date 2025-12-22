// Writing a function by defining the type of parameters
function makeChai(type: string, cups: number) {
  return `Making ${cups} cups of ${type}....`;
}

makeChai("Ginger Tea", 5);

// Defining a function with a return type
function getChaiPrice(): number {
  return 20;
}
// The above function has a return type: number
// It must return a number and not a string in any form

// A function that returns union of two different types
function makeOrder(order: string): string | null {
  if (!order) return null;
  return order;
}

// Function that returns nothing has a type 'void'
function logChai(): void {
  console.log("Chai is ready;");
}

// Optional paramaters in a function
function orderChai(type?: string) {} // No default value for 'type'

// Another way to create optional functions
function order(type: string = "Masala") {} // It is a function that requirs a type or else takes 'Masala' as a default value

// Creaing a function that has nested parameters / an object as a parameter -> Used mostly in React...
function createChai(order: {
  type: string;
  sugar: number;
  size: "small" | "large";
}): number {
  return 4;
}
