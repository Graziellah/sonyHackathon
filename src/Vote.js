import React , { Component } from 'react';
import { Icon, } from 'semantic-ui-react';

export default class Vote extends Component {
    constructor(props){
      super(props);
      this.state = {
        step:1,
        }
    }

    render(){
        return(
           <div>
               VOTE PAGE
           </div>
        )
      
    }
}