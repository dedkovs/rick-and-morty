import { FC } from 'react';
import CharacterCardSkeleton from '../../components/home/CharaterCardSkeleton';
import Box from '@mui/material/Box';

const CharacterDetailsSkeletonContainerStyle = {
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',
  gap: 4,
} as const;

const CharacterDetailsSkeletonContainer: FC = () => {
  return (
    <Box sx={CharacterDetailsSkeletonContainerStyle}>
      <CharacterCardSkeleton />
    </Box>
  );
};

export default CharacterDetailsSkeletonContainer;
