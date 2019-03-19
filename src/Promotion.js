import React , { Component } from 'react';
import { Grid, Menu, Segment, Image, Icon, Input} from 'semantic-ui-react'
import dashbord from './assets/dashBord.png'

export default class Promotion extends Component {
    state = { activeItem: 'dashbord' }
            

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })
    
    render() {
        const { activeItem } = this.state
    
        let displayText = null;
        switch(activeItem){
            case'dashbord':
                displayText =  <Image src={dashbord} fluid />
                break;
            case'message':
                displayText = (<div>
                        <Icon name='mail'/>
                        <h1>"SLAVERY WAS A CHOICE"</h1>
                        <iframe src="https://giphy.com/embed/CycIvRahkUp0Y" width="480" height="480" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/kanye-gotcha-CycIvRahkUp0Y">via GIPHY</a></p>
                        Vous artiste a donné une interview qui s'est mal passée.<br/><br />
                        <Icon name="reply"/>Répondre
                </div>)
                break;
            case'réseaux':
                break;
            case'comment':
                break;
            case'evaluation':
                break;
            default:
                break;
            
        }
        return (
        <Grid >
            <Grid.Column width={4}>
            <Menu fluid vertical tabular>
                <Menu.Item name='dashbord' active={activeItem === 'dashbord'} onClick={this.handleItemClick} />
                <Menu.Item name='message' active={activeItem === 'message'} onClick={this.handleItemClick} />
                <Menu.Item name='réseaux' active={activeItem === 'réseaux'} onClick={this.handleItemClick} />

                <Menu.Item
                name='comment'
                active={activeItem === 'comment'}
                onClick={this.handleItemClick}
                />
                <Menu.Item
                name='evaluation'
                active={activeItem === 'evaluation'}
                onClick={this.handleItemClick}
                />
            </Menu>
            </Grid.Column>
    
            <Grid.Column stretched width={12}>
            <Segment>
                {displayText}
            </Segment>
            </Grid.Column>
        </Grid>
        )
    }
}