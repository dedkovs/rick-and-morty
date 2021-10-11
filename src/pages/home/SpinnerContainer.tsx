import { FC } from 'react';
import Box from '@mui/material/Box';
import Spinner from '../../components/common/Spinner';
import { useAppSelector } from '../../redux/hooks';

const SpinnerContainerStyle = {
  position: 'fixed',
  left: '50%',
  transform: 'translateX(-50%)',
  top: '12px',
  opacity: 0.5,
  zIndex: -1,
} as const;

const SpinnerContainer: FC = () => {
  const isLoading = useAppSelector((state) => state.characters.isLoading);

  return isLoading ? (
    <Box sx={SpinnerContainerStyle}>
      <Spinner size={40} />
    </Box>
  ) : null;
};

export default SpinnerContainer;
