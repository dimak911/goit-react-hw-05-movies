import styled from 'styled-components';

export const Image = styled.img`
  width: 100%;
  height: 100%;
  /* height: auto; */
  object-fit: cover;
`;

export const Card = styled.a`
  display: block;
  text-decoration: none;
  height: 100%;
  border: 1px solid #61dafb;
  border-radius: 10px;
  overflow: hidden;
  background-color: #282c34;
  color: #61dafb;
`;

export const ImageWrapper = styled.div`
  display: block;
  height: 351px;
`;

export const ContentWrapper = styled.div`
  padding: 15px;
  p:first-child {
    margin-bottom: 10px;
  }
`;
