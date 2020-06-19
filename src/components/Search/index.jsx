import React from 'react';
import { IoIosSearch } from 'react-icons/io';
import {
  BoxSearch, 
  InputSearch, 
  ButtonSearch,
  TextAlert
} from './styles';

const Search = (props) => {
  return (
    <BoxSearch>
      <InputSearch 
        type="text" 
        placeholder="Type here..." 
        onFocus={(e) => e.target.select()} 
        onKeyUp={props.handleKeyUp}
        onChange={(e) => props.handleChange(e.target.value)}
      />        
      <ButtonSearch onClick={props.handleSearch}>
        <IoIosSearch size={22}/>
      </ButtonSearch>
      <TextAlert className={`no-results ${props.noResults ? 'visible' : ''}`}> No lyrics found</TextAlert>
    </BoxSearch>
  );
}

export default Search;
