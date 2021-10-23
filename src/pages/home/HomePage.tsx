import { FC, useEffect } from 'react';
import CharacterFiltersContainer from './CharacterFiltersContainer';
import ResetFiltersButtonContainer from './ResetFiltersButtonContainer';
import ResultCardsContainer from './ResultCardsContainer';
import PaginationContainer from './PaginationContainer';
import ResultsCountContainer from './ResultsCountContainer';
import { getDataTrigger } from '../../redux/slices/charactersSlice';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';

const HomePage: FC = () => {
  const dispatch = useAppDispatch();
  const scrollY = useAppSelector((state) => state.ui.scrollY);

  useEffect(() => {
    dispatch(getDataTrigger());
  }, [dispatch]);

  useEffect(() => {
    window.scrollTo({
      top: scrollY,
    });
  }, [scrollY]); /// ref

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
