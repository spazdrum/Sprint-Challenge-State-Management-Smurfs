import React, { Component } from "react";
import "./App.css";
import Smurf from './smurf';
import Form from './form';
import SmurfCard from './smurfCard';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <Smurf />
        <Form />
      </div>
    );
  }
}

export default App;
