import { FC, ChangeEvent } from 'react';
import { SelectChangeEvent } from '@mui/material/Select';
import Box from '@mui/material/Box';
import FilterInput from '../../components/home/FilterInput';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { getDataTrigger } from '../../redux/slices/charactersSlice';
import FilterSelect from '../../components/home/FilterSelect';
import {
  CharacterSpecies,
  CharacterGender,
  CharacterStatus,
} from '../../entities/charactersTypes';

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

  const type = useAppSelector((state) => state.characters.filters.type);

  const species = useAppSelector((state) => state.characters.filters.species);

  const gender = useAppSelector((state) => state.characters.filters.gender);

  const status = useAppSelector((state) => state.characters.filters.status);

  const handleCharacterNameChange = debounce((e) => {
    const trimmedName = e.target.value.trim().toLowerCase();
    if (name !== trimmedName) {
      dispatch(
        getDataTrigger({
          name: trimmedName,
        })
      );
    }
  });

  const handleCharacterTypeChange = debounce((e) => {
    const trimmedType = e.target.value.trim().toLowerCase();
    if (type !== trimmedType) {
      dispatch(
        getDataTrigger({
          type: trimmedType,
        })
      );
    }
  });

  const handleCharacterSpeciesChange = (e: SelectChangeEvent) => {
    dispatch(
      getDataTrigger({
        species: e.target.value as CharacterSpecies,
      })
    );
  };

  const handleCharacterGenderChange = (e: SelectChangeEvent) => {
    dispatch(
      getDataTrigger({
        gender: e.target.value as CharacterGender,
      })
    );
  };

  const handleCharacterStatusChange = (e: SelectChangeEvent) => {
    dispatch(
      getDataTrigger({
        status: e.target.value as CharacterStatus,
      })
    );
  };

  return (
    <Box sx={characterFiltersContainerStyle}>
      <FilterInput
        onChange={handleCharacterNameChange}
        label="Character name"
      />
      <FilterInput
        onChange={handleCharacterTypeChange}
        label="Character type"
      />
      <FilterSelect
        onChange={handleCharacterSpeciesChange}
        values={Object.entries(CharacterSpecies)}
        selectedValue={species}
        label="Character species"
      />
      <FilterSelect
        onChange={handleCharacterGenderChange}
        values={Object.entries(CharacterGender)}
        selectedValue={gender}
        label="Character gender"
      />
      <FilterSelect
        onChange={handleCharacterStatusChange}
        values={Object.entries(CharacterStatus)}
        selectedValue={status}
        label="Character status"
      />
    </Box>
  );
};

export default CharacterFiltersContainer;
