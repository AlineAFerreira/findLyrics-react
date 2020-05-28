import styled from "styled-components";

export const Aside = styled.aside`
  padding: 0 20px; 
  margin-top: 25px;   
  text-align: center;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  @media (min-width: 768px) {
    width: 40%;
    height: 100%;            
    background: #7ECDDF;
    margin-top: 0; 
    position: fixed;
    z-index: 1;
    top: 0;
    left: 0;

    & * {
      color: #FFF !important;
    }
  }
`;


export const MainHeader = styled.h1`
  text-transform: uppercase;
  color: #7ECDDF;
  font-size: 40px;
  margin: 0 0 10px;
  font-weight: 500;
  line-height: 1.2;
`;

export const SecundaryHeader = styled.h2`
  font-weight: lighter;
  font-size: 28px;
  margin: 0;
  line-height: 1.2;
`;
