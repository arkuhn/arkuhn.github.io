import React, { Component } from 'react';
import { Image, Card, Grid } from 'semantic-ui-react'

class Classifier extends Component {
    render() {
        return (
            <div>
                <Grid>
                    <Grid.Column width = {3}>
                        <Card.Content>
                            <Image src={process.env.PUBLIC_URL + 'img/no_cheating1.jpeg'}  size='medium' inline  />
                        </Card.Content>
                    </Grid.Column>
                    <Grid.Column width={9}>
                        <h5> 
                            Can you tell which of these x-rays is of a person with pneumonia? What about without? My classifier can
                           (~77% of the time)! One of my personal interests is medical applications of machine learning. While I'm
                           particularly interested in neuro-linguistic programming techniques, I thought I'd try my hand at introductory
                           image classifying. This project utilizes convolutional neural networking. More on my github!
                        </h5>
                    </Grid.Column>
                    <Grid.Column width = {3}>
                        <Card.Content>
                            <Image src={process.env.PUBLIC_URL + 'img/no_cheating2.jpeg'}  size='medium' inline  />
                        </Card.Content>
                    </Grid.Column>
                 </Grid>
            </div>
        )
    }
}

export default Classifier