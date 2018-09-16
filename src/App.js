import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import './App.css';
import Landing from '../src/components/Landing';
import Navbar from '../src/components/Navbar';
import Contact from '../src/components/contact';
import searchCard from './components/search-card/search-card';


class App extends Component {
  render() {
    return (
        <BrowserRouter>
        <div>
        <Navbar/>
        <Switch>
            <Route exact path="/" component={Landing}/>
            <Route exact path="/card" component={searchCard}/>
            <Route exact path="/contact" component={Contact}/>
         </Switch>
        </div>
        </BrowserRouter>
    );
  }
}

export default App;
