import React , { Component } from 'react';
import { Icon, Button , Header, Card, Segment} from 'semantic-ui-react';

const roleDescriptions = [
    {
        role:'Directerur artistique',
        icon:'music',
        text:"Si tu sais dénicher des talents, tu es ouvert d'esprit, que tu sais te mettre à la place de l'artiste.Tu sais conveincre, analyser, tu aimes participer ax concerts de tes artistes et que tu as beaucoup de contact.",
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
        text:"Tu mets en application la stratégie marketing en gérant le contenu de ton artiste sur les plateformes correspondant au public cible de ton artiste",
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
        text:"créatif, visuel, tu as beaucoup de contacts pour promouvoir l'artiste, tu suis les tendances et sais quelle stratégie adopter pour le mettre en valeur et donnes une estimation du budget et du temps nécessaires à l'accomplissement de chaque tâche.",
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
                    <Card.Group>
                        {
                            roleDescriptions.map((elem, key) =>{
                                return (
                                    <Card>
                                        <Card.Content>
                                            <Icon name={elem.icon}/>
                                            <Card.Header>{elem.role}</Card.Header>
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
                    <Button onClick={()=>{this.props.history.push('/select')}}>OUi</Button> 
                    <Button onClick={()=>{this.props.history.push('/forum')}}>Non</Button>
                </div>
            </div>
        )
      
    }
}