import React, {useState} from 'react';

// import { Container } from './styles';

const Results = (props) => {  
  const [lyrics, setLyrics] = useState([]);

  function suggestions() {
    return props.results.map(item => {
      return (
        <div key={item.id} onClick={()=> findLyrics(item.id, item.artist, item.song, item.cover)}>
          <img src={item.cover} alt={item.album}/> <br/>
          <span>{item.song}</span> <br/>
          <span>{item.artist}</span> <br/>
        </div>  
      )
    });
  }

  function findLyrics(id, artist, song, cover) {
    const urlEnc = encodeURI(`https://api.lyrics.ovh/v1/${artist}/${song}`);
    fetch(urlEnc)
    .then(res => res.json())
    .then(data => {
      if (data.lyrics) {
        setLyrics(data.lyrics);
        storeData(id, artist, song, cover);
        props.setIsFirstLoad(false);
      } else if (data.error) {
        alert(data.error)
      }
      
    })
  }

  //Set data on 'LocalStorage'
  const storeData = (id, a, s, c) => {
    let isOnRecents = false;
    let lastSearch = [];
    const crtSearch = { id: id, artist: a, song: s, cover: c }

    let result = localStorage.getItem('lastSearches');
    if (result) {
        lastSearch = JSON.parse(result);
        let i;
        for (i = 0; i < lastSearch.length; i++ ) {
            if(lastSearch[i].id === crtSearch.id) {
                isOnRecents = true;
                break;
            }
        };                                
    }
    if(!isOnRecents) lastSearch.push(crtSearch);
    localStorage.setItem('lastSearches', JSON.stringify(lastSearch))
    props.setRecents(lastSearch);
  }

  return (
    <div className="container">
      <div>
        {suggestions()}
      </div>
      <div>
        Letra:
        <pre>{lyrics}</pre>
      </div> 
    </div>
  );
}

export default Results;