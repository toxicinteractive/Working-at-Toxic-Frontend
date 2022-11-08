'use strict';
import React from "react";
import { getShowById } from "../domain/shows";
import List from "./List";

export default class ShowDetails extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            show: null
        }
    }

    async componentDidMount() {
        this.setState({ show: await getShowById(this.props.show.id) });
    }

    imagePath = () => {
        const baseUrl = 'https://www.themoviedb.org/t/p/w220_and_h330_face/';
        const fullUrl = `${baseUrl}${this.props.show.poster_path}`;
        return fullUrl;
    }

    render() {
        return (
            <>
                <div className='show-details'>
                    <h2>{this.state.show ? this.state.show.name : <></>}</h2>
                    <h3>{this.state.show ? this.state.show.tagline : <></>}</h3>
                    <div className='show-details-summary'>
                        <div className='show-details-info'>
                            <h5>Genre:</h5> {this.state.show ? <List list={this.state.show.genres} property='name' /> : <></>}
                            <h5>Languages:</h5> {this.state.show ? <List list={this.state.show.spoken_languages} property='english_name' /> : <></>}
                            <h5>Seasons:</h5> {this.state.show ? this.state.show.number_of_seasons : <></>}
                            <h5>Episodes:</h5> {this.state.show ? this.state.show.number_of_episodes : <></>}
                            <h5>Networks:</h5> {this.state.show ? <List list={this.state.show.networks} property='name' /> : <></>}
                        </div>
                        <img src={this.imagePath()} className='show-details-thumbnail'></img>
                    </div>
                    <div className='show-details-overview'>{this.state.show ? this.state.show.overview : <></>}</div>
                </div>

                <button className='show-details-back-button' onClick={this.props.returnFunction}>Back to TV Shows</button>

                <div className='void'></div>
            </>
        )
    }
}