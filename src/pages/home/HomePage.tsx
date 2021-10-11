import { FC } from 'react';
import CharacterFiltersContainer from './CharacterFiltersContainer';
import ResultCardsContainer from './ResultCardsContainer';
import PaginationContainer from './PaginationContainer';
import ErrorMessage from '../../components/home/ErrorMessage';
import SpinnerContainer from '../../pages/home/SpinnerContainer';

const HomePage: FC = () => {
  return (
    <>
      <CharacterFiltersContainer />
      <SpinnerContainer />
      <ErrorMessage />
      <PaginationContainer />
      <ResultCardsContainer />
    </>
  );
};

export default HomePage;
