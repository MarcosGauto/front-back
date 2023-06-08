import React from "react";
import "./Navbar.css";
import { Container, Nav, Navbar, } from 'react-bootstrap';



const Menu = () => {
    return (
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand href="#home">El Remanso </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="/">Inicio</Nav.Link>
                            <Nav.Link href="/Cabaña">Cabañas</Nav.Link>
                            <Nav.Link href="/Galeria">Imagenes</Nav.Link>
                            <Nav.Link href="/contacto">Contacto</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

    );
}
export default Menu;