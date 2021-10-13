import { FC, ChangeEvent } from 'react';
import Box from '@mui/material/Box';
import CharacterNameInput from '../../components/home/CharacterNameInput';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
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

  const name = useAppSelector((state) => state.characters.filters.name);

  const onCharacterNameInputChange = debounce((e) => {
    const trimmedName = e.target.value.trim().toLowerCase();
    if (name !== trimmedName) {
      dispatch(
        getDataTrigger({
          name: trimmedName,
        })
      );
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
