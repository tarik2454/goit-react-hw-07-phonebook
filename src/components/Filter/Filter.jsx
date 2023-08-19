import { StyledLabel, StyledInput } from './Filter.styled';
import { useDispatch, useSelector } from 'react-redux';
import { filterChange } from 'redux/filterSlice';
import { selectFilter } from 'redux/selectors';

export const Filter = () => {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  const handleFilterChange = event => {
    dispatch(filterChange(event.target.value));
  };

  return (
    <StyledLabel>
      Find contacts by name:
      <StyledInput type="text" value={filter} onChange={handleFilterChange} />
    </StyledLabel>
  );
};
