import React, { Component } from 'react';
import { Grid} from 'semantic-ui-react'
import { Tweet } from 'react-twitter-widgets'

class Twitter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tweetIDs: Array(6).fill('961943466224832512')
        };
        this.getTweetIDs = this.getTweetIDs.bind(this);
    };

    componentDidMount() {
       // var ids = this.getTweetIDs();
      //  ids.then((result)=> {
       //     this.setState({ tweetIDs: result }, () => {
       //     });
        //});
        
    };

    getTweetIDs() {
        return fetch('/twitter/tweetIDs').then((response) =>{
            return response.json();
        }).then((tweetIds) => {
            console.log(tweetIds.result)
            return tweetIds.result;
        })
    };

    render() {
        return (
            <Grid >
                <Grid.Column width={1}/>
                
                    <Grid.Column width={5}>
                
                        <Tweet tweetId={this.state.tweetIDs[0]} options={{theme:"light"}} />
                        <Tweet tweetId={this.state.tweetIDs[1]} options={{theme:"light"}} />
                    </Grid.Column>
                    
                    <Grid.Column width={5}>
                        <Tweet tweetId={this.state.tweetIDs[2]} options={{theme:"light"}} />
                        <Tweet tweetId={this.state.tweetIDs[3]} options={{theme:"light"}} />
                    </Grid.Column>
                    
                    <Grid.Column width={5}>
                        <Tweet tweetId={this.state.tweetIDs[4]} options={{theme:"light"}} />
                        <Tweet tweetId={this.state.tweetIDs[5]} options={{theme:"light"}} />
                    </Grid.Column>
            </Grid>
        );
    }
}

export default Twitter