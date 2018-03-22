import React, { Component } from 'react';
import { Image, Card, Grid } from 'semantic-ui-react'

class Website extends Component {
    render() {
        return (
            <div>
                <Grid>
                    <Grid.Column width = {3}>
                        <Card.Content>
                            <Image src={process.env.PUBLIC_URL + 'img/website.png'}  size='medium' inline  />
                        </Card.Content>
                    </Grid.Column>
                    <Grid.Column width={13}>
                        <h5> You are here! This website is an attempt to gain a better understanding of the state of modern front-end
                            development. Exploring ReactJS, Babel, JSX, Webpack and more. Always a WIP!
                        </h5>
                    </Grid.Column>
                 </Grid>
            </div>
        )
    }
}

export default Website