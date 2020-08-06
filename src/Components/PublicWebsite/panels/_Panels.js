import React, { Component } from 'react'
import LeftPanel from './LeftPanel'
import RightPanel from './RightPanel'

class Panels extends Component{
    render(){
        return (
            <div className="panels-container_main">
                <LeftPanel/>
                <RightPanel/>
            </div>
                )
      }
        }


export default Panels;

