import { FC } from 'react';
import Box from '@mui/material/Box';
import ResultsCount from '../../components/home/ResultsCount';
import { useAppSelector } from '../../redux/hooks';
import { useFilters } from '../../hooks/useFilters';

const resultsCountContainerStyle = {
  height: 80,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
} as const;

interface ResultsCountContainerProps {
  text?: string;
}

const ResultsCountContainer: FC<ResultsCountContainerProps> = () => {
  const filters = useAppSelector((state) => state.characters.filters);
  const response = useFilters(filters);

  let text = '';

  if (response.status === 'loading') {
    text = 'Searching...';
  }

  if (response.status === 'error') {
    text = 'Nothing found';
  }

  if (response.status === 'success') {
    const charactersCount = response.data?.info.count;
    if (charactersCount === 1) {
      text = 'Found 1 character';
    } else {
      text = `Found ${response.data?.info.count} characters`;
    }
  }

  return (
    <Box sx={resultsCountContainerStyle}>
      <ResultsCount text={text} />
    </Box>
  );
};

export default ResultsCountContainer;
