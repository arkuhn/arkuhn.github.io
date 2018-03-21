import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link
  } from 'react-router-dom'
import Projects from './projects_page/projects'
import Landing from './landing_page/landing'
import { Menu, Dropdown, Icon } from 'semantic-ui-react'


class Toolbar extends Component {
    state = { activeItem: 'home' }

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })
  
    render() {
        
        const { activeItem } = this.state
  
        return (
            <Router>
                <div>
                    <Menu size='massive' pointing secondary >
                        <Menu.Item as={Link} to="/" name='home' active={activeItem === 'home'} onClick={this.handleItemClick} position={'left'} />
                    
                        <Dropdown item text='Contact' icon ='comments outline' position={'right'}>
                            <Dropdown.Menu>
                                    <Dropdown.Item as='a' href='mailto:ark9719@rit.edu'>
                                        <Icon name='mail outline' size='small'/>
                                        ark9719@rit.edu
                                    </Dropdown.Item>
                                    <Dropdown.Item as='a' href='https://www.linkedin.com/in/adam-r-kuhn/'>
                                        <Icon  name='linkedin' size='small'/>
                                        LinkedIn
                                    </Dropdown.Item>
                                    <Dropdown.Item as='a' href='https://twitter.com/ark9719'>
                                        <Icon  name='twitter' size='small'/>
                                        Twitter
                                    </Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                        
                        <Menu.Item as={Link} to="projects" name='projects' active={activeItem === 'projects'} onClick={this.handleItemClick} icon='folder open outline' />
                    
                        
                    </Menu>

                    <Route exact path="/" component={Landing}/>
                    <Route path="/projects" component={Projects}/>
                </div>
            </Router>
        )
    }
}

export default Toolbar

