"use client";

import React from "react";
import { Container, Nav, NavDropdown, Navbar } from "react-bootstrap";
import LogoInovaTech from "../Logo";
import styles from '@/styles/components/commons/header.module.scss'

const Header = () => {
  return (
    <Navbar expand="lg" style={{zIndex: 99, backgroundColor: "transparent"}} className={styles.navbar}>
      <Container>
        <Navbar.Brand href="/">
          <LogoInovaTech/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Início</Nav.Link>
            <Nav.Link href="/quemsomos">Quem somos</Nav.Link>
            <Nav.Link href="/quemsomos">Entrar em contato</Nav.Link>
            <Nav.Link href="/quemsomos">Equipe</Nav.Link>
            <NavDropdown title="Serviços" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.2">
                Desenvolvimento de Sites
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Design de sites</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Marketing</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Consultoria</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Treinamento</NavDropdown.Item>
              <NavDropdown.Divider />
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
