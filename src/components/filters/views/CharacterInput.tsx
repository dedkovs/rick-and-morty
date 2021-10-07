import { ChangeEvent } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
interface CharacterInputProps {
  onInputChange: (e: ChangeEvent<HTMLInputElement>) => void;
  label: string;
}

const CharacterInput: React.FC<CharacterInputProps> = (props) => {
  const { onInputChange, label } = props;

  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 2, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField
        id={label}
        label={label}
        variant={'standard'}
        onChange={onInputChange}
      />
    </Box>
  );
};

export default CharacterInput;
