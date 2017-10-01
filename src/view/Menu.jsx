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
              <NavItem eventKey={1} href="#">Perfil</NavItem>
              <NavItem eventKey={2} href="#">Minhas Orações</NavItem>
              <NavDropdown eventKey={3} title="Meu PPV" id="basic-nav-dropdown">
                <MenuItem eventKey={3.1}>Cadastrar</MenuItem>
                <MenuItem eventKey={3.2}>Consultar</MenuItem>
                <MenuItem eventKey={3.3}>Exportar</MenuItem>
                <MenuItem divider />
                <MenuItem eventKey={3.3}>Logout</MenuItem>
              </NavDropdown>
              <NavItem eventKey={4} href="#">Logout</NavItem>
            </Nav>
        </Navbar.Collapse>
      </Navbar>
      );
    }
  }
  
  export default Menu;