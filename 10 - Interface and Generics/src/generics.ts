function wrapInArray<T>(item: T): T[] {
  // <T> is called a generic
  return [item];
}

// The above generic tells us that we can pass a datatype T (can be a string, number, object, or even an array)

wrapInArray("masala");
wrapInArray(42);
wrapInArray({ flavour: "Ginger" });

function pair<A, B>(a: A, b: B): [A, B] {
  return [a, b]; // We should return it like this only
  // return [b, a]; // Error
}

pair("masala", 34);
pair("masala", "ginger");
pair(21, 20);
pair("Tea", { flavour: "masala", suger: 2 });

// Interface as a Generic
interface Box<T> {
  content: T;
}

const box: Box<string> = {
  content: "10",
};

const numberBoxString: Box<number> = {
  content: 23,
};

// Generics in API
interface ApiPromise<T> {
  status: number;
  data: T;
}

const res: ApiPromise<{ content: string }> = {
  status: 200,
  data: { content: "API Response Recieved" },
};
