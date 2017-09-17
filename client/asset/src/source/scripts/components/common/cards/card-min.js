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
        <div className={this.props.className ? this.props.className :'card-min'}>
          {this.props.title}
          {this.props.image && <img src={this.props.image} width={this.props.width} height={this.props.height}/>}
        </div>
    );
  }
}

export default CardMin;
