import { Button, Card, Col, Form, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {
  addOneToCart,
  removeOneFromCart,
  deleteFromCart,
} from "../Redux/cartSlice";

function ProductCard({ title, price, id }) {
  const item = useSelector((state) => state.cartItems?.items || []).find(
    (item) => item.id === id
  );
  const dispatch = useDispatch();
  const quantity = !item ? 0 : item.quantity;

  function handleRemoveAll() {
    dispatch(deleteFromCart(id));
  }
  function handleAdd() {
    dispatch(addOneToCart({ id, title, price }));
    console.log(quantity);
  }
  function handleMinus() {
    dispatch(removeOneFromCart(id));
  }
  return (
    <Card>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>£{price}</Card.Text>
        {quantity > 0 ? (
          <>
            <Form as={Row}>
              <Form.Label column="true" sm="6">
                In Cart:{quantity}
              </Form.Label>
              <Col sm="6">
                <Button sm="6" className="mx-2" onClick={handleAdd}>
                  +
                </Button>
                <Button sm="6" className="mx-2" onClick={handleMinus}>
                  -
                </Button>
              </Col>
            </Form>
          </>
        ) : (
          <Button variant="primary" onClick={() => handleAdd()}>
            Add To Cart
          </Button>
        )}
      </Card.Body>
    </Card>
  );
}

export default ProductCard;
