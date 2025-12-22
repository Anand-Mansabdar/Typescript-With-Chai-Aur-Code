// class Chai {
//   flavour: string; // Error at 2 and 3 because no contructor is defined
//   price: number;

// }

// const masalaChai = new Chai();
// masalaChai.flavour = "masala";
// masalaChai.price = 20;

class Chai {
  flavour: string;
  price: number;

  constructor(flavour: string, price: number) {
    this.flavour = flavour;
    this.price = price;
  }
}

const masalaChai = new Chai("masala", 20); // This generates error if no arguments are passed at Chai()

// Access modifiers in TS
class newChai {
  public flavour: string = "masala";

  private secretIngredients = "Cardamom";

  reveal() {
    return this.secretIngredients; // works correctly
  }
}

class Shop {
  protected shopName = "Chai Corner";
}

class Branch extends Shop {
  getName() {
    return this.shopName; // no error
  }
}

const c = new newChai();
c.reveal();

new Branch().getName;

// Private variables can also be declared using '#'
class Wallet {
  #balance = 1000;

  getBalance() {
    return this.#balance;
  }
}

const w = new Wallet();
w.getBalance();

// Readonly properties in classes
class Cup {
  readonly capacity: number = 250;

  constructor(capacity: number) {
    this.capacity = capacity;
  }
}

// Controlled Gates - Getter and setter
class MakeChai {
  private _sugar = 2;

  get sugar() {
    return this._sugar;
  }

  set sugar(value: number) {
    if (value > 5) throw new Error("Avoid having too sweet...");
    this._sugar = value;
  }
}

const s = new MakeChai();
s.sugar = 2;

// Static method
class EkChai {
  static shopName = "ChaiCode Cafe";

  constructor(public flavour: string) {}
}
console.log(EkChai.shopName); // Can be accessed using only the class name and not the object / instance name

// ABSTRACT CLASS
abstract class Drink {
  abstract make(): void;
}

class Coffee extends Drink {
  make(): string {
    return `Brewing Coffee...`;
  }
}

// Class composition - Can be a replacement to inheritance
class Heater {
  heat() {}
}

class ChaiMaker {
  constructor(private heater: Heater) {}

  make() {
    this.heater.heat;
  }
}
