'use strict';
import React from "react";
import ShowList from "./components/ShowList";
import ShowDetails from "./components/ShowDetails";

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            expandShow: false,
            show: null
        }
    }

    expandShow = (show) => {
        this.setState({ show: show });
        this.setState({ expandShow: true });
    }

    closeShow = () => {
        this.setState({show: null});
        this.setState({expandShow: false});
    }

    render() {
        return (
            <div className="app">
                {this.state.expandShow ? <ShowDetails show={this.state.show} returnFunction={this.closeShow.bind(this)} /> : <ShowList expandShow={this.expandShow.bind(this)} />}
            </div>
        )
    }
}