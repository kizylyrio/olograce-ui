import React, { Component } from 'react';
import { Nav, Navbar, NavItem, NavDropdown, MenuItem} from 'react-bootstrap';

export default class OldMenu extends Component {
    render() {
      return (
        <Navbar inverse collapseOnSelect>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#">EJNS</a>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav>
              <NavItem eventKey={2} href="#">Meu PPV</NavItem>
              <NavItem eventKey={2} href="#">Minhas Orações</NavItem>
              <NavItem />
              
              <NavDropdown eventKey={3} title="Membros" id="basic-nav-dropdown">
                <MenuItem eventKey={3.1}>Novo Membro</MenuItem>
              </NavDropdown>
              <NavItem eventKey={1} href="#">Minha Conta</NavItem>
              <NavItem eventKey={4} href="#">Logout</NavItem>
            </Nav>
        </Navbar.Collapse>
      </Navbar>
      );
    }
  }