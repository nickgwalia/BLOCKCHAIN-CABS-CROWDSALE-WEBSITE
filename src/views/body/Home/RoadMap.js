import React, { Component } from 'react'
import '../../../sass/RoadMap.css'
import Ionicon from 'react-ionicons'

export default class RoadMapSection extends Component {
  render() {
    return (
      <div className="__RoadMap">
         <div className="container">
            <label>Roadmap</label>
            <div className="__actualRoadmap">
               <div className="__map1">
                   <ul>
                       <li>
                           <div className="__textBlock">
                             Idea Creation
                             <span className="_date">
                             <span className="__icon"><Ionicon color="white" icon="md-calendar" fontSize="15px"/></span>
                             August 2018</span>
                           </div>
                        </li>
                       <li>
                           <div className="__textBlock">
                           Concept Development
                           <span className="_date">
                           <span className="__icon"><Ionicon color="white" icon="md-calendar" fontSize="15px"/></span>
                           August 2018</span>
                           </div>
                       </li>
                       <li>
                           <div className="__textBlock">
                           Website Launch
                           <span className="_date">
                           <span className="__icon"><Ionicon color="white" icon="md-calendar" fontSize="15px"/></span>
                           August 2018</span>
                           </div>
                       </li>
                
                       <li> 
                           <div className="__textBlock">
                           ICO
                           <span className="_date">
                           <span className="__icon"><Ionicon color="white" icon="md-calendar" fontSize="15px"/></span>
                           August 2018</span>
                           </div>
                      </li>
                      
                      <li>
                           <div className="__textBlock">
                           LH Launch
                           <span className="_date">
                           <span className="__icon"><Ionicon color="white" icon="md-calendar" fontSize="15px"/></span>
                           August 2018</span>
                           </div>
                      </li>
                      
                      <li>
                           <div className="__textBlock">
                           LaborX
                           <span className="_date">
                           <span className="__icon"><Ionicon color="white" icon="md-calendar" fontSize="15px"/></span>
                           August 2018</span>
                           </div>
                      </li>
                </ul>
               </div>
            </div>
         </div>
      </div>
    )
  }
}
