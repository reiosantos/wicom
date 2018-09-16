import React, {Component} from 'react';

class Navbar extends Component{
    render(){
        return(
            <div>
            <div className="row nav">
                <h1>WICOM BY ANDELA TEAM</h1>
                <ul class="main-nav">
                    <li><a href="!#">Report</a></li>
                    <li><a href="/contact">Contact</a></li>
                    <li><a href="/home">Get started</a></li>
                    <li><a href="/">About</a></li>

                </ul>
                <div class="form-group col-md-4 search-bar">
    <input class="form-control" type="search" value="search" id="example-search-input"/>
        </div>
                </div>
                </div>
        );
    }
}
export default Navbar;