import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './cards.styles.css';

class CardLen extends Component {
  constructor(props){
    super(props);
    this.state = {}
  }

  render() {
    return (
        <div className='card-len'>
        {"len"}
        </div>
    );
  }
}

export default CardLen;
<img className='img card-len' src='./images/mother.jpg' />
