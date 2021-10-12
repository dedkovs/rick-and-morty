import { FC } from 'react';
import CharacterFiltersContainer from './CharacterFiltersContainer';
import ResultCardsContainer from './ResultCardsContainer';
import PaginationContainer from './PaginationContainer';
import ErrorMessage from '../../components/home/ErrorMessage';

const HomePage: FC = () => {
  return (
    <>
      <CharacterFiltersContainer />
      <ErrorMessage />
      <PaginationContainer />
      <ResultCardsContainer />
    </>
  );
};

export default HomePage;
