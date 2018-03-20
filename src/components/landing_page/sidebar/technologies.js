import React, { Component } from 'react';
import {Rating, List, Divider, Grid, Card, Container} from 'semantic-ui-react'

function Technology(props){
    return(
        <div>
            <link rel="stylesheet" href="https://cdn.rawgit.com/konpa/devicon/df6431e323547add1b4cf45992913f15286456d3/devicon.min.css"/>
            <Grid>
                <Grid.Column width = {4}>
                <h1><i class={props.icon}/></h1>
                </Grid.Column>
                <Grid.Column floated='left' width = {12}>
                    <Container textAlign='left'>
                        <b> {props.name} </b>  <br/>
                        <Rating icon='star' defaultRating={props.rating} maxRating={5} size='small' disabled />
                        {props.status}
                    </Container>
                </Grid.Column>
            </Grid>
        </div>
    );
}

class Technologies extends Component {
    render() {
        return (
            <div>
                <List>
                    <Technology name='Python' rating={5} status='Experienced' icon='devicon-python-plain'/>
                    <Divider />
                    <Technology name='NodeJS' rating={4} status='Intermediate' icon='devicon-nodejs-plain'/>
                    <Divider />
                    <Technology name='C' rating={4} status='Intermediate' icon='devicon-c-plain'/>
                    <Divider />
                    <Technology name='Java' rating={4} status='Intermediate' icon='devicon-java-plain'/>
                    <Divider />
                    <Technology name='Bash' rating={4} status='Intermediate' icon='devicon-linux-plain'/>
                    <Divider />
                    <Technology name='Azure' rating={4} status='Intermediate' icon='devicon-windows8-plain'/>
                    <Divider />
                    <Technology name='SQL' rating={4} status='Intermediate' icon='devicon-mysql-plain'/>
                    <Divider />
                    <Technology name='Docker' rating={3} status='Beginner' icon='devicon-docker-plain'/>
                    <Divider />
                    <Technology name='C++' rating={3} status='Beginner' icon='devicon-cplusplus-plain'/>
                    <Divider />
                    <Technology name='Swift' rating={3} status='Beginner' icon='devicon-swift-plain'/>
                    <Divider />
                    
                    <Card.Content extra> 
                        Stars represent relative proficiency
                    </Card.Content>
                </List>
            </div>
        );
    }
}

export default Technologies