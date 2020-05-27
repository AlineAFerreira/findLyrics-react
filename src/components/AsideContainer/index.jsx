import React from 'react';
// import Image from './../../assets/images/4.png';
import './styles.css';
import { GiMusicalNotes } from 'react-icons/gi';

const AsideContainer = () => {
  return (
      <aside>
        <h1>Lyrics</h1>
        <h2>Find Lyrics and sing together <GiMusicalNotes /></h2>
        {/* <Image /> */}
      </aside>
  );
}

export default AsideContainer;