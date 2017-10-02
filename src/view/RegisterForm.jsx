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
        <FormGroup controlId="formControlsSelect">
        <ControlLabel>Equipe</ControlLabel>
        <FormControl componentClass="select" placeholder="select">
          <option value="dores">Dores</option>
          <option value="fatima">Fátima</option>
          <option value="gracas">Graças</option>
          <option value="imaculada">Imaculada Conceição</option>
          <option value="lourdes">Loudes</option>
          <option value="salete">Salete</option>
          <option value="silencio">Silêncio</option>
        </FormControl>
      </FormGroup>
        <Button type="submit" bsSize="small" bsStyle="success">Gravar</Button>
      </form>
      );
    }
  }
  
  export default RegisterForm;