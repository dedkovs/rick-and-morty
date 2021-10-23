import { FC, useEffect } from 'react';
import { useAppDispatch } from '../../redux/hooks';
import { getLocationDetailsTrigger } from '../../redux/slices/locationDetailsSlice';
import LocationDetailsContainer from './LocationDetailsContainer';
import { useParams } from 'react-router-dom';
import Box from '@mui/material/Box';
import ResidentsCardsContainer from './ResidentsCardsContainer';
import ResidentsHeader from './ResidentsHeader';

interface UrlParams {
  id: string;
}

const LocationDetailsPage: FC = () => {
  const dispatch = useAppDispatch();
  const { id } = useParams<UrlParams>();

  useEffect(() => {
    dispatch(getLocationDetailsTrigger(id));
  }, [dispatch, id]);

  return (
    <Box>
      <LocationDetailsContainer />
      <ResidentsHeader />
      <ResidentsCardsContainer />
    </Box>
  );
};

export default LocationDetailsPage;
