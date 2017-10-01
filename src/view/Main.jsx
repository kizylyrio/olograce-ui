import React, { Component } from 'react';
import Menu from './Menu'
import Card from './Card'
// import './Menu.css';

class Main extends Component {
    render() {
      return (
        <div>
          <Menu/>
          <Card/>
        </div>
      );
    }
  }
  
  export default Main;