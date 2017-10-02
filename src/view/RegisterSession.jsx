import React, { Component } from 'react';
import Session from './custom-component/Session'
import PPVForm from './RegisterForm'

class RegisterSession extends Component {
    render() {
      return (
        <div>
            <div className="Session">
                <div className="Session-title">
                    Cadastro
                </div>
                <div className="Session-content">
                <PPVForm/>
                </div>
            </div>          
        </div>
      );
    }
  }
  
  export default RegisterSession;