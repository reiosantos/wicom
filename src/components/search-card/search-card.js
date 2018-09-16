import * as React from "react";
import "./search-card.css";


class SearchCard extends React.Component{

    render () {
        return (
                    <div className="row z-depth-3">

                            <div className="col-sm-4 ">
                                <img src={this.props.image} />
                            </div>
                            <div className="col-sm-8">
                                <h5 >{this.props.name}</h5>
                                <p >What common names are available?:  <span>Enjovu</span></p>
                                <p >What sites says?: <span>Only the population of Kidepo is included in the allowed zones
                                    . No other population is included</span> </p>
                                <p >Is it legal in {this.props.location} ?: <span>On a very minimal scale</span></p>
                                <p >Certification documents.: <a href={""}>document 1</a> <a href={""}>document 2</a> </p>
                                <span><i className={"code"} style={{backgroundColor: this.props.color}}></i> {this.props.status}</span>
                                <h5>Other legal countries: </h5>
                                <ol>
                                    <li>Kenya</li>
                                    <li>Mexico</li>
                                    <li>DR. Congo</li>
                                </ol>

                                <a href="" className="btn btn-primary">Learn More...</a>
                            </div>

                    </div>



        );
    }
}


export default SearchCard;