import { Heart, User, ShoppingCartSimple } from "phosphor-react";
import React from "react";
import Auth from "../utils/auth";
import { Link, useLocation } from "react-router-dom";
import { Dropdown } from "react-bootstrap";
import {  Badge,Button,  Navbar,  Nav,  Container,  NavDropdown,  NavItem}  from "react-bootstrap";

import { useDispatch, useSelector } from 'react-redux';
import Cart from "./Cart";



const Header = () => {
 
  const dispatch = useDispatch();
  const state = useSelector(state => state);
  const {cart}=state;
  const totalItems= state.cart.length;
  function showNavigation() {
    if (Auth.loggedIn()) {
      return (
        <ul className="flex-row">
          <Nav.Link className="mx-1"href="/orderHistory">
              Order History
              </Nav.Link>
          <NavItem className="mx-1" onClick={() => Auth.logout()}>
              Logout
          </NavItem>
        </ul>

      );
    } else {
      return (
        <Nav.Link className="m-1" href="/login">
        <User size={32} />        
        </Nav.Link>
      );
    }
  }


  return (
    <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
      <Container>
        <Navbar.Brand href="/">Pretty Stones</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/earings">Earings</Nav.Link>
            <Nav.Link href="/necklace">Necklace</Nav.Link>
            <Nav.Link href="/rings">Rings</Nav.Link>
            <Nav.Link href="/about">About us</Nav.Link>
          </Nav>
          <Nav>
           
            <Nav.Link className="m-1" href="">
              <Heart size={32} />
            </Nav.Link>
            <Nav.Link className="m-1"> </Nav.Link>
            <Nav>
              {" "}
              <Dropdown alignRight>
                <Dropdown.Toggle variant="success">
                  <ShoppingCartSimple size={32} />
                  <Badge>{totalItems}</Badge>
                </Dropdown.Toggle>

                <Dropdown.Menu style={{ minWidth: 370 }}>
                
                    <Cart/>
                 {/*    <Link to="/cart">
                    <Button style={{ width: "95%", margin: "0 10px" }}>
                      Go To Cart
                    </Button>
                  </Link> */}
                    
               
                </Dropdown.Menu>
              </Dropdown>
            </Nav>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
