'use strict';
import React from "react";
import { getShowById } from "../domain/shows";
import ShowHoverInfo from "./ShowHoverInfo";

export default class Show extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isHovered: false
        }
    }

    imagePath = () => {
        const baseUrl = 'https://www.themoviedb.org/t/p/w220_and_h330_face/';
        const fullUrl = `${baseUrl}${this.props.image}`;
        return fullUrl;
    }

    onMouseEnter = () => {
        this.setState({ isHovered: true })
    }

    onMouseLeave = () => {
        this.setState({ isHovered: false });
    }

    render() {
        return (
            <>
               
                <div className="show" onMouseEnter={this.onMouseEnter.bind(this)} onMouseLeave={this.onMouseLeave.bind(this)}>
                    <h5>{this.props.name}</h5>
                    {this.state.isHovered ? <ShowHoverInfo rating={this.props.rating}/> : <></>}
                    <img className='show-thumbnail' src={this.imagePath()} alt="ShowThumbnail"></img>
                    
                </div>
            </>

        )
    }
}