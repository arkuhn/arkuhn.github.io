import React, { Component } from 'react';

class Contact extends Component {
    state = {}

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })
  
    render() {
        return (
            <h1>Contact</h1>
          );
    }
}

export default Contact
