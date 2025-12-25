import { useState, type ChangeEvent, type FormEvent } from "react";

interface OrderFormProps {
  onSubmit(order: { name: string; cups: number }): void;
}

const OrderForm = ({ onSubmit }: OrderFormProps) => {
  const [name, setName] = useState<string>("masala");
  const [cups, setCups] = useState<number>(1);
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit({ name, cups });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Chai Name</label>
      <input
        value={name}
        onChange={(e: ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
      />

      <label>Cups</label>
      <input
        type="number"
        value={cups}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setCups(Number(e.target.value) || 0)
        }
      />
      <button type="submit">Place Order</button>
    </form>
  );
};

export default OrderForm;
