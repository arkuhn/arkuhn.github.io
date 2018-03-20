import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react'

class Tools extends Component {
    render() {
        return (
            <div> 
                <h1> Tools </h1>
            <Grid divided columns='equal'>
            <Grid.Column />
            <Grid.Column width={7}>
                test
            </Grid.Column>
            <Grid.Column />
            </Grid>  
            </div>
        )
    }
}

export default Tools