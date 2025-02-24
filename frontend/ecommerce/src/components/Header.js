import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";

function Header() {
  return (
    <Navbar expand="lg" bg="primary" data-bs-theme="dark">
      <div className="container-fluid">
        <Navbar.Brand as={Link} to="/">PET Shop</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarColor01" />
        <Navbar.Collapse id="navbarColor01">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/cart">Cart</Nav.Link>

            <Nav className="dropdown">
              <Nav.Link as={Link} to="/signup" className="dropdown-toggle" data-bs-toggle="dropdown">
                New User
              </Nav.Link>
              <div className="dropdown-menu">
                <Nav.Link as={Link} to="/login" className="dropdown-item">Login</Nav.Link>
                <Nav.Link as={Link} to="/signup" className="dropdown-item">Signup</Nav.Link>
                <div className="dropdown-divider"></div>
                <Nav.Link className="dropdown-item" href="#">Logout</Nav.Link>
              </div>
            </Nav>
          </Nav>
          <form className="d-flex">
            <input className="form-control me-sm-2" type="search" placeholder="Search" />
            <button className="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
          </form>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
}

export default Header;
