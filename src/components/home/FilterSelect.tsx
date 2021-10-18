import { FC } from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

interface FilterSelectProps {
  onChange: (e: SelectChangeEvent) => void;
  values: [string, string][];
  selectedValue: string;
  label: string;
}

const FilterSelect: FC<FilterSelectProps> = ({
  onChange,
  values,
  selectedValue,
  label,
}) => {
  return (
    <div>
      <FormControl variant="standard" sx={{ minWidth: '25ch' }}>
        <InputLabel shrink>{label}</InputLabel>
        <Select
          displayEmpty
          value={selectedValue}
          onChange={onChange}
          label={label}
        >
          {values.map(([key, value]) => {
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

export default FilterSelect;
