import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import axios from "axios";
import { Row, Col ,Card} from "react-bootstrap";

function HomeScreen() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const { data } = await axios.get("/api/products/");
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchProducts();
  }, []);

  return (
    <Container>
      <br />
      <h1>products</h1>
      <Row>
        {products.map((product) => (
          <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
            <Card className="my-3 p-3 rounded">
            <img src={product.image} alt={product.productname} />
            </Card>
            <h1>{product.productname}</h1>
            <h6>{product.productcategory}</h6>
            <h6>Information: {product.productdinfo}</h6>
            <h6>Brand: {product.productbrand}</h6>
            <h6>rating: {product.rating}</h6>
            <h6>InStok:{product.stockCount}</h6>
            <p>Price: {product.price} tk</p>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default HomeScreen;
