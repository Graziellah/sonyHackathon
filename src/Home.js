import React , { Component } from 'react';
import { Button, Segment, Grid, Header, Icon, Input, Divider } from 'semantic-ui-react'

const fields = [
    'Nom',
    'Prénom',
    'Age',
    'Adresse',
    'Code postal',
]

export default class Home extends Component {
    constructor(props){
      super(props);
      this.state = {
        list: []
      }
    }
    render(){  
        console.log('this.props.history', this.props) 
        return(
            <div class="home">
               <Segment placeholder>
                <Grid columns={2} stackable textAlign='center'>
                    <Divider vertical>Or</Divider>

                    <Grid.Row verticalAlign='middle'>
                        <Grid.Column>
                            <Header icon>
                            <Input placeholder='email'/>
                            <Input placeholder='mot de passe'/>
                            </Header>
                            <br/>
                            <Button primary onClick={()=>{this.props.history.push('/form')}}>Se connecter</Button>

                        </Grid.Column>

                        <Grid.Column>
                            <Header icon>
                            <Icon name='signup' />
                      
                            </Header>
                            <br/><br/><br/>
                            <Button primary onClick={()=>{this.props.history.push('/form')}}>Créer un compte</Button>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
                </Segment>
            </div>
        )
    }
}