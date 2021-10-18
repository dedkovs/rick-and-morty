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
  gap: 4,
} as const;

const CharacterCardsContainer: FC = () => {
  const results = useAppSelector((state) => state.characters.data.results);
  const isLoading = useAppSelector((state) => state.characters.isLoading);

  return isLoading ? (
    <CharacterCardSkeletonsContainer />
  ) : (
    <Box sx={characterCardsContainerStyle}>
      {results.map((character: Character) => (
        <CharacterCard key={character.id} {...character} />
      ))}
    </Box>
  );
};

export default CharacterCardsContainer;
