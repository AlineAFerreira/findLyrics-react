import styled from "styled-components";

export const Container = styled.div`
  border-top: 1px solid #e6e6e6;
  padding: 15px;
  display: flex;
  justify-content: space-between;

  .linkedIn-Profile {
    color: #1d1d1d;

    &:hover {
      color: #48c4e0;
    } 
  }
`;

export const Link = styled.a`
  display: block;
  height: 28px;
  color: #707070;
  transition: color .5s;

  &:hover {
    color: #48c4e0;
  }
`;
