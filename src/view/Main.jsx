import React, { Component } from 'react';
import Menu from './Menu'
import RegisterSession from './RegisterSession'

class Main extends Component {
    render() {
      return (
        <div>
          <Menu/>
          <RegisterSession/>
        </div>
      );
    }
  }
  
  export default Main;