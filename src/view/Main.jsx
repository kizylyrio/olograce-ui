import React, { Component } from 'react';
import Menu from './Menu'
import NewMemberForm from './NewMemberForm'
import NewTeamForm from './NewTeamForm'

class Main extends Component {
    render() {
      return (
        <div>
          {/* <Menu/> */}
          {/* <NewMemberForm/> */}
          <NewTeamForm/>
        </div>
      );
    }
  }
  
  export default Main;