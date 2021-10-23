import { FC, ChangeEvent, useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

interface FilterInputProps {
  onChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  label: string;
  value: string;
}

const inputStyle = {
  '& > :not(style)': { width: '25ch' },
} as const;

const FilterInput: FC<FilterInputProps> = (props) => {
  const { onChange, label, value } = props;
  const [inputValue, setInputValue] = useState(value);

  useEffect(() => {
    setInputValue(value);
  }, [value]);

  return (
    <Box component="form" sx={inputStyle} noValidate autoComplete="off">
      <TextField
        InputLabelProps={{ shrink: true }}
        id={label}
        label={label}
        variant={'standard'}
        onChange={(e) => {
          setInputValue(e.target.value);
          onChange(e);
        }}
        value={inputValue}
      />
    </Box>
  );
};

export default FilterInput;
