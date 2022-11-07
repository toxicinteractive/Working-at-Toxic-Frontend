'use strict';
import React from "react";

export default class Show extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return(
            <div className="show">
                <h5>{this.props.name}</h5>
                <img src={this.props.image} alt="ShowThumbnail"></img>
            </div>
        )
    }
}