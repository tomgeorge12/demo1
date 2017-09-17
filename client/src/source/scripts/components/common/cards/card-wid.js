import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './cards.styles.css';

class CardWid extends Component {
  constructor(props){
    super(props);
    this.state = {}
  }

  render() {
    return (
        <div className='card-wid'>
          {"wid"}
        </div>
    );
  }
}

export default CardWid;
