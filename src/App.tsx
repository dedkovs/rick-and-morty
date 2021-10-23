import { FC, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from './pages/home/HomePage';
import Box from '@mui/material/Box';
import CharacterDetailsPage from './pages/characterDetails/CharacterDetailsPage';
import LocationDetailsPage from './pages/locationDetails/LocationDetailsPage';

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
      <Switch>
        <Route exact path="/character/:id">
          <CharacterDetailsPage />
        </Route>
        <Route exact path="/location/:id">
          <LocationDetailsPage />
        </Route>
        <Route path="/">
          <HomePage />
        </Route>
      </Switch>
    </Box>
  );
};

export default App;
