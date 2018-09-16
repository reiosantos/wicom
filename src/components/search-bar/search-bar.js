import * as React from "react";
import "./search-bar.css";

export default class SearchBar extends React.Component{
    render() {
        return (
            <div className={"search"}>
                <input type={"text"} placeholder={"Filter animal by:"} />
                <div className={"buttons dropdown"}>
                    <button className="btn dropdown-toggle" type="button" id="dropdownMenuButton"
                            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Country
                    </button>
                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <a className="dropdown-item" href="">Uganda</a>
                        <a className="dropdown-item" href="">Kenya</a>
                        <a className="dropdown-item" href="">DR. Congo</a>
                    </div>
                </div>

                <div className={"buttons dropdown"}>
                    <button type="button" className="btn dropdown-toggle" data-toggle="dropdown"
                            aria-haspopup="true" aria-expanded="false">
                        Species/Animal
                    </button>
                    <div className="dropdown-menu">
                        <a className="dropdown-item" href=""></a>
                        <a className="dropdown-item" href="">African Cow</a>
                        <a className="dropdown-item" href="">African Sheep</a>
                        <a className="dropdown-item" href="">Goats</a>
                        <div className="dropdown-divider"></div>
                        <a className="dropdown-item" href="">More animals...</a>
                    </div>
                </div>
            </div>
        );
    }
}