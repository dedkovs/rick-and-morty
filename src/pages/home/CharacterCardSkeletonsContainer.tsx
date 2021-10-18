import { FC } from 'react';
import CharacterCardSkeleton from '../../components/home/CharaterCardSkeleton';
import Box from '@mui/material/Box';

const characterCardSkeletonsContainerStyle = {
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',
  gap: 4,
} as const;

const CharacterCardSkeletonsContainer: FC = () => {
  return (
    <Box sx={characterCardSkeletonsContainerStyle}>
      {[...Array(10)].map((el, index) => (
        <CharacterCardSkeleton key={index} />
      ))}
    </Box>
  );
};

export default CharacterCardSkeletonsContainer;
