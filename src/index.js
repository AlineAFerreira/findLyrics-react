import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import SearchBox from './components/SearchBox';
import LyricsBox from './components/LyricsBox';

ReactDOM.render(
  <div className="container">
    <SearchBox>
      <div type="text"></div>
    </SearchBox>
    <LyricsBox />
  </div>,
  document.getElementById('root')
);

serviceWorker.unregister();
