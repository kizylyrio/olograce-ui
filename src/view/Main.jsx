import React, { Component } from 'react';
import Menu from './Menu'
import Card from './Card'
import Session from './Session'

class Main extends Component {
    render() {
      return (
        <div>
          <Menu/>
          <Card/>
          <Session />
        </div>
      );
    }
  }
  
  export default Main;