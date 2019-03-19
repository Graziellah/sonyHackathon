import React , { Component } from 'react';
import man from './assets/1.jpeg'
import woman from './assets/2.jpeg'
import man2 from './assets/3.jpeg'
import woman2 from './assets/4.jpeg'
import { Icon, Card, Header } from 'semantic-ui-react'

const mateList = [
    {
        nom:'annie',
        sexe:'F',
        auteur:true,
        compositeur:true,
        interprete:false,
        picture:'src',
        musique:''
    },
    {
        nom:'Marc',
        sexe:'M',
        auteur:true,
        compositeur:true,
        interprete:false,
        picture:'src',
        musique:''
    },
    {
        nom:'Paul',
        sexe:'M',
        auteur:true,
        compositeur:true,
        interprete:false,
        picture:'src',
        musique:''
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
                    <Icon name='instagram' disable={artist.auteur}/>
                    <Icon name='chart pie' disable={artist.interprete}/>
                    <Icon name='music' disable={artist.compositeur}/>

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
            return(
                <Card key={key}
                    image={isWoman ? womanUrl : manUrl}
                    header={artist.nom}
                    meta={meta}
                    description='Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat.'
                />
            )
        })
        return(
            <div>
                FORUM
                <Header>Informations envoyées par mail</Header>
                <Card.Group>
                    {displayArtist}
                </Card.Group>
            </div>
        )
      
    }
}