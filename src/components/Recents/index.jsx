import React, {useState} from 'react';
import {BoxRecents, TitleRecents, RecentsContent, RecentsItem, Song, Artist, BoxNoRecents} from './styles';
import Image from './../../assets/images/4.png';

const Recents = (props) => {
  let values;

  function getRecents() {
    if (props.isFirstLoad) {
      values = JSON.parse(localStorage.getItem('lastSearches'));
    } else {
      values = props.recents;
    }

    if (values !== null) {      
      return values.map(item => {
        return (
          <RecentsItem key={item.id} onClick={()=> props.lyricsParams(item.id, item.artist, item.song, item.cover)}>
            <img src={item.cover} alt=""/>
            <Song>{item.song}</Song>
            <Artist>{item.artist}</Artist>
          </RecentsItem>  
        )
      });      
    } else {
      return (
        <BoxNoRecents>
          <img src={Image} alt="website logo" />
        </BoxNoRecents>
      );
    }
  }

  return (
    <BoxRecents>
      <TitleRecents>Recent Searches:</TitleRecents>
      <RecentsContent>
        {getRecents()}
      </RecentsContent>
    </BoxRecents>
  );
}

export default Recents;