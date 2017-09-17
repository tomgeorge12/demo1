import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './card.styles.css';
import _ from 'lodash';
import CardMin from '../cards/card-min.js';
// import CardMed from '../cards/card-med.js';
// import CardLen from '../cards/card-len.js';
// import CardWid from '../cards/card-wid.js';
// import CardLen from '../cards/card-len.js';

class  Card extends Component {
  constructor(props){
    super(props);
    this.state = {}
  }

  getCards = () =>{
    let _content = [];
    _content = _.map(this.props.cardData,(item)=>{
      return (
        <div className={item.className}>
          <CardMin title={item.title}/>
        </div>
      )
    });
    return _content;
  }

  render() {
    return (
        <div className='columns'>
          {this.getCards()}
        </div>
    );
  }
}

export default Card;
