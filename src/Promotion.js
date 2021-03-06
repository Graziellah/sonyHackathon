import React , { Component } from 'react';
import { Grid, Menu, Segment, Image, Icon, Input, Card, Feed, Button} from 'semantic-ui-react'
import dashbord from './assets/dashBord.png'
import bitmoji from './assets/IMG_1999.PNG'

const extra = (
    <a>
      <Icon name='user' />
      16 Friends
    </a>
  )
  const comment = (<div>
      Concert demain à l'accors hotel arena<br/>
      <strong>#wwf #greenPeace #genereux</strong>
  </div>)
  
  const CardExampleCardProps = () => (
    <Card
      image={bitmoji}
      header='Elliot Baker'
      meta='Friend'
      description={comment}
      extra={extra}
    />
  )

export default class Promotion extends Component {
    state = { activeItem: 'réseaux' }
            

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    componentDidMount(){
        window.scrollTo(0, 0)
    }
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
                displayText = (
                    <div>
                        {CardExampleCardProps()}
                        <Feed>
                            <Feed.Event>
                            <Feed.Content>
                                <Feed.Summary>
                                <Feed.User>Elliot Fu</Feed.User> added you as a friend
                                <Feed.Date>1 Hour Ago</Feed.Date>
                                </Feed.Summary>
                                <Feed.Meta>
                                <Feed.Like>
                                    <Icon name='like' />
                                    4 Likes
                                </Feed.Like>
                                </Feed.Meta>
                            </Feed.Content>
                            </Feed.Event>
                        </Feed>
                    </div>
                )
                break;
            case'comment':
                break;
            case'evaluation':
                displayText = <Button style={{margin:'auto'}} onClick={()=>{this.props.history.push('/vote')}}>Evaluer les autres équipes</Button>
                break;
            default:
                break;
            
        }
        return (
        <Grid >
            <Grid.Column width={4}>
            <Menu fluid vertical tabular>
                <Menu.Item name='réseaux' active={activeItem === 'réseaux'} onClick={this.handleItemClick} /><br />
                <Menu.Item name='message' active={activeItem === 'message'} onClick={this.handleItemClick} /><br />
                <Menu.Item name='dashbord' active={activeItem === 'dashbord'} onClick={this.handleItemClick} /><br />
                <Menu.Item
                name='comment'
                active={activeItem === 'comment'}
                onClick={this.handleItemClick}
                /><br />
                <Menu.Item
                name='evaluation'
                active={activeItem === 'evaluation'}
                onClick={this.handleItemClick}
                /><br />
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