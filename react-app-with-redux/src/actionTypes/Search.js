import React from "react";

const SearchBar = (props) => {
    const handleSubmit = (event) => {
        event.preventDefault();

    };

    return <div className="searchBar">
            <form onSubmit={(e) => handleSubmit(e)}>
                    <label for="search">
                        <i class="fa fa-search icon"></i>
                        <input type="text" id="search" name="search" placeholder="search" onclick="searchArt()"/>

                    </label>
                </form>
    </div>
}

export default SearchBar;