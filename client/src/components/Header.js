import { User, ShoppingCartSimple } from "phosphor-react";
import React, { useState } from "react";
import Auth from "../utils/auth";
import { ModalBody, Modal, Button, Badge, Navbar, Nav } from "react-bootstrap";
import CategoryMenu from "./Categories";
import { useSelector } from "react-redux";
import Cart from "./Cart";

const Header = () => {
  const state = useSelector((state) => state);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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

  //Rendering Order History button and Logout conditionally

  function showNavigation() {
    if (Auth.loggedIn()) {
      return (
        <>
          <Nav className="me-auto navbar">
            <Nav.Link className="m-1 navbar fs-5" href="/order">
              Order History
            </Nav.Link>
            <Nav.Link className="m-1 navbar fs-5" onClick={() => Auth.logout()}>
              Logout
            </Nav.Link>
          </Nav>
        </>
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
    <>
      <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
        <img src="./images/logo.jpg" height="100" alt="" loading="lazy" />

        <Navbar.Brand className="brand" href="/">
          Pretty Stones
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse
          id="responsive-navbar-nav"
          className="justify-content-end"
        >
          <Nav className="me-auto ">{<CategoryMenu />}</Nav>
          <Nav>
            {showNavigation()}

            <Nav>
              <Button
                variant="info"
                className="m-2 rounded-2"
                onClick={handleShow}
              >
                <ShoppingCartSimple size={36} />{" "}
                <Badge bg="danger">{TotalItems()}</Badge>
              </Button>
            </Nav>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Your Cart</Modal.Title>
        </Modal.Header>
        <ModalBody>
          <Cart />
        </ModalBody>
      </Modal>
    </>
  );
};

export default Header;
