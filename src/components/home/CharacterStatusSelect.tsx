import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { CharacterStatuses } from '../../entities/charactersTypes';
import { useAppSelector } from '../../redux/hooks';

interface CharacterStatusSelectProps {
  onChange: (e: SelectChangeEvent) => void;
}

const CharacterStatusSelect: React.FC<CharacterStatusSelectProps> = ({
  onChange,
}) => {
  const characterStatus = useAppSelector(
    (state) => state.characters.filters.status //
  );

  return (
    <div>
      <FormControl variant="standard" sx={{ m: 1, minWidth: '25ch' }}>
        <InputLabel shrink>Character status</InputLabel>
        <Select
          displayEmpty
          value={characterStatus}
          onChange={onChange}
          label="Character status"
        >
          {Object.entries(CharacterStatuses).map(([key, value]) => {
            return (
              <MenuItem key={key} value={value}>
                {key}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
    </div>
  );
};

export default CharacterStatusSelect;
