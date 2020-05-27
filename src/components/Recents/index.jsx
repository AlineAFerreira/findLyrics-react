import React, {useState} from 'react';
import './styles.css';
import Image from './../../assets/images/4.png';

const Recents = (props) => {
  let values;

  function getRecents() {
    if (props.isFirstLoad) {
      values = JSON.parse(localStorage.getItem('lastSearches'));
    } else {
      values = props.recents;
    }
    console.log(values)
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
      return (
        <div className="box-noRecents">
          <img src={Image} alt="website logo" />
        </div>
      );
    }
  }

  return (
    <div className="box-recents">
      <h1>Recent Searches:</h1>
      <div className="recents-content">
        {getRecents()}
      </div>
    </div>
  );
}

export default Recents;