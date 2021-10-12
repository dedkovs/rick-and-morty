import { FC, ChangeEvent } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

interface CharacterNameInputProps {
  onCharacterNameInputChange: (e: ChangeEvent<HTMLInputElement>) => void;
  label: string;
}

const inputStyle = {
  '& > :not(style)': { width: '25ch' },
};

const CharacterNameInput: FC<CharacterNameInputProps> = (props) => {
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

export default CharacterNameInput;
