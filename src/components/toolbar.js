import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link
  } from 'react-router-dom'
import Projects from './projects_page/projects'
import Landing from './landing_page/landing'
import Contact from './contact_page/contact';
import { Menu } from 'semantic-ui-react'


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
                    
                        <Menu.Item as={Link} to="projects" name='projects' active={activeItem === 'projects'} onClick={this.handleItemClick} icon='folder open outline' position={'right'} />
                    
                        <Menu.Item as={Link} to="contact" name='contact' active={activeItem === 'contact'} onClick={this.handleItemClick} icon ='comments outline'/>
                    </Menu>

                    <Route exact path="/" component={Landing}/>
                    <Route path="/projects" component={Projects}/>
                    <Route path="/contact" component={Contact}/>
                </div>
            </Router>
        )
    }
}

export default Toolbar

