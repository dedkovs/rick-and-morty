import { FC } from 'react';
import { SelectChangeEvent } from '@mui/material/Select';
import CharacterStatusSelect from '../../components/home/CharacterStatusSelect';
import { useAppDispatch } from '../../redux/hooks';
import { getDataTrigger } from '../../redux/slices/charactersSlice';
import { CharacterStatuses } from '../../entities/charactersTypes';

const CharacterStatusSelectContainer: FC = () => {
  const dispatch = useAppDispatch();

  const handleCharacterStatusChange = (e: SelectChangeEvent) => {
    dispatch(
      getDataTrigger({
        status: e.target.value as CharacterStatuses,
      })
    );
  };

  return <CharacterStatusSelect onChange={handleCharacterStatusChange} />;
};

export default CharacterStatusSelectContainer;
