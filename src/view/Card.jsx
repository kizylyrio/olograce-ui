import React, { Component } from 'react';
import './Card.css';

class Card extends Component {
    render() {
      return (
        <div className="Card">
            <div className="Card-header">
                Title
            </div>
            <div className="Card-content">Text</div>
        </div>
      );
    }
  }
  
  export default Card;