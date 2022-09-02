import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { searchMoviesByName } from 'services/movie-api';
import {
  SearchForm,
  SearchFormButton,
  SearchFormButtonLabel,
  SearchFormInput,
  Error,
} from './SearchInput.styled';

export const SearchInput = ({ setMovies }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const [searchValue, setSearchValue] = useState('');
  const onSubmit = ({ search }) => {
    setSearchValue(search);
    reset();
  };

  useEffect(() => {
    if (!searchValue) {
      return;
    }

    (async () => {
      const foundMovies = await searchMoviesByName(searchValue);
      setMovies(foundMovies);
    })();
  }, [searchValue, setMovies]);

  return (
    <>
      <SearchForm onSubmit={handleSubmit(onSubmit)} autoComplete="off">
        <SearchFormButton type="submit">
          <SearchFormButtonLabel>Search</SearchFormButtonLabel>
        </SearchFormButton>
        <SearchFormInput
          defaultValue=""
          {...register('search', { required: 'This field is required' })}
          placeholder="Search movie by name"
        />
      </SearchForm>
      <Error>{errors.search?.message}</Error>
    </>
  );
};
