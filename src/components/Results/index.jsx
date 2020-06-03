import React from 'react';
import {connect} from 'react-redux';
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
            <div className="song-name">{item.song}</div>
            <div className="artist-name">{item.artist} - {item.album}</div>
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
const mapStateToProps = (state)=> {
  return {
    results: state.lyrics.results,

  }
}

export default connect(
  mapStateToProps
)(Results);