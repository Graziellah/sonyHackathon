import React , { Component } from 'react';
import man from './assets/1.jpeg'
import woman from './assets/2.jpeg'
import man2 from './assets/M1.jpg'
import woman2 from './assets/4.jpeg'
import { Icon, Card, Header, Label, Button } from 'semantic-ui-react'
import { AST_IterationStatement } from 'terser';

const mateList = [
    {
        nom:'Annie',
        sexe:'F',
        auteur:true,
        compositeur:true,
        interprete:false,
        picture:'https://cdn.intra.42.fr/users/medium_ilarbi.jpg',
        musique:'',
        tags:[
            {   
                label:'Photoshop',
                icon:'photo'
            },
            {   
                label:'Jazz',
                icon:'music'
            },
            {   
                label:'Techno',
                icon:'music'
            },
            {  
                label:'Audiophile',
                icon:'heart'
            },
            {   
                label:'MAO',
                icon:'pencil'
            },
            {   
                label:'Visuel',
                icon:'eye'
            },
            {   
                label:'Creatif',
                icon:'paint brush'
            },
        ]
    },
    {
        nom:'Marc',
        sexe:'M',
        auteur:true,
        compositeur:true,
        interprete:false,
        picture:'https://cdn.intra.42.fr/users/medium_afrangio.jpg',
        musique:'',
        tags:[
            {   
                label:'Piano',
                icon:'photo'
            },
            {   
                label:'Guitare',
                icon:'music'
            },
            {   
                label:'Concert',
                icon:'music'
            },
            {  
                label:'Network',
                icon:'heart'
            },
            {   
                label:'MAO',
                icon:'pencil'
            },
            {   
                label:'Illustrator',
                icon:'eye'
            },
        ]
    },
    {
        nom:'Laura',
        sexe:'F',
        auteur:true,
        compositeur:true,
        interprete:false,
        picture:'https://cdn.intra.42.fr/users/medium_ghippoda.jpg',
        musique:'',
        tags:[
            {   
                label:'Créatif',
                icon:'paint brush'
            },
            {   
                label:'Visuel',
                icon:'film'
            },
            {   
                label:'Electro',
                icon:'music'
            },
            {  
                label:'Social Media',
                icon:'linkify'
            },
            {   
                label:'Marketing',
                icon:'chart'
            },
            {   
                label:'Instagram',
                icon:'instagram'
            },
        ]
    }
]

export default class Forum extends Component {
    constructor(props){
      super(props);
      this.state = {
        step:1,
        }
    }

    render(){
              
        // Button oui Modale
        // Button non Suite
        let countM = false;
        let countW = false
        const displayArtist = mateList.map((artist, key) =>{
            const isWoman = artist.sexe === 'F' 
            const meta = (
                <div>
                    sexe: {artist.sexe}
                    <Icon name={isWoman ? 'woman': 'man'} disable={artist.auteur}/><br/>
                    <div>
                        <Icon name='instagram' disabled={false}/>
                        <Icon name='instagram' disabled={false}/>
                        <Icon name='instagram' disabled={true}/>
                    </div>
                    <div>
                        <Icon name='chart pie' disabled={false}/>
                        <Icon name='chart pie' disabled={false}/>
                        <Icon name='chart pie' disabled={true}/>
                    </div>
                    <div>
                        <Icon name='music' disabled={false}/>
                        <Icon name='music' disabled={true}/>
                        <Icon name='music' disabled={true}/>
                    </div>
                </div>
            )

            let womanUrl = null
            let manUrl = null
            if(isWoman){
                womanUrl = countW ? woman : woman2
                countW = !countW
            }else{
                manUrl = countM ? man : man2
                countM = !countM

            }
            let description ='Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat.'
            if(artist.tags){
                description = artist.tags.map((tag, key)=>{
                    return (
                        <Label color='yellow' style={{margin:'5px'}}>
                            <Icon name={tag.icon}/>
                            {tag.label}
                        </Label>
                    )
                })
            }
            const contact = <div><Icon name='talk'/> Contacter {artist.nom}</div>

            return(
                <Card key={key}
                    image={artist.picture}
                    header={artist.nom}
                    meta={meta}
                    description={description}
                    extra={contact}
                />
            )
        })
        return(
            <div>
                FORUM
                <Header>Informations envoyées par mail</Header>
                <Card.Group centered>
                    {displayArtist}
                </Card.Group>
                <Button onClick={()=>{this.props.history.push('/select')}}>Groupe crée</Button>

            </div>
        )
      
    }
}