import styled from "styled-components";

export const BoxRecents = styled.div`
  flex: 1;
`;

export const TitleRecents = styled.h1`
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

export const RecentsContent = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const RecentsItem = styled.div`
  width: 33%;
  cursor: pointer;
  text-align: center;
  padding: 0 10px 20px;

  @media (min-width: 992px) {
    max-width: 140px;
  }

  @media screen and (max-width: 450px),
	(min-width: 768px) and (max-width: 866px) {
		width: 50%
  }


  &:hover img {
    transform: scale(1.1);
  }

  img {
    display: block;
    border-radius: 6px;
    margin: 0 auto 8px;
    transition: all .2s;
  }

  span {
    display: block;
  }
`;

export const Song = styled.span`
  font-size: 14px;
  color: #404040;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const Artist = styled.span`
  font-size: 12px;
`;

export const BoxNoRecents = styled.div`
  padding: 0 30px;
  margin: 0 auto;

  img {
    width: 100%;
  }
`;

