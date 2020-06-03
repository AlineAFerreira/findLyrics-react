import styled from "styled-components";

export const Artist = styled.span`
  display: block;
  font-size: 18px;
  font-weight: 400;
  color: #555555;
  text-transform: uppercase;
  letter-spacing: 10px;
`;

export const Song = styled.span`
  display: block;
  margin: 10px 0 35px;
  font-size: 30px;
  font-weight: 600;
  line-height: normal;
  line-height: 35px;
  color: #000;

  &::after {
    content: '';
    width: 70px;
    height: 3px;
    background-color: #7ecddf;
    display: block;
    margin-top: 10px;
  }
`;

export const BoxLyrics = styled.pre`
  font-family: 'Poppins', sans-serif;
  white-space: pre-wrap;
`;

export const BackButton = styled.button`
  float: right;
  font-size: 14px;
  width: 148px;
  height: 48px;
  border-radius: 5px;
  line-height: 50px;
  font-weight: 500;
  border: none;
  padding: 0 35px;
  margin-top: 15px;
  background-color: #7ecddf;
  text-transform: uppercase;
  color: #FFF;
  cursor: pointer;

  &:hover {
    background-color: #48c4e0;
    color: #FFF;
  }

  &:focus {
    outline: none;
  }
`;
