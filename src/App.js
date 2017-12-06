import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SearchBar from './containers/SearchBar';

class App extends Component {
    render() {
        return (
            <div className="App">
                <div className="container-fluid">
                    <SearchBar />
                </div>
            </div>
        );
    }
}

export default App;
