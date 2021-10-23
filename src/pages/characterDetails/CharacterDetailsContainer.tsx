import { FC } from 'react';
import { useAppSelector } from '../../redux/hooks';
import CharacterDetailsCard from '../../components/characterDetails/CharacterDetailsCard';
import CharacterDetailsSkeletonContainer from '../characterDetails/CharacterDetailsSkeletonContainer';

const CharacterDetailsContainer: FC = () => {
  const isLoading = useAppSelector((state) => state.characterDetails.isLoading);
  const result = useAppSelector((state) => state.characterDetails.result);

  return isLoading ? (
    <CharacterDetailsSkeletonContainer />
  ) : (
    <CharacterDetailsCard result={result} />
  );
};

export default CharacterDetailsContainer;
