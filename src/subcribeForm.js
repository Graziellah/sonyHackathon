import React , { Component } from 'react';
import {Button, Input, Checkbox, Segment, Breadcrumb} from 'semantic-ui-react'

const fields = [
    'Nom',
    'Prénom',
    'Age',
    'Adresse',
    'Code postal',
]

export default class SuscribeForm extends Component {
    constructor(props){
      super(props);
      this.changeStep = this.changeStep.bind(this)
      this.personalityTest = this.personalityTest.bind(this)
      this.state = {
        step:1,
        }
    }

    button = (step, buttonName) =>{
        return(
            <Button onClick={(e)=>{this.changeStep(e)}} value={buttonName} name={step}>{buttonName}</Button>
        )
    }
    changeStep(e){

        const value = e.target.value
        let step = parseInt(e.target.name)
        this.setState((state, props) => {
            if(step > 0 && value && value === 'Suivant' && step < 5){
                step++
            }else if(step > 0 && value && value === 'Précédent' && step < 5){
                step--
            }
            return {step: step};
          });

    }

    personalityTest(question){
        const array  = [
            <Checkbox radio />,
            <Checkbox radio/>,
            <Checkbox radio/>,
            <Checkbox radio/>,
            <Checkbox radio/>,
            <Checkbox radio/>,
            <Checkbox radio/>,
        ]
        const displayArray = array.map((elem, key)=>{
            return(
                <div style={{borderColor:'red'}}>
                    {elem}
                </div>
            )
        })    
        
        return(
           <div>
               {question}<br/>
               <span style={{color:'green'}}>D'accord</span>
               {array}
               <span style={{color:'red'}}>Pas d'accord</span>
           </div>
        )
    }
    
    render(){
        const fieldsList =  fields.map((field, key) =>{
            return (
                <div key={key}>
                    {field}<br/>
                    <Input />
                </div>
             
            )
        })
         let formToDisplay = null  
        switch(this.state.step){
            case 1:
                formToDisplay = (<div>
                
                    {fieldsList}

                    {this.button(1, 'Précedent')}
                    {this.button(1, 'Suivant')}
                </div>)
                break;
            case 2:
                formToDisplay = (<div>
                
                Test de  personalité
                    {this.personalityTest('Pour vous, être organisé(e) est plus important qu’être flexible.')}
                    {this.personalityTest('Vous considérez votre esprit comme plus pratique que créatif.')}
                    {this.personalityTest('Votre humeur peut changer très rapidement.')}
                    {this.personalityTest('Être capable de développer un plan et de s’y tenir est la partie la plus importante de chaque projet.')}
                    {this.button(2, 'Précédent')}
                    <Button onClick={()=>{this.props.history.push('/results')}}>Résultats</Button>
                </div>)
                break;
            default:
            formToDisplay = 
            (
                <div>
                    Bye bye
                </div>
            )
            break;

        }
        const sections = [
            { key: 'Identity', content: 'Identité', link: this.state.step === 1 },
            { key: 'Personnality', content: 'Test de personnalité', link: this.state.step === 2 },
            { key: 'Results', content: 'Résultats', active: this.state.step === 3 },
        ]      
        return(
            <Segment>
                <Breadcrumb icon='right angle' sections={sections} />
               {formToDisplay} 
            </Segment>
        )         
    
      
    }
}