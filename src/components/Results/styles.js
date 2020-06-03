import styled from "styled-components";

export const BoxResults = styled.div`
  position: relative;
`;

export const TitleResults = styled.h1`
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

export const ResultsItem = styled.div`
  margin-bottom: 15px;
  display: flex;
  align-items: center;
  cursor: pointer;
`;

export const BoxImg = styled.div`
  min-width: 50px;
  width: 50px;
  height: 50px;
  background: #c1c1c1;

  img {
    width: 100%;
  }
`;

export const SongInfo = styled.div`
  margin-left: 15px;
  overflow: hidden;

  .song-name {
    color: black;
    text-transform: uppercase;
    height: 20px;
    overflow: hidden;
    text-overflow: ellipsis;
    -ms-text-overflow: ellipsis;
    white-space: nowrap;
  }

  .artist-name {
    font-size: 12px;
  }
`;