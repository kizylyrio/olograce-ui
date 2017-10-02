import React, { Component } from 'react';
import Menu from './Menu'
import Card from './Card'
import Session from './Session'
import { Button } from 'react-bootstrap';

class Main extends Component {
    render() {
      return (
        <div>
          <Menu/>
          <Card/>
          <Button bsSize="small" bsStyle="success">Gravar</Button>
          <Session />
          
        </div>
      );
    }
  }
  
  export default Main;