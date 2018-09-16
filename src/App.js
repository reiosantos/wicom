import React, { Component } from 'react';
import './App.css';
import SearchBar from "./components/search-bar/search-bar";
import Header from "./components/header/header";
import SearchCard from "./components/search-card/search-card";

class App extends Component {
  render() {
    return (
        <BrowserRouter>
        <div>
        <Navbar/>
        <Switch>
            <Route exact path="/" component={Landing}/>
            <Route exact path="/contact" component={Contact}/>
         </Switch>
        </div>
        </BrowserRouter>
    );
  }
}

export default App;
