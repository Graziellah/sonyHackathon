import React , { Component } from 'react';
import { Icon, Button, Checkbox, Segment, Header } from 'semantic-ui-react';



export default class Vote extends Component {
    constructor(props){
      super(props);
      this.evaluationQuestion = this.evaluationQuestion.bind(this)
      this.state = {
        question1: 1,
        }
    }
    evaluationQuestion = (question)=>{
        return (
            <div>
                <p style={{color:"black" , margin:'15px', textAlign:'left'}}>{question}</p>
                <Button inverted color='red'>
                Mauvais
                </Button>
                <Button inverted color='orange'>
                Moyen
                </Button>
                <Button inverted color='yellow'>
                Bon
                </Button>
                <Button inverted color='green'>
                Excellent
                </Button>
        </div>
    
        )
    }

    componentDidMount(){
        window.scrollTo(0, 0)
    }

    render(){
        return(
        <Segment.Group>
            <Segment>
                {this.evaluationQuestion("L'équipe a-t-elle utilisé tous les réseaux sociaux adéquats pour promouvoir l'artiste ?")}
                {this.evaluationQuestion("Le profil de l'artiste est-il coherent: la bio avec le look, la musique et le contenu posté sur les réseaux sociaux ?")}
                {this.evaluationQuestion("L'équipe a-t-elle fait preuve de créativité")}
                {this.evaluationQuestion("Le budget proposé est-il coherent avec la stratégie adoptée ?")}
                {this.evaluationQuestion("La bio et le contenu posté sur les réseaux sociaux ont-ils bien mis en valeur l'identité  de l'artiste, ses influences, son style, ses convictions ?")}
                {this.evaluationQuestion("Comment était la stratégie de gestion de crise de l'équipe ?")}
            </Segment>
            <Segment>
                <Header>NOTATION GLOBALE</Header>
                <Button inverted color='red'>
                    Empty work
                </Button>
                <Button inverted color='yellow'>
                OK
                </Button>
                <Button inverted color='green'>
                Jimmy Hendrix
                </Button>
            </Segment>
        </Segment.Group>
    )
    
    }
}