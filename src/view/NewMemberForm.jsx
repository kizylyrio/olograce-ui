import React, { Component } from 'react';
import { FormGroup ,  ControlLabel, FormControl, Button } from 'react-bootstrap';
import Session from './custom-component/Session'

class NewMemberForm extends Component {
    render() {
      return (

        <div>
            <div className="Session">
                <div className="Session-title">
                    Novo Membro
                </div>
                <div className="Session-content">

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
                </div>
            </div>          
        </div>
      );
    }
  }
  
  export default NewMemberForm;