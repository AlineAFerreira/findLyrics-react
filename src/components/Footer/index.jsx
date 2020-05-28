import React from 'react';
import { DiGithubBadge } from 'react-icons/di';
import {Container, Link} from './styles';

const Footer = () => {
  return (
      <Container>
          <div>
            Developed by <a className="linkedIn-Profile" href="https://www.linkedin.com/in/aline-alves-ferreira" target="_new">Aline ferreira</a> 
          </div>
          <div>
            <Link href="https://github.com/AlineAFerreira" target="_new"><DiGithubBadge size={28} /></Link>
          </div>
      </Container>
  );
}

export default Footer;