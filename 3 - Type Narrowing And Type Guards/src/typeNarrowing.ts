// TYPE NARROWING

function getChai(kind: string | number) {
  if (typeof kind === "string") {
    return `Making ${kind} tea...`;
  }
  return `Order number:${kind}`;
}

function customizeChai(message?: string) {
  if (message) {
    return `${message}`;
  }
  return `No customization`;
}

function coffeeSize(size: "small" | "medium" | "large" | number) {
  if (size == "small") {
    return `Small coffee cup...`;
  }
  if (size === "medium" || size === "large") {
    return `Extra coffee...`;
  }

  return `Coffee order: #${size}`;
}

class KulhadChai {
  serve() {
    return `Serving kulhad chai...`;
  }
}

class Cutting {
  serve() {
    return `Serving cutting chai...`;
  }
}

function serve(chai: KulhadChai | Cutting) {
  if (chai instanceof KulhadChai) {
    return chai.serve();
  }
}

type ChaiOrder = {
  type: string;
  sugar: number;
};

function isChaiOrder(obj: any): obj is ChaiOrder {
  return (
    typeof obj === "object" &&
    obj !== null &&
    typeof obj.type === "string" &&
    typeof obj.sugar === "number"
  );
}

function serveOrder(item: ChaiOrder | string) {
  if (isChaiOrder(item)) {
    return `Serving ${item.type} with ${item.sugar}`;
  }
  return `Serving custom tea: ${item}`;
}

type MasalaChai = { type: "masala"; spiceLevel: number };
type GingerTea = { type: "ginger"; amoubt: number };
type ElaichiTea = { type: "elaichi"; aromeLevel: number };

type Chai = MasalaChai | GingerTea | ElaichiTea;

function makeTea(order: Chai) {
  switch (order.type) {
    case "masala":
      return `Masala Chai`;
      break;

    case "ginger":
      return `Ginger Tea`;
      break;

    case "elaichi":
      return `Elaichi Tea`;
      break;
  }
}

function brew(order: MasalaChai | GingerTea){
  if("spiceLevel" in order){
   // the property "spicelevel" exists only in MasalaChai. So we can guess the type of Chai using their properties also
  }
}