const MovieList = (props) => {
    const FavComponent = props.favComponent
    return(
        <div className="row">
            {props.movies.map((movie, index)=>
            <div className="row-children" key={index}>
                <img src={movie.Poster} alt="movie poster" className='row-img' />
                <div onClick={() => props.handleFavouritesClick(movie)} className='overlay'><FavComponent /></div>
            </div>)}
        </div>
    )
}

export default MovieList