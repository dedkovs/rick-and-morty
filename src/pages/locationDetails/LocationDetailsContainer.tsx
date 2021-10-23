import { FC } from 'react';
import { useAppSelector } from '../../redux/hooks';
import LocationDetailsCard from '../../components/locationDetails/LocationDetailsCard';
import Box from '@mui/material/Box';

const LocationDetailsContainer: FC = () => {
  const isLoading = useAppSelector((state) => state.locationDetails.isLoading);
  const result = useAppSelector((state) => state.locationDetails.result);

  return isLoading ? (
    <Box
      sx={{ display: 'flex', justifyContent: 'center', fontStyle: 'italic' }}
    >
      Loading...
    </Box>
  ) : (
    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
      <LocationDetailsCard result={result} />
    </Box>
  );
};

export default LocationDetailsContainer;
