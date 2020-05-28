import React, {useState} from 'react';
import axios from 'axios';
import GlobalStyle from './styles';
import AsideContainer from './components/AsideContainer';
import Loading from './components/Loading';
import Search from './components/Search';
import Recents from './components/Recents';
import Results from './components/Results';
import Lyrics from './components/Lyrics';
import Footer from './components/Footer';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css'; 


const App = () => {
  const [isFirstLoad, setIsFirstLoad] = useState(true);
  const [results, setResults] = useState([]);
  const [recents, setRecents] = useState([]);
  const [showLyrics, setShowLyrics] = useState([]);
  const [showLoading, setShowLoading] = useState(false);
  const [showRecents, setShowRecents] = useState(true);
  const [showResults, setShowResults] = useState(false);

  const refreshLyricsParams = (id, artist, song, cover) => {
    findLyrics(id, artist, song, cover);
  }

  const refreshFirstLoad = (data) => {
    setIsFirstLoad(data);
  }

  const refreshLoading = (data) => {
    setShowLoading(data);
  }

  const refreshResults = (data) => {
    setResults(data);
  }

  const displayResults = (data) => {
    setShowRecents(data);
    setShowResults(!data);
    setShowLyrics([]);
  }

  const findLyrics = (id, artist, song, cover) => {
    const urlEnc = encodeURI(`https://api.lyrics.ovh/v1/${artist}/${song}`);
    setShowLoading(true);
    axios
    .get(urlEnc)
    .then(res => {
      if (res.data.lyrics) {
        setShowLyrics([song, artist, res.data.lyrics]);        
        setShowRecents(false);
        setShowResults(false);
        storeData(id, artist, song, cover);
      }       
    })
    .catch(error => {
      toast.error('No lyrics found', {autoClose: false,});
    });
    setShowLoading(false);
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
    setRecents(lastSearch);
  }
 

  return (
    <>
      <GlobalStyle />
      <AsideContainer />
      <div className="main">   
        <ToastContainer />
        <Search setResults={refreshResults} controlPage={displayResults} refreshLoading={refreshLoading} />
        <div className="content">
          { showLoading &&
            <Loading newClass={showLoading}/>
          }

          {showResults &&
            <Results results={results} setIsFirstLoad={refreshFirstLoad} lyricsParams={refreshLyricsParams} />
          }

          { showLyrics.length > 0 &&
            <Lyrics song={showLyrics[0]} artist={showLyrics[1]} lyrics={showLyrics[2]} controlPage={displayResults}/>
          }

          {showRecents &&
            <Recents recents={recents} isFirstLoad={isFirstLoad} lyricsParams={refreshLyricsParams} />
          }
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;