import React, {useState} from 'react';
import './styles.css';

const Results = (props) => {  

  function suggestions() {
    return props.results.map(item => {
      console.log(item)
      return (
        <div className="results-item" key={item.id} onClick={()=> props.lyricsParams(item.id, item.artist, item.song, item.cover)}>
          <div className="box-img">
            <img src={item.artistPicture} alt={item.artist} />
          </div>
          <div className="song-info">
            <span className="song-name">{item.song}</span>
            <span className="artist-name">{item.artist} - {item.album}</span>
          </div>
        </div>  
      )
    });
  }

  return (
    <div className="box-results">      
      <h1>Results: </h1>
      {suggestions()}
    </div>
  );
}

export default Results;