import { FC } from 'react';
import CharacterFiltersContainer from './CharacterFiltersContainer';
import ResetFiltersButtonContainer from './ResetFiltersButtonContainer';
import ResultCardsContainer from './ResultCardsContainer';
import PaginationContainer from './PaginationContainer';
import ResultsCountContainer from './ResultsCountContainer';

const HomePage: FC = () => {
  return (
    <>
      <CharacterFiltersContainer />
      <ResetFiltersButtonContainer />
      <ResultsCountContainer />
      <ResultCardsContainer />
      <PaginationContainer />
    </>
  );
};

export default HomePage;
