import { FC } from 'react';
import CharacterCardSkeleton from '../../components/home/CharaterCardSkeleton';
import Box from '@mui/material/Box';

const characterCardSkeletonsContainerStyle = {
  marginTop: 3,
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',
  gap: '32px',
} as const;

const CharacterCardSkeletonsContainer: FC = () => {
  return (
    <Box sx={characterCardSkeletonsContainerStyle}>
      {new Array(10).fill('').map((el, index) => (
        <CharacterCardSkeleton key={index} />
      ))}
    </Box>
  );
};

export default CharacterCardSkeletonsContainer;
