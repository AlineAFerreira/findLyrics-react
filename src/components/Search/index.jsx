import React, { useState } from 'react';
import './styles.css';

const Search = (props) => {
  const [noResults, setNoResults] = useState(false);

  function handlerChangeSearch(e) {
    const value = e.target.value;

    if (value.length >= 3) {
      const enc = encodeURI(value);
      let temp = [];
      props.refreshLoading(true);

      fetch(`https://api.lyrics.ovh/suggest/${enc}`)
      .then(result => {return result.json()})
      .then(data => {
        if(data.data.length){
          data.data.forEach((item, index) => {
            temp.push({
              id: item.id,
              song: item.title,
              artist: item.artist.name,
              artistPicture: item.artist.picture,
              album: item.album.title,
              cover: item.album.cover
            });
          });
          setNoResults(false);
          props.setResults(temp);
          props.controlPage(false);
        } else {
          setNoResults(true);
          props.controlPage(true);
        }
        props.refreshLoading(false);
      });
    } else {
      props.setResults([]);
      props.controlPage(true);
    }
  }

  return (
    <div className="box-search">
      <input type="text" placeholder="Type here..." onChange={handlerChangeSearch}/>  
      <span className={`no-results ${noResults ? 'visible' : ''}`}> No lyrics found</span>
    </div>
  );
}

export default Search;

