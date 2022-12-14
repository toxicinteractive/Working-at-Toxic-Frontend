import React from "react";

const SearchBar = (props) =>{
    return(
        <div className="searchBar">
            <input type="text" required placeholder="Search move..." value={props.searchWord}onChange={(e) => props.setSearchWord(e.target.value)} />
        </div>
    )
}

export default SearchBar