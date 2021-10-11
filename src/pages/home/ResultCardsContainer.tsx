import { FC } from 'react';
import Box from '@mui/material/Box';
import CharacterCard from '../../components/home/CharacterCard';
import { useAppSelector } from '../../redux/hooks';
import { Character } from '../../entities/charactersTypes';

const characterCardsContainerStyle = {
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',
  gap: '32px',
} as const;

const CharacterCardsContainer: FC = () => {
  const filteredCharactersFromApi = useAppSelector(
    (state) => state.characters.filteredCharactersFromApi
  );

  return filteredCharactersFromApi.length > 0 ? (
    <Box sx={characterCardsContainerStyle}>
      {filteredCharactersFromApi.map((character: Character) => (
        <CharacterCard key={character.id} {...character} />
      ))}
    </Box>
  ) : null;
};

export default CharacterCardsContainer;
