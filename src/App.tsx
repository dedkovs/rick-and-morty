import { FC, useEffect } from 'react';
import Box from '@mui/material/Box';
import Routes from './Routes';

const appStyle = {
  display: 'block',
  padding: 2,
  paddingBottom: 3,
  marginLeft: 'calc(100vw - 100%)',
} as const;

const App: FC = () => {
  useEffect(() => {
    const loading = document.getElementById('loading');
    if (loading) {
      loading.parentNode?.removeChild(loading);
    }
  }, []);

  return (
    <Box sx={appStyle}>
      <Routes />
    </Box>
  );
};

export default App;
