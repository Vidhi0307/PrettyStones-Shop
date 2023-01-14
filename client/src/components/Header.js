import { ShoppingCartSimple } from "phosphor-react";
import React from "react";
import { Badge,Navbar, Nav, Container,NavDropdown } from "react-bootstrap";

const Header = () => {

    const cart = ['item1','item2'];


  return (
    <header>

        

<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/" className ="fw-bold">Pretty Stones</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            
            
            <NavDropdown className="fas" title="Categories" id="collasible-nav-dropdown">
              <NavDropdown.Item className="fas p-1" href="#action/3.1">Rings</NavDropdown.Item>
              <NavDropdown.Item className="fas p-1" href="#action/3.2">
                Earrings
              </NavDropdown.Item>
              <NavDropdown.Item  className="fas p-1" href="#action/3.3">Necklaces</NavDropdown.Item>
               <NavDropdown.Item  className="fas p-1" href="#action/3.3">Wrist Wears</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item className="fas p-1"  href="#action/3.4">
                Browse All
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link className="fas" href="">About Us</Nav.Link>
          </Nav>
          <Nav>
          <Nav.Link className="fas fa-user p-3 me-3" href="/login">Login</Nav.Link>
          <Nav.Link className="fas  p-3 me-1" href="/cart"><ShoppingCartSimple size ='32'/><Badge>{cart.length}</Badge></Nav.Link>
           
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    
 
    </header>
  );
};

export default Header;