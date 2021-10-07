import CharacterFiltersContainer from '../components/filters/containers/CharacterFiltersContainer';
import CharacterCardsContainer from '../components/results/containers/CharacterCardsContainer';

const HomePage = () => {
  return (
    <>
      <CharacterFiltersContainer />
      <CharacterCardsContainer />
    </>
  );
};

export default HomePage;
