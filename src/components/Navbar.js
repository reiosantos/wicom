import React, {Component} from 'react';

class Navbar extends Component{
    render(){
        return(
            <div>
            <div className="row nav">
                <h1><a style={{color: "#fff", fontSize: "16px", fontWeight: "bolder"}} href={"/"}>WICOM BY ANDELA TEAM</a></h1>
                <ul className="main-nav">
                    <li><a href="!#">Report</a></li>
                    <li><a href="/contact">Contact</a></li>
                    <li><a href="/home">Get started</a></li>
                    <li><a href="/">About</a></li>

                </ul>
                <div className="form-group col-md-4 search-bar">
    <input className="form-control" type="search" value="search" id="example-search-input"/>
        </div>
                </div>
                </div>
        );
    }
}
export default Navbar;