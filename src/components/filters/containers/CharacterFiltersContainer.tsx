import { ChangeEvent } from 'react';
import CharacterInput from '../views/CharacterInput';
import { useAppDispatch } from '../../../redux/hooks';
import { inputChanged } from '../../../redux/slices/characters.slice';

const CHARACTER_NAME_LABEL = 'Character name';

const CharacterFiltersContainer: React.FC = () => {
  const dispatch = useAppDispatch();

  const onInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    dispatch(inputChanged(e.target.value));
  };

  return (
    <div>
      <CharacterInput
        onInputChange={onInputChange}
        label={CHARACTER_NAME_LABEL}
      />
    </div>
  );
};

export default CharacterFiltersContainer;
