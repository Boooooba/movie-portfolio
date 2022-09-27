const Header = (props) => {
    return(
        <div className='header'>
                <div className="header-text">
                    <h1 className='header-big'>Find your film</h1>
                </div>
                
                <div className='search'>
                    <input placeholder="Avengers" type="search" id="gsearch" value={props.value} onChange= {(event) => props.setSearchValue(event.target.value) } />
                    <button type='submit' className='btn'>Search</button>
                </div>
            </div>
    )
}

export default Header