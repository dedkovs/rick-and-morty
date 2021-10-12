import { FC } from 'react';
import Box from '@mui/material/Box';
import CharacterCard from '../../components/home/CharacterCard';
import { useAppSelector } from '../../redux/hooks';
import { Character } from '../../entities/charactersTypes';
import CharacterCardSkeletonsContainer from './CharacterCardSkeletonsContainer';

const characterCardsContainerStyle = {
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',
  gap: '32px',
} as const;

const CharacterCardsContainer: FC = () => {
  const data = useAppSelector((state) => state.characters.data);
  const isLoading = useAppSelector((state) => state.characters.isLoading);

  return isLoading ? (
    <CharacterCardSkeletonsContainer />
  ) : (
    <Box sx={characterCardsContainerStyle}>
      {data.map((character: Character) => (
        <CharacterCard key={character.id} {...character} />
      ))}
    </Box>
  );
};

export default CharacterCardsContainer;
