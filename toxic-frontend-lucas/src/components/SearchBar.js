import React from 'react';

const SearchBar = (props) => {
  return (
    <div className="col col-sm-8">
      <input
        className="form-control"
        placeholder="Search movie"
        value={props.value}
        onChange={(event) => props.setSearchValue(event.target.value)}
      />
    </div>
  );
};
export default SearchBar;
