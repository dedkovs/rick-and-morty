import { FC, useEffect } from 'react';
import HomePage from './pages/home/HomePage';
import { getDataTrigger } from './redux/slices/charactersSlice';
import { useAppDispatch } from './redux/hooks';
import Box from '@mui/material/Box';

const appStyle = {
  display: 'block',
  padding: 2,
  paddingBottom: 4,

  marginLeft: 'calc(100vw - 100%)',

  // width: '100vw',
  // overflowX: 'hidden',
} as const;

const App: FC = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const loading = document.getElementById('loading');
    if (loading) {
      loading.parentNode?.removeChild(loading);
    }
    dispatch(getDataTrigger());
  }, [dispatch]);

  return (
    <Box sx={appStyle}>
      <HomePage />
    </Box>
  );
};

export default App;
