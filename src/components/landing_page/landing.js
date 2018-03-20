import React, { Component } from 'react';
import Sidebar from './sidebar/sidebar'
import Bio from './bio'
import Twitter from './twitter'
import { Grid, Divider} from 'semantic-ui-react'

class Landing extends Component {
    render() {
        return (
            <div>
                <Grid columns={2}>
                    <Grid.Column width={12}>
                            <Bio />
                            <Divider />
                            <Twitter />

                    </Grid.Column>

                    <Grid.Column width={4}>
                        <Sidebar />
                    </Grid.Column>

                </Grid>
            </div>
        )
    }
}

export default Landing