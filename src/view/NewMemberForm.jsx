import React, { Component } from 'react';
import { FormGroup ,  ControlLabel, FormControl, Button } from 'react-bootstrap';
import Session from './custom-component/Session'

class NewMemberForm extends Component {
    render() {
      return (
          <Session title="Novo Membro">
                <form>
                  <FormGroup controlId="username">
                    <ControlLabel>Login</ControlLabel>
                    <FormControl type="text"/>
                  </FormGroup>
                  <FormGroup controlId="team">
                    <ControlLabel>Equipe</ControlLabel>
                    <FormControl disabled componentClass="select" placeholder="select">
                      <option value="gracas">Graças</option>
                    </FormControl>
                  </FormGroup>
                  <Button type="submit" bsSize="small" bsStyle="success">Gravar</Button>
                </form>
          </Session>
      );
    }
  }
  
  export default NewMemberForm;