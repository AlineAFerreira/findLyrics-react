import React from 'react';
import { DiGithubBadge } from 'react-icons/di';
import './styles.css';

const Footer = () => {
  return (
      <footer>
          <div>
            Developed by <a className="linkedIn-Profile" href="https://www.linkedin.com/in/aline-alves-ferreira" target="_new">Aline ferreira</a> 
          </div>
          <div>
            <a className="link" href="https://github.com/AlineAFerreira" target="_new"><DiGithubBadge size={28} /></a>
          </div>
      </footer>
  );
}

export default Footer;