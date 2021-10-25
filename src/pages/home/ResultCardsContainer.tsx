import { FC } from 'react';
import Box from '@mui/material/Box';
import CharacterCard from '../../components/home/CharacterCard';
import { useAppSelector } from '../../redux/hooks';
import { ApiResponse, Character } from '../../entities/charactersTypes';
import CharacterCardSkeletonsContainer from './CharacterCardSkeletonsContainer';
import { useFilters } from '../../hooks/useFilters';

const characterCardsContainerStyle = {
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',
  gap: 4,
} as const;

const CharacterCardsContainer: FC = () => {
  const filters = useAppSelector((state) => state.characters.filters);

  const response = useFilters(filters);

  if (response.status === 'loading') return <CharacterCardSkeletonsContainer />;

  if (response.status === 'error') return null;

  return (
    <Box sx={characterCardsContainerStyle}>
      {(response.data as ApiResponse).results.map((character: Character) => (
        <CharacterCard key={character.id} {...character} />
      ))}
    </Box>
  );
};

export default CharacterCardsContainer;
