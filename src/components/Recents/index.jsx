import React from 'react';
// import { Container } from './styles';

const Recents = (props) => {

  function getRecents() {
    let values;

    if(props.isFirstLoad) {
      values = JSON.parse(localStorage.getItem('lastSearches'));
    } else {
      values = props.recents;
    }

    if (values !== null) {
      return values.map(item => {
        return (
          <div key={item.id}>
            <img src={item.cover} alt={item.album}/> <br/>
            <span>{item.song}</span> <br/>
            <span>{item.artist}</span> <br/>
          </div>  
        )
      });
    } else {
      return <span>No Recent Results...</span>
    }
  }

  return (
    <React.Fragment>
      <div>Recentes: </div>
      <div style={{display: 'flex'}}>
        {getRecents()}
      </div>
    </React.Fragment>
  );
}

export default Recents;