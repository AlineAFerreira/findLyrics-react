import React, {useState} from 'react';
import Search from './components/Search';
import Recents from './components/Recents';
import Results from './components/Results';
import Contador from './components/ClasseComponent'
// import { Container } from './styles';

const App = () => {
  const [isFirstLoad, setIsFirstLoad] = useState(true);
  const [results, setResults] = useState([]);
  const [recents, setRecents] = useState([]);

  const refreshFirstLoad = (data) => {
    setIsFirstLoad(data);
  }

  const refreshResults = (data) => {
    setResults(data);
  }

  const refreshRecents = (data) => {
    setRecents(data);
  }

  return (
    <>
      <Search setResults={refreshResults} />
      <Results results={results} setIsFirstLoad={refreshFirstLoad} setRecents={refreshRecents} />
      <Recents recents={recents} isFirstLoad={isFirstLoad}/>
      <Contador/>
    </>
  );
}

export default App;