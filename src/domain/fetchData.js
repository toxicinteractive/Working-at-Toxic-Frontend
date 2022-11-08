'use strict';

export async function get(url) {
    const response = await fetch(url);
    const data = await response.json();
    return data;
}

export default get;