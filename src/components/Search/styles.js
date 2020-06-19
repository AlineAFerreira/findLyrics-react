import styled from 'styled-components';

export const BoxSearch = styled.div`
  position: relative;
  margin-bottom: 30px;
  margin: 30px 15px 0px;

  @media (min-width: 768px) {
    margin: 30px 50px 0px;
  }
`;

export const InputSearch = styled.input`
  width: 100%;
  font-size: 16px;
  font-family: 'Poppins', sans-serif;
  border-radius: 30px;
  border: solid 1px #7ECDDF;
  padding: 10px 20px;
  transition: all .5s;

  &:focus {
    outline: none;
    box-shadow: 1px 1px 6px #7ECDDF;
  }
`;

export const ButtonSearch = styled.button`
  position: absolute;
  right: 10px;
  top: 7px;
  border: none;
  padding: 5px;
  border-radius: 50%;
  background-color: #fff;
  cursor: pointer;

  &:focus {
    outline: none;
  }

  &:active svg {
    color: #999;
  }

  svg {
    color: #707070;
  }
`;

export const TextAlert = styled.span`
  font-size: 12px;
  margin-left: 25px;
  color: tomato;
  opacity: 0;
  transition: all .5s;

    &.visible {
      opacity: 1;
  }
`;