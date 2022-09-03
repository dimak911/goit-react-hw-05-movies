import PropTypes from 'prop-types';
import { StyledSection } from './Section.styled';

export const Section = ({ children }) => {
  return <StyledSection>{children}</StyledSection>;
};

Section.protoType = {
  children: PropTypes.element,
};
