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
                <p>{this.evaluationQuestion("Réseaux sociaux ?")}</p>
                <p>{this.evaluationQuestion("Profil cohérent ?")}</p>
                <p>{this.evaluationQuestion("Créativité ?")}</p>
                <p>{this.evaluationQuestion("Budjet ?")}</p>
                <p>{this.evaluationQuestion("Influences ?")}</p>
                <p>{this.evaluationQuestion("Stratégie de l'équipe ?")}</p>
            </Segment>
            <Segment>
                <p>NOTATION GLOBALE</p>
                <Button inverted color='red'>
                    Empty work
                </Button>
                <Button inverted color='green'>
                OK
                </Button>
                <Button inverted color='green'>
                Jimmy Hendrix
                </Button>
            </Segment>
        </Segment.Group>
    )}
}