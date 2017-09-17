import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './card.styles.css';
import CardMin from '../cards/card-min.js';
import CardMed from '../cards/card-med.js';
import CardLen from '../cards/card-len.js';
import CardWid from '../cards/card-wid.js';
// import CardLen from '../cards/card-len.js';

class  Card extends Component {
  constructor(props){
    super(props);
    this.state = {}
  }

  render() {
    return (
        <div className='columns'>
        <CardMin />
        <CardMin />
        <CardLen />
        <CardMed />
        <CardMed />
        <CardWid />
        </div>
    );
  }
}

export default Card;
