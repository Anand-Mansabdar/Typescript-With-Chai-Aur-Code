import type { Chai } from "../types";
import Card from "./Card";

interface ChaiListProps {
  items: Chai[];
}

const ChaiList = ({ items }: ChaiListProps) => {
  return (
    <div>
      {items.map((item) => (
        <Card
          key={item.id}
          name={item.name}
          price={item.price}
          isSpecial={item.price >= 30}
        />
      ))}
    </div>
  );
};

export default ChaiList;
