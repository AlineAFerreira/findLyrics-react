import React from "react";
import {Artist, Song, BoxLyrics, BackButton} from './styles';

export default (props) => {
  return (
    <div>
      <BackButton onClick={() => {props.controlPage(true)}}>Voltar</BackButton>
      <div>
        <Artist>{props.artist}</Artist>
        <Song>{props.song}</Song> 
        <BoxLyrics>{props.lyrics}</BoxLyrics>
      </div>
      <BackButton onClick={() => {props.controlPage(true)}}>Voltar</BackButton>
    </div>
  )
};
