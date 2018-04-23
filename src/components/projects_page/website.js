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
                            development. Exploring ReactJS, Babel, JSX, Webpack and more. I'm currently using githubs free hosting 
                            (as you may have noticed) which means I haven't gotten to deploy any fun stuff (cool state management patterns, 
                            server side rendering) quite yet. I'm hoping to look more into this once I purchase a domain and get an express 
                            server up and running. Always a WIP!
                        </h5>
                    </Grid.Column>
                 </Grid>
            </div>
        )
    }
}

export default Website