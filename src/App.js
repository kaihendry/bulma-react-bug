import React, { Component } from 'react';
import './App.css'

class App extends Component {
  render() {
    return (
      <div className="App">
         <h1 className="title">Hello World</h1>
      <div className="tabs">
        <ul>
          <li className="is-active"><a>Pictures</a></li>
          <li><a>Music</a></li>
          <li><a>Videos</a></li>
          <li><a>Documents</a></li>
        </ul>
      </div>
      </div>
    );
  }
}

export default App;
