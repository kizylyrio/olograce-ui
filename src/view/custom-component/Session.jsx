import React, { Component } from 'react';
import './Session.css';

class Session extends Component {
    render() {
      return (
        <div className="Session">
            <div className="Session-title">
              {this.props.title}
            </div>
            <div className="Session-content">
              {this.props.children}
            </div>
        </div>
      );
    }
  }
  
  export default Session;