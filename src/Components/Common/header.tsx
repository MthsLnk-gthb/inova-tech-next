"use client";

import React from "react";
import { Container, Nav, NavDropdown, Navbar } from "react-bootstrap";
import LogoInovaTech from "../Logo";

const Header = () => {
  return (
    <Navbar expand="lg" style={{zIndex: 99, backgroundColor: "transparent"}}>
      <Container>
        <Navbar.Brand href="/">
          <LogoInovaTech/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Início</Nav.Link>
            <Nav.Link href="#link">Quem somos</Nav.Link>
            <NavDropdown title="Mais" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Serviços</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Contato
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Dúvidas</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Blog
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
