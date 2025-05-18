import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { deleteFromCart } from "../Redux/cartSlice";

function CardProduct({ cartItem }) {
  const dispatch = useDispatch();
  function handleDelete() {
    dispatch(deleteFromCart(cartItem.id));
  }
  return (
    <>
      <h3>
        {cartItem.title} * {cartItem.quantity}
      </h3>
      <p>£{(cartItem.price * cartItem.quantity).toFixed(2)}</p>
      <Button size="sm" onClick={handleDelete}>
        Delete
      </Button>
      <hr></hr>
    </>
  );
}

export default CardProduct;
