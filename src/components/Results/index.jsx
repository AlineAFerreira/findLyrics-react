import React from 'react';
import {BoxResults, TitleResults, ResultsItem, BoxImg, SongInfo} from './styles';

const Results = (props) => {  

  function suggestions() {
    return props.results.map(item => {
      return (
        <ResultsItem key={item.id} onClick={()=> props.lyricsParams(item.id, item.artist, item.song, item.cover)}>
          <BoxImg>
            <img src={item.artistPicture} alt={item.artist} />
          </BoxImg>
          <SongInfo>
            <span className="song-name">{item.song}</span>
            <span className="artist-name">{item.artist} - {item.album}</span>
          </SongInfo>
        </ResultsItem>  
      )
    });
  }

  return (
    <BoxResults>      
      <TitleResults>Results: </TitleResults>
      {suggestions()}
    </BoxResults>
  );
}

export default Results;