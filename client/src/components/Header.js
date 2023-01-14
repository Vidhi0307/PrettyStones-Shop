import { ShoppingCartSimple ,User} from "phosphor-react";
import React from "react";
import { Badge,Navbar, Nav, Container,NavDropdown } from "react-bootstrap";

const Header = () => {

    const cart = ['item1','item2'];


  return (
    <header>

        

<Navbar className="navbar" collapseOnSelect  bg="light" >
      <Container>
        <Navbar.Brand   href="/" style ={ {fontSize: 40}}>Pretty Stones</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav " />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto  ">
            
            
            <NavDropdown className="fs-3 " title="Categories" id="collasible-nav-dropdown">
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
            <Nav.Link className="fs-3" href="/about">About Us</Nav.Link>
          </Nav>
          <Nav>
           
          <Nav.Link className="fs-3 me-4" href="/login"><User size={32} />Login</Nav.Link>
          <Nav.Link  href="/cart"><ShoppingCartSimple size ='45'/><Badge>{cart.length}</Badge></Nav.Link>
           
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    
 
    </header>
  );
};

export default Header;