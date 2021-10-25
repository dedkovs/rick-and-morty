import { FC } from 'react';
import LocationDetailsCard from '../../components/locationDetails/LocationDetailsCard';
import Box from '@mui/material/Box';
import { Location } from '../../entities/charactersTypes';

interface LocationDetailsContainerProps {
  location: Location;
}

const LocationDetailsContainer: FC<LocationDetailsContainerProps> = ({
  location,
}) => {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
      <LocationDetailsCard result={location} />
    </Box>
  );
};

export default LocationDetailsContainer;
