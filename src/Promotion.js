import React , { Component } from 'react';
import { Grid, Menu, Segment, Image, Icon} from 'semantic-ui-react'
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
                        Vous artiste à donner une interview qui s'est mal passée.
                </div>)
                break;
            case'reseaux':
                break;
            case'comment':
                break;
            case'links':
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
                <Menu.Item name='reseaux' active={activeItem === 'reseaux'} onClick={this.handleItemClick} />

                <Menu.Item
                name='comment'
                active={activeItem === 'comment'}
                onClick={this.handleItemClick}
                />
                <Menu.Item
                name='links'
                active={activeItem === 'links'}
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