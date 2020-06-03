import React from 'react';
import {connect} from 'react-redux';
import { 
  refreshLoading, 
  refreshResults,
  refreshNoResults,
  showRecents,
  showLyrics, 
} from './store/actions';
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


const App = (props) => {

  const handlerChangeSearch = value => {
    props.refreshLyrics([]);

    if (value.length >= 3) {
      const enc = encodeURI(value);
      let temp = [];
      props.refreshLoading(true);
      props.setShowRecents(false);
      
      axios
      .get(`https://api.lyrics.ovh/suggest/${enc}`)
      .then(res => {
        const result = res.data.data;
        if(result.length) {
          result.forEach((item, index) => {
            temp.push({
              id: item.id,
              song: item.title,
              artist: item.artist.name,
              artistPicture: item.artist.picture,
              album: item.album.title,
              cover: item.album.cover
            });
          });
          props.refreshResults(temp);
        } else {
          props.refreshResults([]);
          props.setShowRecents(true);
          props.setNoResults(true);
        }
        props.refreshLoading(false);
      })
    } else {
      props.refreshResults([]);
      props.setShowRecents(true);
      props.setNoResults(false);
    }
  }

  const findLyrics = (id, artist, song, cover) => {
    const urlEnc = encodeURI(`https://api.lyrics.ovh/v1/${artist}/${song}`);
    props.refreshLoading(true);
    axios
    .get(urlEnc)
    .then(res => {
      if (res.data.lyrics) {
        props.refreshLyrics([song, artist, res.data.lyrics]);        
        props.setShowRecents(false);
        props.refreshResults([]);
        storeData(id, artist, song, cover);
      }       
    })
    .catch(error => {
      toast.error('No lyrics found');
    });
    props.refreshLoading(false);
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
    // setRecents(lastSearch);
  }
 
  return (
    <>
      <GlobalStyle />
      <AsideContainer />
      <div className="main">   
        <ToastContainer />
        <Search handlerChangeSearch={handlerChangeSearch} noResults={props.noResults} />
        <div className="content">
          {props.loading &&
            <Loading/>
          }

          {props.results.length > 0 &&
            <Results lyricsParams={findLyrics} />
          }

          {props.lyrics.length > 0 &&
            <Lyrics song={props.lyrics[0]} artist={props.lyrics[1]} lyrics={props.lyrics[2]} controlPage={props.displayResults}/>
          }

          {props.showRecents &&
            <Recents lyricsParams={findLyrics} />
          }
        </div>
        <Footer />
      </div>
    </>
  );
}

const mapStateToProps = (state)=> {
  return {
    loading: state.lyrics.loading,
    showRecents: state.lyrics.showRecents,
    lyrics: state.lyrics.lyrics,
    noResults: state.lyrics.noResults,
    results: state.lyrics.results
  }
}

const mapDispatchToProps = dispatch => {
  return {
      refreshLoading: bool => {
        dispatch(refreshLoading(bool));
      },
      refreshResults: array => {
          dispatch(refreshResults(array))
      }, 
      setNoResults: array => {
        dispatch(refreshNoResults(array))
      },     
      refreshLyrics: array => {
        dispatch(showLyrics(array))
      },
      displayResults: data => {
        dispatch(showRecents(data))
        dispatch(refreshResults([]))
        dispatch(showLyrics([]))
      },
      setShowRecents: data => {
        dispatch(showRecents(data))
      }
  }
}


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);