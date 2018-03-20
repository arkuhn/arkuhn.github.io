import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react'


class Footer extends Component {
    state = {}

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })
  
    render() {
        const { activeItem } = this.state
  
        return (
            <div>
                <br/><br/>
                <Menu borderless={ true } compact = { true }>
                    <Menu.Item content='Adam Kuhn | 2017 | v0.0.1' name='copyright' active={activeItem === 'copyright'} position={'left'} />
                    <Menu.Item href="https://github.com/arkuhn" content= 'Github' name='github' onClick={this.handleItemClick} position={'right'} icon='github'/>
                    <Menu.Item href="https://www.linkedin.com/in/adam-r-kuhn/" content= 'LinkedIn' name='linkedIn' onClick={this.handleItemClick} icon='linkedin' />
                    <Menu.Item href="https://twitter.com/ark9719" content= 'Twitter' name='twitter' onClick={this.handleItemClick} icon='twitter'/>
                </Menu>
                <h5> Open Source - Built with React and Semantic UI! </h5>
            </div>
        )
    }
}

export default Footer
