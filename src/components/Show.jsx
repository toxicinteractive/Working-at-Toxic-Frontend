'use strict';
import React from "react";
import ShowHoverInfo from "./ShowHoverInfo";
import ShowDetails from "./ShowDetails";

export default class Show extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isHovered: false,
            expanded: false
        }
    }

    imagePath = () => {
        const baseUrl = 'https://www.themoviedb.org/t/p/w220_and_h330_face/';
        const fullUrl = `${baseUrl}${this.props.show.poster_path}`;
        return fullUrl;
    }

    onMouseEnter = () => {
        this.setState({ isHovered: true })
    }

    onMouseLeave = () => {
        this.setState({ isHovered: false });
    }

    handleClick = () => {
        console.log(this.props.show);
        this.props.expandShow(this.props.show)
    }

    render() {
        return (
            <>
                {this.state.expanded? <ShowDetails id={this.props.show.id} />: <></>}

                <div className="show" onMouseEnter={this.onMouseEnter.bind(this)} onMouseLeave={this.onMouseLeave.bind(this)} onClick={this.handleClick}>
                    <h5>{this.props.show.name}</h5>
                    {this.state.isHovered ? <ShowHoverInfo rating={this.props.show.vote_average} /> : <></>}
                    <img className='show-thumbnail' src={this.imagePath()} alt="ShowThumbnail"></img>
                    <p>{this.props.show.first_air_date}</p>
                </div>
            </>
        )
    }
}