import * as React from "react";
import "./search-bar.css";

export default class SearchBar extends React.Component{
    render() {
        return (
            <div className={"search"}>
                <input type={"text"} placeholder={"search animal"} />
                <div className={"buttons"}>
                    <button >Class</button>
                    <button>Types</button>
                </div>
            </div>
        );
    }
}