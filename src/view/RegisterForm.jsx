import React, { Component } from 'react';
import { FormGroup ,  ControlLabel, FormControl, Button } from 'react-bootstrap';

class RegisterForm extends Component {
    render() {
      return (
        <form>
        <FormGroup>
          <ControlLabel>Nome</ControlLabel>
          <FormControl type="text"/>
        </FormGroup>
        <FormGroup>
          <ControlLabel>Equipe</ControlLabel>
          <FormControl type="text"/>
        </FormGroup>
        <Button type="submit" bsSize="small" bsStyle="success">Gravar</Button>
      </form>
      );
    }
  }
  
  export default RegisterForm;