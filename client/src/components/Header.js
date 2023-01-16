import { Heart, User, ShoppingCartSimple, Image } from "phosphor-react";
import React from "react";
import Auth from "../utils/auth";
import { Link, useLocation } from "react-router-dom";
import { Dropdown } from "react-bootstrap";
import CategoryMenu  from "./Categories";
import {
  Badge,
  Button,
  Navbar,
  Nav,
  Container,
  NavDropdown,
  NavItem,
} from "react-bootstrap";

import { useDispatch, useSelector } from "react-redux";
import Cart from "./Cart";
import DropdownItem from "react-bootstrap/esm/DropdownItem";

const Header = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);

  const { cart } = state;


  //Calculating the Cart Items



  function TotalItems() {
    let totalItems = 0;
    state.cart.forEach((item) => {
      {
        totalItems += item.purchaseQuantity;
      }
    });
    return totalItems;
  }


  //Showing 
  function showNavigation() {
    if (Auth.loggedIn()) {
      return (
        <Nav className="me-auto">
          <Nav.Link className="m-1" href="/orderHistory">
            Order History
          </Nav.Link>
          <Nav.Link className="m-1" onClick={() => Auth.logout()}>
            Logout
          </Nav.Link>
        </Nav>
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
    <Navbar className="p-3" collapseOnSelect expand="lg" bg="light" variant="light">
      
      
            <img
              src='./images/logo.jpg'
              height='90'
              alt=''
              loading='lazy'
            />
     
        <Navbar.Brand  className="brand fs-1" href="/">Pretty Stones</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">

            {<CategoryMenu/>}
         
          </Nav>
          <Nav>
            <nav>{showNavigation()}</nav>
            <Nav.Link className="m-1" href="">
              <Heart size={32} />
            </Nav.Link>
            <Nav.Link className="m-1"> </Nav.Link>
            <Nav>
              {" "}
              <Dropdown align="end">
                <Dropdown.Toggle variant="secondary">
                  <ShoppingCartSimple size={32} />
                  <Badge>{TotalItems()}</Badge>
                </Dropdown.Toggle>
                <Dropdown.Menu className="super-colors">
                  <Cart />
                 </Dropdown.Menu>
              </Dropdown>
            </Nav>
          </Nav>
        </Navbar.Collapse>
      
    </Navbar>
  );
};

export default Header;
