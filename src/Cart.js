import { useSelector } from "react-redux";

const Cart = () => {
  const items = useSelector((store) => store.cart.items);
  return <div>{items.length}</div>;
};

export default Cart;
