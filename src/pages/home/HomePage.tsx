import { FC } from 'react';
import CharacterFiltersContainer from './CharacterFiltersContainer';
import ResultCardsContainer from './ResultCardsContainer';
import PaginationContainer from './PaginationContainer';
import ResultsCountContainer from './ResultsCountContainer';

const HomePage: FC = () => {
  return (
    <>
      <CharacterFiltersContainer />
      <ResultsCountContainer />
      <ResultCardsContainer />
      <PaginationContainer />
    </>
  );
};

export default HomePage;
