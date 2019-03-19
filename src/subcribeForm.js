import React , { Component } from 'react';
import {Button, Input, Checkbox, Segment, Breadcrumb} from 'semantic-ui-react'

const fields = [
    {
        name:'Nom',
        value: 'Foule'
    },
    {
        name:'Prénom',
        value:'Valérie'
    },
    {
        name:'Age',
        value:'24'
    },
    {
        name:'Adress',
        value:'96 boulevard Bessière'
    },
    {
        name:'Code Postal',
        value:'75017'
    }
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
                <div style={{borderColor:'red', margin:'10px'}}>
                    {elem}
                </div>
            )
        })    
        
        return(
           <div style={{margin:'10px'}}>
               <h3>{question}</h3>
               <span style={{color:'green', margin:'5px'}}>D'accord</span>
               {array}
               <span style={{color:'red', margin:'5px'}}>Pas d'accord</span>
           </div>
        )
    }
    
    render(){
        const fieldsList =  fields.map((field, key) =>{
            return (
                <div key={key}>
                    {field.name}<br/>
                    <Input value={field.value}/>
                </div>
             
            )
        })
         let formToDisplay = null  
        switch(this.state.step){
            case 1:
                formToDisplay = (<div><br /><br />
                
                    {this.personalityTest('Aimes-tu le challenge?')}<br /><br />
                    {this.personalityTest('Aimes-tu la collectivité ou es-tu solitaire?')}<br /><br />
                    {this.personalityTest('Es-tu organisé ou aimes-tu travailler sous pression?')}<br /><br />
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