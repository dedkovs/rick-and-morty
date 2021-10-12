import { FC, ChangeEvent } from 'react';
import Box from '@mui/material/Box';
import CharacterNameInput from '../../components/home/CharacterNameInput';
import { useAppDispatch } from '../../redux/hooks';
import { getDataTrigger } from '../../redux/slices/charactersSlice';
import CharacterStatusSelectContainer from './CharacterStatusSelectContainer';

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
    const trimmedName = e.target.value.trim().toLowerCase();
    const currentName = trimmedName;
    if (previousName !== currentName) {
      dispatch(
        getDataTrigger({
          name: trimmedName,
        })
      );
      previousName = currentName;
    }
  });

  return (
    <Box sx={characterFiltersContainerStyle}>
      <CharacterNameInput
        onCharacterNameInputChange={onCharacterNameInputChange}
        label="Character name"
      />
      <CharacterStatusSelectContainer />
    </Box>
  );
};

export default CharacterFiltersContainer;
