export const apiKey =
    process.env.REACT_APP_API_KEY || "dcf6fe444e49bcbe4d8f215076000be9";
export const baseUrl =
    process.env.REACT_APP_API_BASE_URL || "https://api.themoviedb.org/3";
export const searchUrl = `${baseUrl}/search/movie?api_key=${apiKey}&language=en-US&query=`;

export const POPULAR_MOVIE = {
    url: `${baseUrl}/movie/popular?api_key=${apiKey}&language=en-US&page=1`,
    options: {
        method: "GET",
        headers: {
            accept: "application/json",
            Authorization: `Bearer ${apiKey}`,
        },
    },
};

export const TOP_RANKED_MOVIE = {
    url: `${baseUrl}/tv/top_rated/?api_key=${apiKey}&language=en-US&page=1`,
    options: {
        method: "GET",
        headers: {
            accept: "application/json",
            Authorization: `Bearer ${apiKey}`,
        },
    },
};
