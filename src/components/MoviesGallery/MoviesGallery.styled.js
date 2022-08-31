import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Heading = styled.h1`
  margin-bottom: 10px;
  font-size: 70px;
  font-weight: 600;
  background-image: radial-gradient(
    circle farthest-corner at 10.2% 55.8%,
    rgba(252, 37, 103, 1) 0%,
    rgba(250, 38, 151, 1) 46.2%,
    rgba(186, 8, 181, 1) 90.1%
  );
  color: transparent;
  background-clip: text;
  -webkit-background-clip: text;
`;

export const Card = styled(NavLink)`
  display: block;
  text-decoration: none;
  height: 100%;
  border: 1px solid #61dafb;
  border-radius: 10px;
  overflow: hidden;
  background-color: #282c34;
  color: #61dafb;
  box-shadow: 5px 5px 5px #282c34;
  transition: all 0.2s ease-in-out;
  &:hover {
    transform: scale(1.05);
    box-shadow: 10px 10px 10px #282c34;
  }
`;
