import * as React from "react";
import "./search-card.css";


class SearchCard extends React.Component{

    render () {
        return (
            <div className={"card z-depth-3"}>
                <div className={"card-content"}>
                    <img src={"https://material-ui.com/static/images/cards/contemplative-reptile.jpg"} alt="card" width={200} />

                </div>
                <div className={"card-content text"}>
                    <p>Cattle: Cow</p>
                    <h5>Cites Global Laws: This </h5>
                </div>

            </div>
        );
    }
}

export default SearchCard;