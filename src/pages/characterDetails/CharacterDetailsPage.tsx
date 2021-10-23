import { FC, useEffect } from 'react';
import { useAppDispatch } from '../../redux/hooks';
import { getCharacterDetailsTrigger } from '../../redux/slices/characterDetailsSlice';
import CharacterDetailsContainer from './CharacterDetailsContainer';
import { useParams } from 'react-router-dom';

interface UrlParams {
  id: string;
}

const CharacterDetailsPage: FC = () => {
  const dispatch = useAppDispatch();
  const { id } = useParams<UrlParams>();

  useEffect(() => {
    dispatch(getCharacterDetailsTrigger(id));
  }, [dispatch, id]);

  return <CharacterDetailsContainer />;
};

export default CharacterDetailsPage;
