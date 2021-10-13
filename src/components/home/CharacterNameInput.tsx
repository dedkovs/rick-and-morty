import { FC, ChangeEvent } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useAppSelector } from '../../redux/hooks';

interface CharacterNameInputProps {
  onCharacterNameInputChange: (e: ChangeEvent<HTMLInputElement>) => void;
  label: string;
}

const inputStyle = {
  '& > :not(style)': { width: '25ch' },
};

const CharacterNameInput: FC<CharacterNameInputProps> = (props) => {
  const { onCharacterNameInputChange, label } = props;

  // const inp = useAppSelector(state => state.filters.name)

  return (
    <Box component="form" sx={inputStyle} noValidate autoComplete="off">
      <TextField
        id={label}
        label={label}
        variant={'standard'}
        onChange={onCharacterNameInputChange}
        // value={inp.toLowercase()}
      />
    </Box>
  );
};

export default CharacterNameInput;
