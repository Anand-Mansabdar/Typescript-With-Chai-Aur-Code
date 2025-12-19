// UNION
let subs: number | string = "1M";
subs = 99999; // The subscribers of a channel may be number(1, 2, ....) or even string(1K, 1M, 99M, ....). To represent in either format we use union(|) operation

let apiRequestStatus: "pending" | "success" | "error" = "pending";

// apiRequestStatus = 'Anand' // Error as we didnt annotate 'Anand' as a status mode
apiRequestStatus = "error";

let airlineSeat: "aisle" | "window" | "middle" = "window";
airlineSeat = "aisle";

// ANY :- we should usually avoid using 'any' situation
const orders = ["12", "4", "44", "82", "57"];
// let currentOrder; 
// let currentOrder: string;
let currentOrder: string | undefined;

for (let order of orders) {
  if (order === "82") {
    currentOrder = order;
    break;
  }
}

console.log(currentOrder);
