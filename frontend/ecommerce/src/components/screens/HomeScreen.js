import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import axios from "axios";
import {Row, Col} from "react-bootstrap";

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
            <h1>{product.name}</h1>
            <h6>{product.catagory}</h6>
            <p>{product.price}</p>  

          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default HomeScreen;
