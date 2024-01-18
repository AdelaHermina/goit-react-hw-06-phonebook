import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateFilter } from '../contactsSlice'; 

const Filter = () => {
  const filter = useSelector(state => state.contacts.filter);
  const dispatch = useDispatch();

  const handleFilterChange = event => {
    const { value } = event.target;
    dispatch(updateFilter(value)); 
  };

  return (
    <label>
      Find contacts by name:
      <input type="text" value={filter} onChange={handleFilterChange} />
    </label>
  );
};

export default Filter;
