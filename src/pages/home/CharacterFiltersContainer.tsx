import { FC, ChangeEvent } from 'react';
import Box from '@mui/material/Box';
import CharacterInput from '../../components/home/CharacterInput';
import { useAppDispatch } from '../../redux/hooks';
import { getFilteredResultsTrigger } from '../../redux/slices/charactersSlice';
import StatusSelectContainer from './StatusSelectContainer';

const characterFiltersContainerStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '20px',
  flexWrap: 'wrap',
} as const;

const debounce = (
  func: (e: ChangeEvent<HTMLInputElement>) => void,
  timeout = 500
) => {
  let timer: NodeJS.Timeout;
  return (...args: any) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, args);
    }, timeout);
  };
};

const CharacterFiltersContainer: FC = () => {
  const dispatch = useAppDispatch();

  let previousName = '';

  const onCharacterNameInputChange = debounce((e) => {
    const trimmedName = e.target.value.trim();
    const currentName = trimmedName;
    if (previousName !== currentName) {
      dispatch(
        getFilteredResultsTrigger({
          pageNumber: 1,
          characterName: trimmedName,
        })
      );
      previousName = currentName;
    }
  });

  return (
    <Box sx={characterFiltersContainerStyle}>
      <CharacterInput
        onCharacterNameInputChange={onCharacterNameInputChange}
        label="Character name"
      />
      <StatusSelectContainer />
    </Box>
  );
};

export default CharacterFiltersContainer;
