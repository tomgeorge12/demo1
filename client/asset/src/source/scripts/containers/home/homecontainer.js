import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './home.styles.css';
import Card from '../../components/common/card/card.js';

class Home extends Component {
  constructor(props){
    super(props);
    this.state = {}
    this.cardData = {
      // row1
      "section1":[
        {className:'col-md-2', title:"Home"},
        {className:'col-md-1 ', title:"Activities"},
        {className:'col-md-1', title:"Liturgy"},
        {className:'col-md-3', title:"Sacraments"},
        {className:'col-md-1', title:"Pastoral"}
      ],
      "section2":[
        {className:'cardDouble', title:"Pastoral Team"}
      ],
      "section3":[
        {className:'col-md-3', title:"News"},
        {className:'col-md-2', title:"Parish Office"}
      ],
      // row2
      "section4":[
        {className:'col-md-2', title:"Alter boys"},
        {className:'col-md-1', title:"Church choir"},
        {className:'col-md-4', title:"CML"},
        {className:'col-md-1', title:"KCYM"},
        {className:'col-md-2', title:"SMMA"},
        {className:'col-md-1', title:"Vincent DePaul"},
        {className:'col-md-2', title:"Caritas"}
      ],
      // row3
      "section5":[
        {className:'col-md-4', title:"Mediatek"}
      ],
      "section6":[
        {className:'col-md-1', title:"Parish Council"},
        {className:'col-md-1', title:"Trustees"}
      ],
      "section7":[
        {className:'col-md-4', title:"Catechism"}
      ],
      "section8":[
        {className:'col-md-2', title:"Social Projects"},
      ],
      // row4
      "section9":[
        {className:'col-md-2', title:"Ecuminism"},
        {className:'col-md-1', title:"Inter religious forum"},
        {className:'col-md-3', title:"Cultural Forum"},
        {className:'col-md-2', title:"Sports Club"}
      ],
      "section10":[
        {className:'col-md-1', title:"Holy ChildHood"},
        {className:'col-md-1', title:"Family Units"}
      ],
      // row5
      "section11":[
        {className:'col-md-1', title:"SWS"}
      ],
      "section12":[
        {className:'col-md-2', title:"DFC"}
      ],
      "section13":[
        {className:'col-md-3', title:"AKCC"}
      ],
      "section14":[
        {className:'col-md-2', title:"MadyaVirudhaSamithi"}
      ]
    }
  }

  render() {
    return (
      <div className='home-container'>
        <div className="header" />
        <table className="tableMain">
          <tbody>
            <Card cardData={this.cardData}/>
          </tbody>
        </table>
      </div>
    );
  }
}

export default Home;
