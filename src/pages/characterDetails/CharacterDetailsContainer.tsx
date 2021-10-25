import { FC } from 'react';
import CharacterDetailsCard from '../../components/characterDetails/CharacterDetailsCard';
import { useCharacterDetails } from '../../hooks/useCharacterDetails';
import { useParams } from 'react-router-dom';
import { Character } from '../../entities/charactersTypes';
import Spinner from '../../components/common/Spinner';

interface UrlParams {
  id: string;
}

const CharacterDetailsContainer: FC = () => {
  const { id } = useParams<UrlParams>();

  const response = useCharacterDetails(id);

  if (response.status === 'loading') return <Spinner />;

  if (response.status === 'error') return <div>Something went wrong</div>;

  return <CharacterDetailsCard result={response.data as Character} />;
};

export default CharacterDetailsContainer;
