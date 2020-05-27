import React from 'react';
import './styles.css';

const Recents = (props) => {

  function getRecents() {
    let values;

    if(props.isFirstLoad) {
      values = JSON.parse(localStorage.getItem('lastSearches'));
    } else {
      values = props.recents;
    }

    if (values !== null) {
      return values.map(item => {
        return (
          <div className="item" key={item.id} onClick={()=> props.lyricsParams(item.id, item.artist, item.song, item.cover)}>
            <img src={item.cover} alt=""/>
            <span className="song-name">{item.song}</span>
            <span className="artist-name">{item.artist}</span>
          </div>  
        )
      });
    } else {
      return <span>No Recent Results...</span>
    }
  }

  return (
    <div className="box-recents">
      <h1>Recent Searches: </h1>
      <div className="recents-content">
        {getRecents()}
      </div>
    </div>
  );
}

export default Recents;