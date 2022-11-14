'use strict';
import React from "react";
import { getByPopularity } from "../domain/shows";
import Show from "./Show";

export default class MovieList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [],
            filteredList: [],
            sortByDate: true,
            filterValue: ''
        }
    }

    async componentDidMount() {
        const response = await getByPopularity();
        const list = await response.results;
        this.setState({ list: list });
        this.setState({ filteredList: list });
    }

    async getList() {
        const response = await getByPopularity();
        const result = await response.results;
        return result;
    }

    updateFiltering = (e) => {
        const filterValue = e.target.value.toLowerCase();
        this.setState({ filterValue: filterValue }, this.filterList(filterValue));
    }

    filterList = (filterValue) => {
        const listSource = [...this.state.list];

        const filteredList = listSource.map((element) => {

            if (element.name.toLowerCase().includes(filterValue))
                return element;
        });

        const resultList = filteredList.filter((x) => x !== undefined)  // Removes undefined entries

        // Lastly if Sort by most recent is checked we'll do a simple sort.
        if (this.state.sortByDate) {
            const sortByDateList = resultList.sort((a, b) => (a.first_air_date < b.first_air_date) ? 1 : -1);
            this.setState({ filteredList: sortByDateList });
        } else {
            this.setState({ filteredList: resultList });
        }
    }

    toggleDateSorting = () => {
        this.setState({ sortByDate: !this.state.sortByDate }, this.filterList(this.state.filterValue));
    }

    render() {
        return (
            <>
                <div className='filter-container'>
                    <input placeholder='Filter by name...' onChange={this.updateFiltering.bind(this)}></input>
                </div>
                <label>
                    <input type='checkbox' onChange={this.toggleDateSorting} checked={this.state.sortByDate} />
                    Sort by most recent
                </label>
                <div className='show-list'>
                    {this.state.filteredList.length > 0 ? <>{this.state.filteredList.map((show) => { return (<Show show={show} key={show.id} expandShow={this.props.expandShow} />) })}</> : <></>}
                </div>
            </>
        )
    }
}