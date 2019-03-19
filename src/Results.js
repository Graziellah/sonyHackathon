import React , { Component } from 'react';
import { Icon, Button , Header, Card, Segment} from 'semantic-ui-react';

const roleDescriptions = [
    {
        role:'Directeur artistique',
        icon:'music',
        text:"Tu sais dénicher des talents.",
        evaluation:[
            <div>
                <Icon name='music' disabled={false}/>
                <Icon name='music' disabled={false}/>
                <Icon name='music' disabled={false}/>
              
            </div>
        ]
    },
    {
        role:'Audience developer',
        icon:'instagram',
        text:"Tu sais mettre en valeur ton artiste.",
        evaluation:[
            <div>
                <Icon name='instagram' disabled={false}/>
                <Icon name='instagram' disabled={true}/>
                <Icon name='instagram' disabled={true}/>
            </div>
        ]
    },
    {
        role:'Marketing',
        icon:'chart pie',
        text:"Tu sais mettre en place des stratégies.",
        evaluation: [
            <div>
                <Icon name='chart pie' disabled={false}/>
                <Icon name='chart pie' disabled={true}/>
                <Icon name='chart pie' disabled={true}/>
            </div>
        ]
    }
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
               <Header> Voici les résulats du test de personnalité.</Header>
                <Icon name='people'/>
                <Segment>
                    <Card.Group centered>
                        {
                            roleDescriptions.map((elem, key) =>{
                                return (
                                    <Card>
                                        <Card.Content>
                                            <Icon name={elem.icon}/>
                                            <Card.Header>{elem.role}</Card.Header><br />
                                            <Card.Description>
                                                {elem.text}
                                            </Card.Description>
                                            </Card.Content>
                                            <Card.Content extra centered>
                                            <div className='ui two buttons' style={{textAlign:'center'}}>
                                               {elem.evaluation}
                                            </div>
                                        </Card.Content>
                                    </Card>
                                )
                            })
                        }
                       
                    </Card.Group>
                </Segment>
                <div>
                    Avez-vous une team? <br/><br/>   
                    <Button onClick={()=>{this.props.history.push('/select')}}>Oui</Button> 
                    <Button onClick={()=>{this.props.history.push('/forum')}}>Non</Button>
                </div>
            </div>
        )
      
    }
}