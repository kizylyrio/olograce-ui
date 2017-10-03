import React, { Component } from 'react';
import { FormGroup ,  ControlLabel, FormControl, Button } from 'react-bootstrap';
import Session from './custom-component/Session'
import Card from './custom-component/Card'

class NewTeamForm extends Component {
    render() {
      return (
            <Session title="Cadastre sua Equipe">
                <form>
                    <FormGroup controlId="email">
                        <ControlLabel>Email</ControlLabel>
                        <FormControl type="text" placeholder="meu@email.com"/>
                    </FormGroup>
                    <FormGroup controlId="regional">
                        <ControlLabel>Regional</ControlLabel>
                        <FormControl componentClass="select" placeholder="select">
                            <option value="1">Regional 1</option>
                            <option value="2">Regional 2</option>
                            <option value="3">Regional 3</option>
                            <option value="4">Regional 4</option>
                            <option value="5">Regional 5</option>
                            <option value="6">Regional 6</option>
                            <option value="6">Regional 7</option>
                        </FormControl>
                    </FormGroup>
                    <FormGroup controlId="sector">
                        <ControlLabel>Setor</ControlLabel>
                        <FormControl componentClass="select" placeholder="select">
                            <option value="outro">Outro...</option>
                        </FormControl>
                    </FormGroup>
                    {/* <FormGroup controlId="new-sector">
                        <ControlLabel>Insira aqui o nome do seu Setor</ControlLabel>
                        <FormControl type="text" placeholder="Aparecida"/>
                    </FormGroup> */}
                    <FormGroup controlId="team">
                        <ControlLabel>Equipe</ControlLabel>
                        <FormControl componentClass="select" placeholder="select">
                            <option value="outra">Outra...</option>
                        </FormControl>
                    </FormGroup>
                    {/* <FormGroup controlId="new-team">
                    <   ControlLabel>Insira aqui o nome da sua equipe</ControlLabel>
                        <FormControl type="text" placeholder="Fátima"/>
                    </FormGroup> */}
                    <Button type="submit" bsSize="small" bsStyle="success">Gravar</Button>
                </form>
            </Session>
      );
    }
  }
  
  export default NewTeamForm;