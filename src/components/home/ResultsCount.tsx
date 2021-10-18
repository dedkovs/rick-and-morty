import { FC } from 'react';
import Typography from '@mui/material/Typography';

interface ResultsCountProps {
  text: string;
}

const resultsCountStyle = {
  fontStyle: 'italic',
  color: 'rgba(0,0,0,0.5)',
} as const;

const ResultsCount: FC<ResultsCountProps> = ({ text }) => {
  return (
    <Typography sx={resultsCountStyle} textAlign="center">
      {text}
    </Typography>
  );
};

export default ResultsCount;
