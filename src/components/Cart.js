import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../store/cartSlice";
import "../styles/Cart.css";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);

  console.log(cartItems);

  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };
  return (
    <div>
      <h1>Your Cart </h1>
      <button className="clr-btn" onClick={handleClearCart}>
        Clear Cart
      </button>
      {cartItems?.length === 0 && (
        <h1> Cart is empty. Add Items to the cart!</h1>
      )}
      <ItemList items={cartItems} />
    </div>
  );
};

export default Cart;
