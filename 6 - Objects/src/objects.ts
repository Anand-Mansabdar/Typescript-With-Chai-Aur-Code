const chai = {
  name: "Masala Chai",
  price: 20,
  isHot: true,
};

// Typescript infers the above object as follows
// {
//   name: string,
//   price: number,
//   isHot: boolean
// }

let tea: {
  name: string;
  price: number;
  isHot: boolean;
};

tea = {
  name: "Lemon Tea",
  price: 25,
  isHot: true,
};

type Tea = {
  name: string;
  price: number;
  ingredients: string[];
};

const ginerTea: Tea = {
  name: "Ginger Tea",
  price: 25,
  ingredients: ["ginger", "tea leaves", "milk", "water"],
};

type Cup = {
  size: string;
};

let smallCup: Cup = { size: "200ml" };
let bigCup = { size: "500ml", material: "steel" };
smallCup = bigCup;

type Brew = { brewTime: number };
const coffee = { brewTime: 5, beans: "Arabica" };
const chaiBew: Brew = coffee;

type User = {
  username: string;
  password: string;
};

const u: User = {
  username: "Anand Mansabdar",
  password: "123",
};

type Item = {
  name: string;
  quantity: number;
};

type Address = {
  street: string;
  pin: number;
};

type Order = {
  id: string;
  items: Item[];
  address: Address[];
};

type Chai = {
  name: string;
  price: number;
  isHot: boolean;
};

const updateChai = (updates: Partial<Chai>) => {
  // Partial Makes all the properties optional
  console.log("Updating chai with", updates);
};

updateChai({ price: 30 }); // No error since we used the Partial type in the parameter of the function updateChai
updateChai({}); // No error
updateChai({ isHot: true }); // No error

type ChaiOrder = {
  name?: string;
  quantity?: number;
};

const placeOrder = (order: Required<ChaiOrder>) => {
  console.log(order);
};

placeOrder({
  name: "Masala Chai",
  quantity: 3,
});

type newChai = {
  name: string;
  price: number;
  isHot: boolean;
  ingredients: string[];
};

type BasicChaiInfo = Pick<newChai, "name" | "price">; // Pick allows us to choose the required propeties to be specified for our use.

const chaiInfo: BasicChaiInfo = {
  name: "Elaichi Tea",
  price: 35,
};
// We picked only two(name and price) out of four properties from the type "BAsicChaiInfo"

type nayaChai = {
  name: string;
  price: number;
  isHot: boolean;
  secretIngredients: string[];
};

type PublicChai = Omit<nayaChai, "secretIngredients">;
// "Omit" allows to skip properties.
// We have to provide the property name in the form of a string
// In the above example, we have omitted the property 'secretIngredients'. Hence, we are not needed to enter that property and our function works very well even then.
