import React, { Component } from 'react';
import './Card.css';

class Card extends Component {
    render() {
      return (
        <div className="Card">
            <div className="Card-header">
              {this.props.title}
            </div>
            <div className="Card-content">
              {this.props.children}
            </div>
        </div>
      );
    }
  }
  
  export default Card;