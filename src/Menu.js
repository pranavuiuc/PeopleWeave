import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, Container } from 'react-bootstrap';

function Menu() {
    return(
        <div>
        <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand>My Website</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Introduction</Nav.Link>
            {/* <Link to = "/Data">Data</Link> */}
            <Nav.Link href="/Data">Data</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        </div>
    )
}


export default Menu;