import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom';
import Navbar from './component/Navbar';
import Slider from './component/Slider';
import Content from './component/Content';
import './App.css'; 

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <Slider />
        <Route path="/" component={Content} />
      </React.Fragment>
    );
  }
}

export default App;