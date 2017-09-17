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
    _content.push(<tr>
              {_.map(this.props.cardData.section1,(data)=>{
                  return(
                      <td className="row">
                        <CardMin title={data.title}/>
                      </td>
                  )
                })}
              {_.map(this.props.cardData.section2,(data)=>{
                return(
                    <td rowSpan='2'>
                      <CardMin className={data.className} title={data.title}/>
                    </td>
                )
              })}
              {_.map(this.props.cardData.section3,(data)=>{
                return(
                    <td >
                      <CardMin title={data.title}/>
                    </td>
                )
              })}
        </tr>);
      _content.push(<tr>
        {_.map(this.props.cardData.section4,(data)=>{
            return(
                <td>
                  <CardMin title={data.title}/>
                </td>
            )
          })}
        </tr>);
        _content.push(<tr>
                  {_.map(this.props.cardData.section5,(data)=>{
                      return(
                          <td colSpan='2'>
                            <CardMin title={data.title}/>
                          </td>
                      )
                    })}
                  {_.map(this.props.cardData.section6,(data)=>{
                    return(
                        <td >
                          <CardMin title={data.title}/>
                        </td>
                    )
                  })}
                  {_.map(this.props.cardData.section7,(data)=>{
                    return(
                        <td colSpan='3'>
                          <CardMin title={data.title}/>
                        </td>
                    )
                  })}
                  {_.map(this.props.cardData.section8,(data)=>{
                    return(
                        <td >
                          <CardMin title={data.title}/>
                        </td>
                    )
                  })}
            </tr>);

        _content.push(<tr>
                  {_.map(this.props.cardData.section9,(data)=>{
                      return(
                          <td>
                            <CardMin title={data.title}/>
                          </td>
                      )
                    })}
                  {_.map(this.props.cardData.section10,(data)=>{
                    return(
                        <td colSpan='2'>
                          <CardMin title={data.title}/>
                        </td>
                    )
                  })}
            </tr>);

        _content.push(<tr>
                  {_.map(this.props.cardData.section11,(data)=>{
                      return(
                          <td colSpan='3'>
                            <CardMin title={data.title}/>
                          </td>
                      )
                    })}
                  {_.map(this.props.cardData.section12,(data)=>{
                    return(
                        <td >
                          <CardMin title={data.title}/>
                        </td>
                    )
                  })}
                  {_.map(this.props.cardData.section13,(data)=>{
                    return(
                        <td colSpan='3'>
                          <CardMin title={data.title}/>
                        </td>
                    )
                  })}
                  {_.map(this.props.cardData.section14,(data)=>{
                    return(
                        <td >
                          <CardMin title={data.title}/>
                        </td>
                    )
                  })}
            </tr>);
    return _content;
  }

  render() {
    return (
        <tr className='columns'>
          {this.getCards()}
        </tr>
    );
  }
}

export default Card;
