import { FC, ChangeEvent } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

interface CharacterInputProps {
  onCharacterNameInputChange: (e: ChangeEvent<HTMLInputElement>) => void;
  label: string;
}

const inputStyle = {
  '& > :not(style)': { width: '25ch' },
};

const CharacterInput: FC<CharacterInputProps> = (props) => {
  const { onCharacterNameInputChange, label } = props;

  return (
    <Box component="form" sx={inputStyle} noValidate autoComplete="off">
      <TextField
        id={label}
        label={label}
        variant={'standard'}
        onChange={onCharacterNameInputChange}
      />
    </Box>
  );
};

export default CharacterInput;
