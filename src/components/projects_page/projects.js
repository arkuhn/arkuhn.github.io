import React, { Component } from 'react';
import Website from './website'
import { Grid, Card, Icon } from 'semantic-ui-react'

function Project(props){
    return(
        <div>
            <Grid>
                <Grid.Column >
                    <Card fluid raised={true} href={props.git}>
                       
                        <Card.Content>
                            <Card.Header>
                                {props.name} {props.git ? <Icon name='github'/> : null }
                            </Card.Header>
                            <Card.Meta>
                                {props.meta}
                            </Card.Meta>
                            <Card.Description>
                                {props.card}
                            </Card.Description>
                        </Card.Content>
                        <Card.Content extra>
                            <h5> <b>Tags:</b> {props.tags}</h5>
                        </Card.Content>
                    </Card>
                </Grid.Column>
            </Grid>
            <br/><br/>
        </div>
    );
}

class Projects extends Component {
    render() {
        return (
            <div> 
             <Grid centered columns='equal'>
                <Grid.Column width={12}>
                    <Project 
                        name='Personal Website' 
                        meta='Jan 2018 - Present' 
                        card={<Website />} 
                        tags='React, SemanticUI, Express, JSX, JS' 
                        git="https://github.com/arkuhn/Personal-Site"
                    />
                    <Project 
                        name='Instant Chat Messenger' 
                        meta='Oct 2017 - Dec 2017' 
                        tags='Python, Flask, Mongo, Web Sockets' 
                        git="https://github.com/laura-king/meme-messenger"
                    />
                    <Project 
                        name='SkiFree iOS' 
                        meta='Feb 2017' 
                        tags='iOS, Swift, SpriteKit'
                        git="https://github.com/arkuhn/SkiFree-iOS"
                    />
                </Grid.Column> 
             </Grid> 
            </div>
        )
    }
}

export default Projects