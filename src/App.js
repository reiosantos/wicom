import React, { Component } from 'react';
import './App.css';
import SearchBar from "./components/search-bar/search-bar";
import FilterPop from "./components/filter-pop/filter-pop";
import Header from "./components/header/header";
import SearchCard from "./components/search-card/search-card";

class App extends Component {
  render() {
    return (
        <div className={"container"}>
            <section>
                <Header/>
                <SearchBar/>
                <FilterPop/>
            </section>
            <div className={"search-cards"}>
                <SearchCard/>
                <SearchCard/>
                <SearchCard/>
                <SearchCard/>
                <SearchCard/>
                <SearchCard/>
                <SearchCard/>
                <SearchCard/>
                <SearchCard/>

            </div>
        </div>
    );
  }
}

export default App;
