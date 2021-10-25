import { FC } from 'react';
import LocationDetailsContainer from './LocationDetailsContainer';
import Box from '@mui/material/Box';
import ResidentsCardsContainer from './ResidentsCardsContainer';
import ResidentsHeader from './ResidentsHeader';
import { useParams } from 'react-router-dom';
import { useLocationDetails } from '../../hooks/useLocationDetails';
import Spinner from '../../components/common/Spinner';
import { Location } from '../../entities/charactersTypes';
import { useAppSelector } from '../../redux/hooks';

interface UrlParams {
  id: string;
}

const LocationDetailsPage: FC = () => {
  const { id } = useParams<UrlParams>();
  const response = useLocationDetails(id);

  const selectedCharacterId = useAppSelector(
    (state) => state.characters.selectedCharacterId
  );

  if (response.status === 'loading') return <Spinner />;

  if (response.status === 'error') return <div>Something went wrong</div>;

  const residentsIds =
    response.data?.residents
      .map((residentUrl) => {
        const residentId = residentUrl.slice(42); ///
        return residentId;
      })
      .filter((residentId) => residentId !== String(selectedCharacterId)) || [];

  const residentsIdsString = residentsIds.join(',');

  return (
    <Box>
      <LocationDetailsContainer location={response.data as Location} />
      {selectedCharacterId === null ? null : (
        <ResidentsCardsContainer
          residentsIdsString={String(selectedCharacterId)}
        />
      )}
      <ResidentsHeader residentsCount={residentsIds.length} />
      {residentsIds.length > 0 ? (
        <ResidentsCardsContainer residentsIdsString={residentsIdsString} />
      ) : null}
    </Box>
  );
};

export default LocationDetailsPage;
