import React from 'react';
import './styles.css';

const Search = (props) => {
  function handlerChangeSearch(e) {
    const value = e.target.value;

    if (value.length >= 3) {
      const enc = encodeURI(value);
      let temp = [];

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
          props.setResults(temp);
        } else {
          //alert('No lyrics found')
        }
      });
    } else {
      props.setResults([]);
    }
  }

  return (
    <div>
      <input type="text" placeholder="Type here..." onChange={handlerChangeSearch}/>  
    </div>
  );
}

export default Search;

