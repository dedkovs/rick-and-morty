import { FC } from 'react';
import Typography from '@mui/material/Typography';
import { useAppSelector } from '../../redux/hooks';

const resultsCountStyle = {
  fontStyle: 'italic',
  color: 'rgba(0,0,0,0.5)',
  marginTop: 2,
} as const;

const ResultsCount: FC = () => {
  const residentsCount = useAppSelector(
    (state) => state.locationResidents.results
  );

  return (
    <Typography sx={resultsCountStyle} textAlign="center">
      {residentsCount.length} residents of this location:
    </Typography>
  );
};

export default ResultsCount;
