import React from "react";
import '../SearchBar/SearchBar.css'

export class SearchBar extends React.Component {
    render () {
        return (
        <div className="SearchBar">
            <input placeholder="Enter a Song, Album, or Artist" />
            <button text="Search" className="SearchButton"><span className="material-symbols-outlined" > Search </span></button>
        </div>
    );
};
}

// export default SearchBar;