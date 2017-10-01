import React, { Component } from 'react';
import { Nav, Navbar, NavItem, NavDropdown, MenuItem} from 'react-bootstrap';
import './Menu.css';

const navbarInstance = (
  <Navbar inverse collapseOnSelect>
    <Navbar.Header>
      <Navbar.Brand>
        <a href="#">React-Bootstrap</a>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
      <Nav>
        <NavItem eventKey={1} href="#">Link</NavItem>
        <NavItem eventKey={2} href="#">Link</NavItem>
        <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
          <MenuItem eventKey={3.1}>Action</MenuItem>
          <MenuItem eventKey={3.2}>Another action</MenuItem>
          <MenuItem eventKey={3.3}>Something else here</MenuItem>
          <MenuItem divider />
          <MenuItem eventKey={3.3}>Separated link</MenuItem>
        </NavDropdown>
      </Nav>
      <Nav pullRight>
        <NavItem eventKey={1} href="#">Link Right</NavItem>
        <NavItem eventKey={2} href="#">Link Right</NavItem>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);


class Menu extends Component {
    render() {
      return (
    //   <Nav bsStyle="tabs" activeKey="1" onSelect={this.handleSelect}>
    //     <NavDropdown eventKey="4" title="Dropdown" id="nav-dropdown">
    //       <MenuItem eventKey="4.1">Action</MenuItem>
    //       <MenuItem eventKey="4.2">Another action</MenuItem>
    //       <MenuItem eventKey="4.3">Something else here</MenuItem>
    //       <MenuItem divider />
    //       <MenuItem eventKey="4.4">Separated link</MenuItem>
    //     </NavDropdown>
    //   </Nav>



        // <Navbar>
        //   <Navbar.Header>
        //     <Navbar.Brand>
        //       <a href="#">Brand</a>
        //     </Navbar.Brand>
        //     <Navbar.Toggle />
        //   </Navbar.Header>
        //   <Navbar.Collapse>
        //     <Navbar.Text>
        //       User: <Navbar.Link href="#">Maria</Navbar.Link> <span>-</span> Team: <Navbar.Link href="#">Graças</Navbar.Link> 
        //     </Navbar.Text>
        //   </Navbar.Collapse>
        // </Navbar>



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
      {/* <Nav pullRight>
        <NavItem eventKey={1} href="#">Link Right</NavItem>
        <NavItem eventKey={2} href="#">Link Right</NavItem>
      </Nav> */}
    </Navbar.Collapse>
  </Navbar>
      );
    }
  }
  
  export default Menu;

// const NavDropdownExample = React.createClass({
//   handleSelect(eventKey) {
//     event.preventDefault();
//     alert(`selected ${eventKey}`);
//   },

//   render() {
//     return (
//       <Nav bsStyle="tabs" activeKey="1" onSelect={this.handleSelect}>
//         <NavItem eventKey="1" href="/home">NavItem 1 content</NavItem>
//         <NavItem eventKey="2" title="Item">NavItem 2 content</NavItem>
//         <NavItem eventKey="3" disabled>NavItem 3 content</NavItem>
//         <NavDropdown eventKey="4" title="Dropdown" id="nav-dropdown">
//           <MenuItem eventKey="4.1">Action</MenuItem>
//           <MenuItem eventKey="4.2">Another action</MenuItem>
//           <MenuItem eventKey="4.3">Something else here</MenuItem>
//           <MenuItem divider />
//           <MenuItem eventKey="4.4">Separated link</MenuItem>
//         </NavDropdown>
//       </Nav>
//     );
//   }
// });

// ReactDOM.render(<NavDropdownExample />, mountNode);
