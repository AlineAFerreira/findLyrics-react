import React, { useState } from 'react';
import {BoxSearch, InputSearch, TextAlert} from './styles';
import axios from 'axios';

const Search = (props) => {
  const [noResults, setNoResults] = useState(false);

  function handlerChangeSearch(e) {
    const value = e.target.value;

    if (value.length >= 3) {
      const enc = encodeURI(value);
      let temp = [];
      props.refreshLoading(true);

      axios
      .get(`https://api.lyrics.ovh/suggest/${enc}`)
      .then(res => {
        const result = res.data.data;
        if(result.length) {
          result.forEach((item, index) => {
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
      })
    } else {
      props.setResults([]);
      props.controlPage(true);
    }
  }

  return (
    <BoxSearch>
      <InputSearch type="text" placeholder="Type here..." onChange={handlerChangeSearch}/>  
      <TextAlert className={`no-results ${noResults ? 'visible' : ''}`}> No lyrics found</TextAlert>
    </BoxSearch>
  );
}

export default Search;

