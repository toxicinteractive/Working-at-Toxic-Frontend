'use strict';
import React from "react";

export const List = ({ list, property }) => {
    if (list) {
        return(
        <ul>
            {list.map((item, index) => {
                return (
                    <li key={index}>{item[property]}</li>
                )
            })}
        </ul>
    )}
    else {
        console.log('List is empty.');
    }
}

export default List;