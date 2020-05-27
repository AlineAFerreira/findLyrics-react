import React from "react";
import './styles.css';

export default (props) => {
  return (
    <div>
      <button onClick={() => {props.controlPage(true)}}>Voltar</button>
      <div>
        <span className="artist">{props.artist}</span>
        <span className="song">{props.song}</span> 
        <pre>{props.lyrics}</pre>
      </div>
      <button onClick={() => {props.controlPage(true)}}>Voltar</button>
    </div>
  )
};
