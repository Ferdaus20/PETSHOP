import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import axios from "axios";
import { Row, Col } from "react-bootstrap";

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
            <div style={{ textAlign: "center" }}>
              <img
                src={product.image}
                alt={product.productname}
                style={{
                  width: "200px", // Set a fixed width
                  height: "200px", // Set a fixed height
                  objectFit: "cover", // Ensures consistent appearance
                  borderRadius: "10px", // Optional: Adds rounded corners
                }}
              />
            </div>
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
