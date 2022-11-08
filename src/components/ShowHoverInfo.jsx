'use strict';
import React from "react";

export default class ShowHoverInfo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <div className="show-hover-info">
                <p>Rating: {this.props.rating} / 10</p>
            </div>
        )
    }
}