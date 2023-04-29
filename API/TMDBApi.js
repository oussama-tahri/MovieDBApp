
const API_TOKEN = "5a05a8f1d14f7397260049e8b1b97624";
export function getFilmsFromApiWithSearchedText (text, page) {
    const url = 'https://api.themoviedb.org/3/search/movie?api_key=' + API_TOKEN + '&language=fr&query=' + text + "&page=" + page
    return fetch(url)
      .then((response) => response.json())
      .catch((error) => console.error(error))

  }
  // API/TMDBApi.js

export function getImageFromApi (name) {
    return 'https://image.tmdb.org/t/p/w300' + name
  }

  export function getLinkFromApi(movieId) {
    return fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${API_TOKEN}&language=en-US`
    )
      .then((response) => response.json())
      .then((json) => {
        const video = json.results.find(
          (result) => result.type === 'Trailer' && result.site === 'YouTube'
        );
        if (video) {
          return `https://www.youtube.com/watch?v=${video.key}`;
        } else {
          return null;
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }

  
  




