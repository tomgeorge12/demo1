import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './cards.styles.css';

class CardMin extends Component {
  constructor(props){
    super(props);
    this.state = {}
  }

  render() {
    return (
        <div className='card-min'>
          {this.props.title}
        </div>
    );
  }
}

export default CardMin;
