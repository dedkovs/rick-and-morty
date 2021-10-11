import { FC } from 'react';
import Box from '@mui/material/Box';
import { useAppSelector } from '../../redux/hooks';

const ErrorMessageStyle = {
  mt: 2,
  fontStyle: 'italic',
  color: 'rgba(0,0,0,0.5)',
  textAlign: 'center',
} as const;

const ErrorMessage: FC = () => {
  const error = useAppSelector((state) => state.characters.error);

  return error ? <Box sx={ErrorMessageStyle}>{error}</Box> : null;
};

export default ErrorMessage;
