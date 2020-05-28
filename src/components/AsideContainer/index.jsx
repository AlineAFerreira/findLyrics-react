import React from 'react';
import {Aside, MainHeader, SecundaryHeader} from './styles';
import { GiMusicalNotes } from 'react-icons/gi';

const AsideContainer = () => {
  return (
      <Aside>
        <MainHeader>Lyrics</MainHeader>
        <SecundaryHeader>Find Lyrics and sing together <GiMusicalNotes /></SecundaryHeader>
      </Aside>
  );
}

export default AsideContainer;