import { FC } from 'react';
import { Location } from '../../entities/charactersTypes';
import Box from '@mui/material/Box';

interface LocationDetailsCardProps {
  result: Location;
}

const LocationDetailsCard: FC<LocationDetailsCardProps> = ({ result }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Box sx={{ typography: 'h5' }}>{result.name}</Box>
      <Box sx={{ typography: 'h6' }}>{result.type}</Box>
      <Box>dimension: {result.dimension}</Box>
      <Box>created: {result.created}</Box>
    </Box>
  );
};

export default LocationDetailsCard;
