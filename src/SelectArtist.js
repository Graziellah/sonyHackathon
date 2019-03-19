import React , { Component } from 'react';
import {Icon, Card, CardGroup, Header, Segment} from 'semantic-ui-react'
import man from './assets/IMG_1998.PNG'
import woman from './assets/ilarbi.png'
import man2 from './assets/IMG_3205.png'
import woman2 from './assets/ilarbi2.png'

const artistList = [
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
    },
    {
        nom:'Fatima',
        sexe:'F',
        auteur:true,
        compositeur:true,
        interprete:false,
        picture:'src',
        musique:''
    },
    {
        nom:'Hiep',
        sexe:'M',
        auteur:true,
        compositeur:true,
        interprete:false,
        picture:'src',
        musique:''
    },
    {
        nom:'Boubacar',
        sexe:'M',
        auteur:true,
        compositeur:true,
        interprete:false,
        picture:'src',
        musique:''
    },
    {
        nom:'Geoffrey',
        sexe:'M',
        auteur:true,
        compositeur:true,
        interprete:false,
        picture:'src',
        musique:''
    },
    {
        nom:'Mehdi',
        sexe:'M',
        auteur:true,
        compositeur:true,
        interprete:false,
        picture:'src',
        musique:''
    },
    {
        nom:'Sonia',
        sexe:'F',
        auteur:true,
        compositeur:true,
        interprete:false,
        picture:'src',
        musique:''
    },
    {
        nom:'Petatepan',
        sexe:'M',
        auteur:true,
        compositeur:true,
        interprete:false,
        picture:'src',
        musique:''
    },
    {
        nom:'Claire',
        sexe:'F',
        auteur:true,
        compositeur:true,
        interprete:false,
        picture:'src',
        musique:''
    },
    {
        nom:'Julie',
        sexe:'F',
        auteur:true,
        compositeur:true,
        interprete:false,
        picture:'src',
        musique:''
    },
    {
        nom:'Clay',
        sexe:'M',
        auteur:true,
        compositeur:true,
        interprete:false,
        picture:'src',
        musique:''
    },
    {
        nom:'Lilou',
        sexe:'F',
        auteur:true,
        compositeur:true,
        interprete:false,
        picture:'src',
        musique:''
    },
    {
        nom:'Boris',
        sexe:'M',
        auteur:true,
        compositeur:true,
        interprete:false,
        picture:'src',
        musique:''
    },
    {
        nom:'Bryan',
        sexe:'M',
        auteur:true,
        compositeur:true,
        interprete:false,
        picture:'src',
        musique:''
    },
    {
        nom:'Moustapha',
        sexe:'M',
        auteur:true,
        compositeur:true,
        interprete:false,
        picture:'src',
        musique:''
    },
    {
        nom:'Juan',
        sexe:'M',
        auteur:true,
        compositeur:true,
        interprete:false,
        picture:'src',
        musique:''
    },
    {
        nom:'Wolvganf',
        sexe:'M',
        auteur:true,
        compositeur:true,
        interprete:false,
        picture:'src',
        musique:''
    },
    {
        nom:'Ami',
        sexe:'F',
        auteur:true,
        compositeur:true,
        interprete:false,
        picture:'src',
        musique:''
    },
    {
        nom:'Samuel',
        sexe:'M',
        auteur:true,
        compositeur:true,
        interprete:false,
        picture:'src',
        musique:''
    },

]
export default class SelectArtist extends Component {
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
        const displayArtist = artistList.map((artist, key) =>{
            const isWoman = artist.sexe === 'F' 
            const meta = (
                <div>
                    sexe: {artist.sexe}
                    <Icon name={isWoman ? 'woman': 'man'} disable={artist.auteur}/><br/>
                    <Icon name='pencil' disable={artist.auteur}/>
                    <Icon name='microphone' disable={artist.interprete}/>
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
                    onClick={()=>{this.props.history.push('/promotion')}}
                    description='Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat.'
                />
            )
        })

        return(
            <div>
                <Header>Veuillez sélectionner un artiste.</Header>
                <CardGroup centered> 
                    {displayArtist}
                </CardGroup>
            </div>
        )
      
    }
}