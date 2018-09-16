import * as React from "react";
import './landing.css';

export default class Landing extends React.Component {

    render () {
        return (
            <div className={"mainNav"}>
                <ul>
                    <li>Home</li>
                    <li>Reports</li>
                    <li>Contact</li>
                </ul>
                <div className={"content"}>

                </div>
            </div>
        );
    }
}
