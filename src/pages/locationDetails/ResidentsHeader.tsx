import { FC } from 'react';
import Typography from '@mui/material/Typography';

interface ResultsCountProps {
  residentsCount?: number;
}

const resultsCountStyle = {
  fontStyle: 'italic',
  color: 'rgba(0,0,0,0.5)',
  marginTop: 4,
} as const;

const ResultsCount: FC<ResultsCountProps> = ({ residentsCount }) => {
  let text: string = '';

  if (typeof residentsCount === 'undefined') return null;
  else {
    if (residentsCount === 0) text = 'The only resident of this location.';

    if (residentsCount === 1) text = 'and 1 more resident of this location:';

    if (residentsCount > 1)
      text = `and ${residentsCount} more residents of this location:`;

    return (
      <Typography sx={resultsCountStyle} textAlign="center">
        {text}
      </Typography>
    );
  }
};

export default ResultsCount;
