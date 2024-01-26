import React from 'react';
import logo from './Jam.png';
import './App.css';
import { SearchBar } from '../SearchBar/SearchBar';
import { SearchResults } from '../SearchResults/SearchResults';


function App() {
  return (
    <div className='Page'>
      <div className="App">
          <h1 id="title">JAMMMING!</h1>
          <SearchBar />
          <img src={logo} className="App-logo" alt="logo" />
          <p>Welcome to my Jammming app!</p>
      </div>
      
      <div className="App-Playlist">
          <SearchResults />
      </div>
        {/* <body>
          <button id="save">Save To Spotify</button>
        </body> */}
    </div>
  );
}

export default App;
