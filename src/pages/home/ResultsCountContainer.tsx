import { FC } from 'react';
import Box from '@mui/material/Box';
import ResultsCount from '../../components/home/ResultsCount';
import { useAppSelector } from '../../redux/hooks';

const resultsCountContainerStyle = {
  height: 80,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
} as const;

const ResultsCountContainer: FC = () => {
  const isLoading = useAppSelector((state) => state.characters.isLoading);

  const totalResultsCount = useAppSelector(
    (state) => state.characters.data.totalResultsCount
  );

  const error = useAppSelector((state) => state.characters.error);

  let text: string = '';

  if (isLoading) {
    text = 'Searching...';
  }

  if (totalResultsCount !== 0) {
    text = `Found ${totalResultsCount} items`;
  }

  if (error) {
    text = error;
  }

  return (
    <Box sx={resultsCountContainerStyle}>
      <ResultsCount text={text} />
    </Box>
  );
};

export default ResultsCountContainer;
