// import { Outlet } from 'react-router-dom';
import { Section } from 'components/Section/Section';

export const Movies = ({ onSearchMovie }) => {
  return (
    <Section>
      <label>
        Search movie
        <input></input>
        <button type="submit" onSubmit={onSearchMovie}>
          Search
        </button>
      </label>
    </Section>
  );
};
