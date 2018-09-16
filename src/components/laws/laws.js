import React, {Component} from 'react';
import Cites from './cites';

class Laws extends Component{
    render(){
        return(
            <div className="laws">
            <ul class="nav nav-tabs">
        <li class="nav-item">
            <a class="nav-link active" href="/cites">CITES Laws</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="!#">Local Laws</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="!#">Overview</a>
        </li>
        </ul>
        <div>
            <Cites/>
        </div>
            </div>
        );
    }
}
export default Laws;