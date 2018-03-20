import React, { Component } from 'react';
import {Icon, List} from 'semantic-ui-react'

class Education extends Component {
    render() {
        return (
            <div>
                <List>
                    <List.Item>
                        <Icon  name='graduation' size = 'large'/>
                        <List.Content>
                            <List.Header >Rochester Institute of Technology</List.Header>
                            <List bulleted>
                                <List.Item>Software Engineering B.S.</List.Item>
                                <List.Item>Political Science Minor</List.Item>
                                <List.Item>Computer Science Minor</List.Item>
                            </List>
                        </List.Content>
                    </List.Item>
                </List>
            </div>
        );
    }
}

export default Education