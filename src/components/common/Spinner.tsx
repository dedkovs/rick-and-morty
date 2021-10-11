import { FC } from 'react';
import CircularProgress from '@mui/material/CircularProgress';

interface SpinnerProps {
  size: number;
}

const Spinner: FC<SpinnerProps> = ({ size }) => {
  return <CircularProgress size={size} />;
};

export default Spinner;
