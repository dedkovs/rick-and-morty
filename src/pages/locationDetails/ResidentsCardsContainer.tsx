import { FC } from 'react';
import Box from '@mui/material/Box';
import CharacterCard from '../../components/home/CharacterCard';
import { useAppSelector } from '../../redux/hooks';
import { Character } from '../../entities/charactersTypes';

const residentsCardsContainerStyle = {
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',
  gap: 4,
  marginTop: 4,
} as const;

const ResidentsCardsContainer: FC = () => {
  const results = useAppSelector((state) => state.locationResidents.results);
  const isLoading = useAppSelector(
    (state) => state.locationResidents.isLoading
  );

  let resultsArray: Character[] = [];
  if (!Array.isArray(results)) {
    resultsArray.push(results);
  } else resultsArray = results;

  return isLoading ? (
    <Box
      sx={{ display: 'flex', justifyContent: 'center', fontStyle: 'italic' }}
    >
      Loading...
    </Box>
  ) : (
    <Box sx={residentsCardsContainerStyle}>
      {resultsArray.map((character: Character) => (
        <CharacterCard key={character.id} {...character} />
      ))}
    </Box>
  );
};

export default ResidentsCardsContainer;
