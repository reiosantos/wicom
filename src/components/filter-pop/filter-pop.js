import * as React from "react";
import "./filter-pop.css";

export default class FilterPop extends React.Component{
    render() {
        return (
            <div className={"filter-pop"}>
                <ul>
                    <li>Mammals</li>
                    <li>Amphibians</li>
                    <li>Repetiles</li>
                </ul>
            </div>
        );
    }
}