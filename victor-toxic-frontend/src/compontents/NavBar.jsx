import React from "react";
import { useNavigate } from "react-router-dom";


const NavBar = (props) => {
    const navigate = useNavigate()
    function handleChange(value){
        props.setisSearch(value === "true" ? true : false)
        if(value === "true"){
            navigate(`/Search`)
        }else{
            navigate(`/`)
        }
    }
    return(
        <div className="navBar">
            <h1>Movie finder</h1>
            <div className="choices">
                <select onChange={(e) => handleChange(e.target.value)}>
                <option value={false}> Popular Movies </option>
                <option value={true}> Search </option>
                </select>
            </div>
        </div>
    )
}

export default NavBar