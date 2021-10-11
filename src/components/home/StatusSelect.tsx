import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { characterStatuses } from '../../entities/charactersTypes';
import { useAppSelector } from '../../redux/hooks';

interface StatusSelectProps {
  onChange: (e: SelectChangeEvent) => void;
}

const StatusSelect: React.FC<StatusSelectProps> = ({ onChange }) => {
  const characterStatus = useAppSelector(
    (state) => state.characters.filters.status
  );

  return (
    <div>
      <FormControl variant="standard" sx={{ m: 1, minWidth: '25ch' }}>
        <InputLabel>Character status</InputLabel>
        <Select
          value={characterStatus}
          onChange={onChange}
          label="Character status"
        >
          {Object.keys(characterStatuses).map((status) => {
            return (
              <MenuItem key={status} value={(characterStatuses as any)[status]}>
                {status}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
    </div>
  );
};

export default StatusSelect;
