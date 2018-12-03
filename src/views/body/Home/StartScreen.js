import React, { Component } from 'react'

import '../../../sass/startscreen.css';
import mobo from '../../../static/assets/images/phone.png'

export class StartScreen extends Component {
    constructor(props)
    {
        super(props)
        this.state = {
            tagLineHeading:this.props.tagLine
        }
    }
  render() {
    return (
      <div className="__homeFP">
          <div className="container">
             <div className="__tagline">
               <label><h1>{this.state.tagLineHeading}</h1></label>
             </div>
             <div className="__mobileView">
             <figure><img alt="iphone_blockchain" src={mobo}/></figure>
             </div>
          </div>
      </div>
    )
  }
}

export default StartScreen;
