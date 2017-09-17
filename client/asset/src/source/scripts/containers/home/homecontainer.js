import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './home.styles.css';
import Card from '../../components/common/card/card.js';

class Home extends Component {
  constructor(props){
    super(props);
    this.state = {}
    this.cardData = [
      {className:'col-md-2', title:"Home"},
      {className:'col-md-1 ', title:"Activities"},
      {className:'col-md-1', title:"Liturgy"},
      {className:'col-md-3', title:"Sacraments"},
      {className:'col-md-1', title:"Pastoral"},
      {className:'col-md-4', title:"Pastoral Team"},
      {className:'col-md-3', title:"News"},
      {className:'col-md-2', title:"Parish Office"},
      {className:'col-md-2', title:"Alter boys"},
      {className:'col-md-1', title:"Church choir"},
      {className:'col-md-4', title:"CML"},
      {className:'col-md-1', title:"KCYM"},
      {className:'col-md-2', title:"SMMA"},
      {className:'col-md-1', title:"Vincent DePaul"},
      {className:'col-md-2', title:"Caritas"},
      {className:'col-md-4', title:"Mediatek"},
      {className:'col-md-1', title:"Parish Council"},
      {className:'col-md-1', title:"Trustees"},
      {className:'col-md-4', title:"Catechism"},
      {className:'col-md-2', title:"Social Projects"},
      {className:'col-md-2', title:"Ecuminism"},
      {className:'col-md-1', title:"Inter religious forum"},
      {className:'col-md-3', title:"Cultural Forum"},
      {className:'col-md-2', title:"Sports Club"},
      {className:'col-md-1', title:"Holy ChildHood"},
      {className:'col-md-1', title:"Family Units"},
      {className:'col-md-1', title:"SWS"},
      {className:'col-md-2', title:"DFC"},
      {className:'col-md-3', title:"AKCC"},
      {className:'col-md-2', title:"MadyaVirudhaSamithi"},
    ]
  }

  render() {
    return (
      <div className='home-container'>
        <div className="header" />
        <Card cardData={this.cardData}/>
      </div>
    );
  }
}

export default Home;
