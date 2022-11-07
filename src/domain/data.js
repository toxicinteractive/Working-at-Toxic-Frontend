const key = '7aa3b5d1a41f62bb96b4ce0b8666cf57';
//const url = 'https://api.themoviedb.org/3/tv/550?api_key=';

async function get(url) {
    const response = await fetch(url);
    const data = await response.json();
    return data;
}

export async function getByPopularity() {
    const url = `https://api.themoviedb.org/3/tv/popular?api_key=${key}&language=en-US&page=1`
    const result = await get(url)
    return result;
}

export default getByPopularity;