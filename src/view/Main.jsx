import React, { Component } from 'react';
import Menu from './Menu'
import NewMemberForm from './NewMemberForm'

class Main extends Component {
    render() {
      return (
        <div>
          <Menu/>
          <NewMemberForm/>
        </div>
      );
    }
  }
  
  export default Main;