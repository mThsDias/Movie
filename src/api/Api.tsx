const apiKey = process.env.REACT_APP_API_KEY;
const baseUrl = process.env.REACT_APP_API_BASE_URL;

export const POPULAR_MOVIE = {
    url: apiKey ? `${baseUrl}/movie/popular?api_key=${apiKey}` : "",
    options: {
        method: "GET",
        headers: {
            accept: "application/json",
            Authorization: `Bearer ${apiKey}`,
        },
    },
};
