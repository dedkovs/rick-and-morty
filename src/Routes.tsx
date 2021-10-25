import { FC } from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from './pages/home/HomePage';
import CharacterDetailsPage from './pages/characterDetails/CharacterDetailsPage';
import LocationDetailsPage from './pages/locationDetails/LocationDetailsPage';

const Routes: FC = () => {
  return (
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
  );
};

export default Routes;
