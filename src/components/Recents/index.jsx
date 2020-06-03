import React from 'react';
import {connect} from 'react-redux';
import {BoxRecents, TitleRecents, RecentsContent, RecentsItem, Song, Artist, BoxNoRecents} from './styles';
import Image from './../../assets/images/4.png';

const Recents = props => {
  let values;

  function makePage () {
    if (props.isFirstLoad) {
      values = JSON.parse(localStorage.getItem('lastSearches'));
    } else {
      values = props.recents;
    }

    return (
      <BoxRecents>
        <TitleRecents>{values !== null ? 'Recents Searches' : 'No Recent Searches'}</TitleRecents>
        <RecentsContent>
          {values !== null ? getRecents(values) : 
            <BoxNoRecents>
              <img src={Image} alt="website logo" />
            </BoxNoRecents>
          }
        </RecentsContent>
      </BoxRecents> 
    )
  }

  function getRecents(values) {
    const returnResults = values.map(item => {
      return (
        <RecentsItem key={item.id} onClick={()=> props.lyricsParams(item.id, item.artist, item.song, item.cover)}>
          <img src={item.cover} alt={item.artist}/>
          <Song>{item.song}</Song>
          <Artist>{item.artist}</Artist>
        </RecentsItem>  
      )
    });   
    
    return returnResults;
  }

  return makePage();
}

const mapStateToProps = (state)=> {
  return {
    isFirstLoad: state.lyrics.isFirstLoad,
    recents: state.lyrics.recents,
  }
}

export default connect(
  mapStateToProps
)(Recents);