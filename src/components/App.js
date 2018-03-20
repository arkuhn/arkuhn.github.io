import React, { Component } from 'react';
import '../App.css';
import Footer from './footer'
import Toolbar from './toolbar';


class App extends Component {
    render() {
        return (
            <div className="App">
                <Toolbar/>
                <Footer/>
            </div>
        );
    }
}

export default App;
