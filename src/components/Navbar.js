import { useMemo, useState } from "react";
import { Button, Navbar, Modal } from "react-bootstrap";
import { useSelector } from "react-redux";
import CardProduct from "./CardProduct";

function NavbarComponent() {
  const [show, setShow] = useState(false);

  const cartItems = useSelector((state) => state.cartItems.items);
  const total = useSelector((state) => state.cartItems.total);

  const productCount = (cartItems || []).reduce(
    (sum, product) => sum + product.quantity,
    0
  );
  function handleShow() {
    setShow(true);
  }
  function handleClose() {
    setShow(false);
  }
  async function checkout() {
    await fetch("http://localhost:4000/checkout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ items: cartItems }),
    })
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        if (res.url) {
          window.location.assign(res.url); //forwarding users to stripe
        }
      });
  }
  return (
    <>
      <Navbar expand="sm">
        <Navbar.Brand href="/">Store</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Button onClick={handleShow}>Cart ({productCount} Items)</Button>
        </Navbar.Collapse>
      </Navbar>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Shopping Cart</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {productCount > 0 ? (
            <>
              <p> Items in your cart:</p>
              {cartItems.map((cartItem, idx) => {
                return <CardProduct key={idx} cartItem={cartItem} />;
              })}
              <h1>Total: {total.toFixed(2)}</h1>

              <Button variant="success" onClick={checkout}>
                Purchase Items
              </Button>
            </>
          ) : (
            <></>
          )}
        </Modal.Body>
      </Modal>
    </>
  );
}

export default NavbarComponent;
