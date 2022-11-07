'use strict';
import React from "react";
import getShows, { getByPopularity } from "../domain/data";
import Show from "./Show";

export default class MovieList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            list: [],
            filteredList: []
        }
    }

    async componentDidMount() {
        const response = await getByPopularity();
        const list = await response.results;
        this.setState({ list: list });
    }

    async getList() {
        const response = await getByPopularity();
        const result = await response.results;
        return result;
    }

    updateFiltering = (e) => {
        this.setState({ filtering: e.target })
    }

    render() {
        return (
            <>
                <div className='filter-container'>
                    <input placeholder='Filter by name...' onChange={this.updateFiltering.bind(this)}></input>
                </div>
                <div className='show-list'>
                    {this.state.list.length > 0 ? <>{this.state.list.map((show) => { return (<Show name={show.name} image={show.poster_path} key={show.id} />) })}</> : <></>}
                </div>
            </>
        )
    }
}