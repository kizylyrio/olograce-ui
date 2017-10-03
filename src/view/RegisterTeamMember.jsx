import React, { Component } from 'react';
import Session from './custom-component/Session'
import { FormGroup ,  ControlLabel, FormControl, Button } from 'react-bootstrap';

class RegisterTeamMember extends Component {
    render() {
      return (
        <div>
            <div className="Session">
                <div className="Session-title">
                    Novo membro por equipe
                </div>
                <div className="Session-content">
                <form>
                    <FormGroup>
                        <ControlLabel>Login</ControlLabel>
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
                </div>
            </div>          
        </div>
      );
    }
  }
  
  export default RegisterTeamMember;