import React from 'react';
import { useDispatch } from 'react-redux';
import { setFilter } from '../redux/taskSlice';
import { TextField } from '@mui/material';

const SearchBar = () => {
  const dispatch = useDispatch();

  const handleChange = (e) => {
    dispatch(setFilter(e.target.value));
  };

  return (
    <TextField
      label="Search Tasks"
      variant="outlined"
      fullWidth
      onChange={handleChange}
    />
  );
};

export default SearchBar;
