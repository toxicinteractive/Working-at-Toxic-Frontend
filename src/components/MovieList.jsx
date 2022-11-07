'use strict';
import React from "react";
import Movie from "./Movie";

export default class MovieList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            list: this.props.list
        }
    }

    componentDidMount() {
        console.log(this.state.list);
    }

    render() {
        return (
            <div className='movie-list'>
                {this.props.list ? <>{this.props.list.map((movie) => { return (<Movie name={movie.name} key={movie.id} />) })}</> : <></>}
            </div>
        )
    }
}