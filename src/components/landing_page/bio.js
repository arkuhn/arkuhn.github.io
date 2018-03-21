import React, { Component } from 'react';
import { Grid, Image, Container, Divider, List } from 'semantic-ui-react'

class Bio extends Component {
    render() {
        return (
            <div> 
                <br />
                <Grid divided='vertically' columns='equal'>
                <Grid.Row>
                    <Grid.Column width= {1}/>
                    <Grid.Column width={4}>
                        <Image src={process.env.PUBLIC_URL + 'img/profile.png'} floated='left'  size='medium' circular />
                        <List>
                            <h2><List.Item content= 'Adam Kuhn' /></h2>
                            <List.Item icon='building outline' content='United Technologies - Lenel' />
                            <List.Item icon='marker' content='Rochester, NY' />
                            <List.Item icon='marker' content='Charlotte, NC' />
                            <List.Item icon='graduation' content='Rochester Institute of Technology' />
                            <List.Item icon='mail' content={<a href='mailto:ark9719@rit.edu'>ark9719@rit.edu</a>} />
                        </List>
                    </Grid.Column>
                    <Grid.Column width={11}>
                        <Container textAlign='left'>
                            <b>Hello World!</b>
                            <Divider />
                                <p> Hey there, my name is Adam Kuhn. I got my feet wet in software development young and haven't stopped 
                                    learning since. What started as modifying and tinkering with video games has turned into pursuing a degree 
                                    in Software Engineering at Rochester Institute of Technology. I'm anticipating to graduate in spring of 2019. 
                                    I'm currently on a 'co-op rotation' for R.I.T which just means I'm doing full-time software development instead 
                                    of classes. I've got just over a year of experience working for UTC Corporation - Lenel. In my time there, 
                                    I've participated in both research and new product development. My work to date has revolved around embedded, 
                                    linux application development and dev-ops automation. This has included work with C, NodeJS, Swift, Python, 
                                    Groovy and more. In my free time, I like to work on personal projects like this website to stay up to date 
                                    with trends in software development. I'm a big proponent of agile culture, and an even bigger proponent of 
                                    good music and good coffee. Shoot me an email if you want to talk design patterns, project proposals, professional 
                                    inquiries, or any combination of the three.
                                </p>
                        </Container>
                    </Grid.Column>
                    <Grid.Column width= {1}/>
                </Grid.Row>
                </Grid>
            </div>
        )
    }
}

export default Bio