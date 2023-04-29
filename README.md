
# MovieDBApp - React Native

MovieDBApp is a mobile application built using React Native that allows users to search for movies, display movie items, view movie details, and watch trailers using the TMDB API.

## Features

- Search for movies
- Display movie items with poster and title
- View details about each movie including poster, title, overview, release date and rating
- Watch movie trailers using the TMDB API

## Installation

1. Clone the repository

```
git clone https://github.com/oussama-tahri/MovieDBApp.git
```

2. Install dependencies

```
cd MovieDBApp
npm install
```

3. Create a `.env` file at the root of the project with your TMDB API key

```
TMDB_API_KEY=your_tmdb_api_key_here
```

## Usage

1. Start the app

```
npm start
```

2. Open the app on your phone or emulator using the Expo app

3. Search for movies, view movie items and details, and watch the trailers!

## Components

### Search

The `Search` component allows users to search for movies by entering a search query. It uses the `TextInput` and `TouchableOpacity` components from React Native to implement the search functionality.

### Film Items

The `FilmItem` component displays each movie item in the search results. It uses the `Image`, `Text`, and `TouchableOpacity` components from React Native to display the movie poster, title, and details. The component also passes the movie ID to the `FilmDetails` component to allow users to view more information about the movie.

### Film Details

The `FilmDetails` component displays detailed information about a movie, including the poster, title, overview, release date, and rating. It also allows users to watch the movie trailer using the TMDB API. The component uses the `Image`, `Text`, `View`, `TouchableOpacity`, and `WebView` components from React Native to display the movie details and trailer.

### TMDB API

The TMDB API is used to search for movies and retrieve movie details and trailers. The API key is stored in a `.env` file at the root of the project and is accessed using the `process.env.TMDB_API_KEY` variable. The API calls are made using the `fetch` function in JavaScript.

## Conclusion

MovieDBApp is a simple yet effective React Native app that demonstrates how to search for movies, display movie items, view movie details, and watch trailers using the TMDB API. The app is easy to modify and customize, so feel free to make it your own!
