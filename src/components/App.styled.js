import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Link = styled(NavLink)`
  text-decoration: none;
  padding: 20px;
  color: #ffffff;
  &:hover {
    color: #61dafb;
  }
`;

export const Header = styled.nav`
  display: flex;
  box-shadow: 0px 5px 5px black;
  background-color: #282c34;
`;

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 15px;
`;
