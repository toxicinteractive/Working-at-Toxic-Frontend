'use strict';
import React from "react";
import getShows, { getByPopularity } from "./domain/data";
import shows from "./data.json"
import ShowList from "./components/ShowList";

const App = () => {

    /*   const showList = await getShows();
  
      console.log('Hello API', showList); */

    return (
        <>
            <ShowList list={shows.results} />
        </>
    )
}

export default App;