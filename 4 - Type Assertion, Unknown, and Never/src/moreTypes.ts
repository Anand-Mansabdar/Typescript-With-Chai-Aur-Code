let response: any = 42;
console.log(response);

// Forceful type assertion
let numericLength: number = (response as string).length;

type Book = {
  name: string;
};

let bookString = `{"name":"who moved my cheese"}`;
let bookObject = JSON.parse(bookString) as Book;
// let bookObject = JSON.parse(bookString);

console.log(bookObject.name);

const inputElement = document.getElementById("username") as HTMLInputElement;

let value: any;

value = "Anand";
value = [1, 2, 3];
value = 2.5;
value.toUpperCase(); // No Error shown at this line

let newValue: unknown;

newValue = "Anand";
newValue = [1, 2, 3];
newValue = 2.5;
// newValue.toUpperCase() // Error

// To avoid that error we use type assertion
if (typeof newValue === "string") {
  newValue.toUpperCase();
}

// Working with try-catch block
try {
} catch (error) {
  if (error instanceof Error) {
    console.log(error.message);
  }
  console.log(`Error, ${error}`);
}

// Assigning unknown variables to other variables
const data: unknown = "Chai aur code";
const strData: string = data as string;

// TYPE - NEVER

type Role = "admin" | "user";
// type Role = "admin" | "user" | "superadmin";
function redirectOnRole(role: Role): void {
  if (role === "admin") {
    console.log("Redirecting to admin dashboard");
    return;
  }
  if (role === "user") {
    console.log("Redirecting to user dashboard");
    return;
  }
  role; // On hovering this 'role' we get type as 'never' as all the cases('admin' and 'user') have been handled
}

function neverReturn(): never {
  while (true) {}
}
