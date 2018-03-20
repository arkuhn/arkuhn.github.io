import React, { Component } from 'react';
import { Grid, Container } from 'semantic-ui-react'

function Occurance(props){
    return(
        <div>
            <Grid>
                <Grid.Column color='teal'>
                    <Container textAlign={props.align}>
                        <h1> {props.name} </h1>
                        <h3> ({props.date}) </h3>
                        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa strong. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede link mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi.</p>
                        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa strong. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede link mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi.</p>
                    </Container>
                </Grid.Column>
            </Grid>
        </div>
    );
}

class Experience extends Component {
    render() {
        return (
            <div> 
                <h1> Experience </h1>
            <Grid divided centered columns='equal'>
                <Grid.Column width={8}>
                    <Grid.Row>
                        <Occurance name='UTC' align='left' date='Jan 2017 - Current'/>
                    </Grid.Row>

                    <Grid.Row>
                        <Occurance name='UTC' align='right' date='Jan 2017 - Current'/>
                    </Grid.Row>
                </Grid.Column>
            </Grid>  
            </div>
        )
    }
}

export default Experience