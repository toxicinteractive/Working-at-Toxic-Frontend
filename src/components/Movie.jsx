'use strict';
import React from "react";

export default class Movie extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return(
            <div className="movie">
                <h5>{this.props.name}</h5>
                <img src={Movie.poster_path} alt="MovieThumbnail"></img>
            </div>
        )
    }
}