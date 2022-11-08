'use strict';
import React from "react";

export default class Show extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    imagePath = () => {
        const baseUrl = 'https://www.themoviedb.org/t/p/w220_and_h330_face/';
        const fullUrl = `${baseUrl}${this.props.image}`;
        return fullUrl;
    }

    render() {
        return(
            <div className="show">
                <h5>{this.props.name}</h5>
                <img className='show-thumbnail' src={this.imagePath()} alt="ShowThumbnail"></img>
            </div>
        )
    }
}