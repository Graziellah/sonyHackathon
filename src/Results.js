import React , { Component } from 'react';
import { Icon, Button , Header} from 'semantic-ui-react';

const fields = [
    'Nom',
    'Prénom',
    'Age',
    'Adresse',
    'Code postal',
]

export default class Results extends Component {
    constructor(props){
      super(props);
      this.state = {
        step:1,
        }
    }
    
    render(){
          return(
            <div>
               <Header> Vous devriez plutôt etre une DA.</Header>
                <Icon name='people'/>
                <div>
                    Avez-vous une team? <br/><br/>   
                    <Button>OUi</Button> 
                    <Button onClick={()=>{this.props.history.push('/forum')}}>Non</Button>
                </div>
            </div>
        )
      
    }
}