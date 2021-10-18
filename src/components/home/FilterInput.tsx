import { FC, ChangeEvent } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

interface FilterInputProps {
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  label: string;
}

const inputStyle = {
  '& > :not(style)': { width: '25ch' },
} as const;

const FilterInput: FC<FilterInputProps> = (props) => {
  const { onChange, label } = props;

  return (
    <Box component="form" sx={inputStyle} noValidate autoComplete="off">
      <TextField
        InputLabelProps={{ shrink: true }}
        id={label}
        label={label}
        variant={'standard'}
        onChange={onChange}
      />
    </Box>
  );
};

export default FilterInput;
