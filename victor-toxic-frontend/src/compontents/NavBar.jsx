import React from "react";

const NavBar = (props) => {
    return(
        <div className="navBar">
            <h1>Movie finder</h1>
            <div className="choices">
                <select onChange={(e) => props.setisSearch(e.target.value === "true" ? true : false)}>
                    <option value={false}> Popular Movies </option>
                    <option value={true}> Search </option>
                </select>
            </div>
        </div>
    )
}

export default NavBar