import React from 'react';
import {
  BoxSearch, 
  InputSearch, 
  TextAlert
} from './styles';

const Search = (props) => {
  return (
    <BoxSearch>
      <InputSearch 
        type="text" 
        placeholder="Type here..." 
        onFocus={(e) => e.target.select()} 
        onChange={(e) => props.handlerChangeSearch(e.target.value)}
      />  
      <TextAlert className={`no-results ${props.noResults ? 'visible' : ''}`}> No lyrics found</TextAlert>
    </BoxSearch>
  );
}

export default Search;


