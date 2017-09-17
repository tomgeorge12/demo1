import React, { Component } from 'react';
import $ from 'jquery';
import 'bootstrap/dist/css/bootstrap.css';
import './home.styles.css';
import Card from '../../components/common/card/card.js';

class Home extends Component {
  constructor(props){
    super(props);
    this.state = {
      cardData:{}
    }
    // this.cardData = {};
  }

  componentWillMount(){
      let self = this;
      $.getJSON('http://localhost:8282/getCardData',(data)=>{
        // self.cardData = data;
        // let arr=Object.keys(data).map((k)=>data[k]);
          self.setState({cardData:data});
        // console.log(self.cardData);
      });
    }

  render() {
    return (
      <div className='home-container'>
        <div className="header" />
        <table className="tableMain">
          <tbody>
            <Card cardData={this.state.cardData}/>
          </tbody>
        </table>
      </div>
    );
  }
}

export default Home;
