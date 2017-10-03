import React, { Component } from 'react';
import { Nav, Navbar, NavItem, NavDropdown, MenuItem} from 'react-bootstrap';

class Menu extends Component {
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
              
              <NavDropdown eventKey={3} title="Cadastro" id="basic-nav-dropdown">
                <MenuItem eventKey={3.1}>Novo Membro</MenuItem>
                <MenuItem eventKey={3.2}>Membro por Equipe</MenuItem>
              </NavDropdown>
              <NavItem eventKey={1} href="#">Minha Conta</NavItem>
              <NavItem eventKey={4} href="#">Logout</NavItem>
            </Nav>
        </Navbar.Collapse>
      </Navbar>
      );
    }
  }
  
  export default Menu;