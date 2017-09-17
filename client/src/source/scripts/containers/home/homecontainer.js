import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './home.styles.css';
import Card from '../../components/common/card/card.js';

class Home extends Component {
  constructor(props){
    super(props);
    this.state = {}
  }

  render() {
    return (
      <div className='home-container'>
        <Card />
      </div>
    );
  }
}

export default Home;
