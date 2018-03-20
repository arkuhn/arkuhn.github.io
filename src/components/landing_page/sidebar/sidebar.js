import React, { Component } from 'react';
import Education from './education'
import Technologies from './technologies'
import { Grid, Card } from 'semantic-ui-react'

function Blurb(props){
    return(
        <div>
            <Grid>
                <Grid.Column >
                    <Card raised={true}>
                        <Card.Content>
                            <Card.Header>
                                {props.name}
                            </Card.Header>
                            <Card.Meta>
                                {props.meta}
                            </Card.Meta>
                            <Card.Description>
                                {props.card}
                            </Card.Description>
                        </Card.Content>
                    </Card>
                </Grid.Column>
            </Grid>
            <br/><br/>
        </div>
    );
}

class Info extends Component {
    state = {}

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })
  
    render() {
  
        return (
            <div>
                <br/><br/>
                <Grid centered columns='equal'>
                        <Blurb name='Education' meta='2014-2019 (Expected)' icon='browser' info='Major: Software Engineering test \n test' card={<Education />}/>
                        
                        <Blurb name='Technologies' meta='Full Stack Developer' icon='browser' info='Major: Software Engineering test \n test' card={<Technologies />}/>

                </Grid>
                <br/><br/><br/>

 
            </div>
        )
    }
}

export default Info
