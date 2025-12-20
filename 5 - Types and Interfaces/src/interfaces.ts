// function makeChai(order: { type: string; sugar: number; strong: boolean }) {
//   console.log(order);
// }

// function serveChai(order: { type: string; sugar: number; strong: boolean }) {
//   order;
// }

// The parameters of the above functions are exactly the same

type ChaiOrder = {
  type: string;
  sugar: number;
  strong: boolean;
};

// We define the 'type' in the form of the object so we can repeat them again and again.

function makeChai(order: ChaiOrder) {
  console.log(order);
}

function serveChai(order: ChaiOrder) {
  console.log(order);
}

type TeaRecipe = {
  water: number;
  milk: number;
};

class MasalaChai implements TeaRecipe {
  //Class 'MasalaChai' incorrectly implements interface 'TeaRecipe'.
  //Type 'MasalaChai' is missing the following properties from type 'TeaRecipe': water, milk

  water = 100;
  milk = 50;
}

// type CupSize = "small" | "large"; // Error with class Chai
// class Chai implements CupSize { }
// A class can only implement an object type or intersection of object types with statically known members.

interface CupSize {
  size: "small" | "large";
}

class Chai implements CupSize {
  size: "small" | "large" = "small";
} // No error

// type Response = {ok: true} | {ok: false}
// class MyResponse implements Response{
//   ok: boolean = true;
// } // Error

type TeaType = "masala" | "ginger" | "lemon";
function orderChai(t: TeaType) {
  console.log(t);
}

type BaseChai = { tealeaves: number };
type Extra = { masala: number };
type MasalaTea = BaseChai & Extra;

const cup: MasalaTea = {
  tealeaves: 2,
  masala: 1,
};

type User = {
  username: string;
  bio?: string;
};

const ul: User = {
  username: "Anand Mansabdar",
};

const u2: User = {
  username: "Anand Mansabdar",
  bio: "www.Anand.com",
};

type Config = {
  readonly appName: string;
  version: number;
};

const config: Config = {
  appName: "Masterji",
  version: 1.1,
};

// config.appName = 'Masterjiiii' // Error