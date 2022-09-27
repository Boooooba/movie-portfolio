import React, {useState, useEffect} from 'react'
import MovieList from './Components/MovieList'
import Header from './Components/Header'
import AddFav from './Components/AddFav'
import RemoveFav from './Components/RemoveFav'
import Footer from './Components/Footer'

const App = () => {
    
    const [movies, setMovies] = useState([])
    const [favourites, setFavourites] = useState([])
    const [searchValue, setSearchValue] = useState('')
    
    
    const getMovieRequest = async (searchValue) => {
		const url = `https://www.omdbapi.com/?s=${searchValue}&apikey=584a1ff2`

		const response = await fetch(url)
		const responseJson = await response.json()

		if (responseJson.Search) {
			setMovies(responseJson.Search)
		}else if (!searchValue){
            setMovies([{
            "Title": "Harry Potter and the Deathly Hallows: Part 2",
            "Year": "2011",
            "imdbID": "tt1201607",
            "Type": "movie",
            "Poster": "https://m.media-amazon.com/images/M/MV5BMGVmMWNiMDktYjQ0Mi00MWIxLTk0N2UtN2ZlYTdkN2IzNDNlXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_SX300.jpg"
        },
        {
            "Title": "Garfield",
            "Year": "2004",
            "imdbID": "tt0356634",
            "Type": "movie",
            "Poster": "https://m.media-amazon.com/images/M/MV5BMTIzMTc1OTUxOV5BMl5BanBnXkFtZTYwNTMxODc3._V1_SX300.jpg"
        },
        {
            "Title": "Drive",
            "Year": "2011",
            "imdbID": "tt0780504",
            "Type": "movie",
            "Poster": "https://m.media-amazon.com/images/M/MV5BZjY5ZjQyMjMtMmEwOC00Nzc2LTllYTItMmU2MzJjNTg1NjY0XkEyXkFqcGdeQXVyNjQ1MTMzMDQ@._V1_SX300.jpg"
        },
        {
            "Title": "The Godfather",
            "Year": "1972",
            "imdbID": "tt0068646",
            "Type": "movie",
            "Poster": "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg"
        },
        {
            "Title": "Star Wars: Episode V - The Empire Strikes Back",
            "Year": "1980",
            "imdbID": "tt0080684",
            "Type": "movie",
            "Poster": "https://m.media-amazon.com/images/M/MV5BYmU1NDRjNDgtMzhiMi00NjZmLTg5NGItZDNiZjU5NTU4OTE0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg"
        },
        {
            "Title": "Star Wars: Episode VI - Return of the Jedi",
            "Year": "1983",
            "imdbID": "tt0086190",
            "Type": "movie",
            "Poster": "https://m.media-amazon.com/images/M/MV5BOWZlMjFiYzgtMTUzNC00Y2IzLTk1NTMtZmNhMTczNTk0ODk1XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg"
        }])
        }
	};

    
    useEffect(() => {
        getMovieRequest(searchValue)
    },[searchValue])
    
    useEffect(() => {
        const movieFavourites = JSON.parse(localStorage.getItem('movie-app-favourites'))
        if(movieFavourites){
            setFavourites(movieFavourites)
        }
    },[])
    
    const saveToLocalStorage = (items) => {
        localStorage.setItem('movie-app-favourites', JSON.stringify(items))
    }
    
    const addFavouriteMovie = (movie) => {
        const newFavouriteList = [...favourites, movie]
        setFavourites(newFavouriteList)
        saveToLocalStorage(newFavouriteList)
    }
    
    const removeFavouriteMovie = (movie) => {
        const newFavouriteList = favourites.filter(
            (favourite) => favourite.imdbID !== movie.imdbID)
        setFavourites(newFavouriteList)
        saveToLocalStorage(newFavouriteList)
    }
        
    return(
        <div>
            <Header searchValue={searchValue} setSearchValue={setSearchValue}/>
                <MovieList movies = {movies} handleFavouritesClick={addFavouriteMovie} favComponent={AddFav}/>
            <div className='horizontal-line'>Your favourite movies</div>
            <div className='fav'>
                <MovieList movies = {favourites} handleFavouritesClick={removeFavouriteMovie} favComponent={RemoveFav} />
            </div>
            <Footer />
        </div>
    )
}

export default App