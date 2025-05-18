import { Row, Col } from "react-bootstrap";
import { useSelector } from "react-redux";
import ProductCard from "../components/ProductCard";

function Store() {
  const productsArray = useSelector((state) => state.productsList.products);
  return (
    <>
      <h1 align="center" className="p-3">
        Welcome to the store!
      </h1>
      <Row xs={1} md={3} className="g-4">
        {productsArray.map((product, idx) => (
          <Col align="center" key={idx}>
            <ProductCard
              title={product.title}
              price={product.price}
              id={product.id}
            />
          </Col>
        ))}
      </Row>
    </>
  );
}

export default Store;
