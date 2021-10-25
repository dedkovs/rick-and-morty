import { FC } from 'react';
import Box from '@mui/material/Box';
import CharacterCard from '../../components/home/CharacterCard';
import { Character } from '../../entities/charactersTypes';
import Spinner from '../../components/common/Spinner';
import { useLocationResidents } from '../../hooks/useLocationResidents';

interface ResidentsCardsContainerProps {
  residentsIdsString: string;
}

const residentsCardsContainerStyle = {
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',
  gap: 4,
  marginTop: 4,
} as const;

const ResidentsCardsContainer: FC<ResidentsCardsContainerProps> = ({
  residentsIdsString,
}) => {
  const response = useLocationResidents(residentsIdsString);

  if (response.status === 'loading') return <Spinner />;

  if (response.status === 'error') return <div>Something went wrong</div>;

  const residents = response.data || [];

  let resultsArray: Character[] | Character = [];
  if (!Array.isArray(residents)) {
    resultsArray.push(residents);
  } else resultsArray = residents;

  return (
    <Box sx={residentsCardsContainerStyle}>
      {resultsArray.map((character: Character) => (
        <CharacterCard key={character.id} {...character} />
      ))}
    </Box>
  );
};

export default ResidentsCardsContainer;
