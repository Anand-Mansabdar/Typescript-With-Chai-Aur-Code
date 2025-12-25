import "./App.css";
import Card from "./components/Card";
import CardTwo from "./components/CardTwo";
import ChaiList from "./components/ChaiList";
import Counter from "./components/Counter";
import OrderForm from "./components/OrderForm";

import type { Chai } from "./types";

const menu: Chai[] = [
  { id: 1, name: "Masala", price: 30 },
  { id: 2, name: "Ginger", price: 45 },
  { id: 3, name: "Lemon", price: 25 },
];

const App = () => {
  return (
    <div>
      App
      <Card name="Headphones" price={5000} />
      <Card name="Macbook" price={50000} isSpecial={true} />
      <div>
        <Counter />
      </div>
      <div>
        <ChaiList items={menu} />
      </div>
      <div>
        <OrderForm
          onSubmit={(order) => {
            console.log("Placed", order.name, order.cups);
          }}
        />
      </div>
      <div>
        <CardTwo
          title="React and Typescript with ChaiAurCode"
          footer={<button>Footer</button>}
        />
      </div>
    </div>
  );
};

export default App;
