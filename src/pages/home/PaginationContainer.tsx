import { FC } from 'react';
import Box from '@mui/material/Box';
import Pagination from '../../components/home/Pagination';
import { useAppSelector, useAppDispatch } from '../../redux/hooks';
import { getFilteredResultsTrigger } from '../../redux/slices/charactersSlice';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

const PaginationContainerStyle = {
  display: 'block',
  width: 'fit-content',
  margin: '24px auto',
};

const PaginationContainer: FC = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('sm'));

  const filteredCharactersFromApi = useAppSelector(
    (state) => state.characters.filteredCharactersFromApi
  );

  const pageNumber = useAppSelector(
    (state) => state.characters.pagination.pageNumber
  );

  const dispatch = useAppDispatch();

  const handleChange = (e: React.ChangeEvent<unknown>, page: number) => {
    if (pageNumber !== page) {
      dispatch(
        getFilteredResultsTrigger({
          pageNumber: page,
        })
      );
    }
  };

  return filteredCharactersFromApi.length > 0 ? (
    <Box sx={PaginationContainerStyle}>
      <Pagination handleChange={handleChange} siblingCount={matches ? 1 : 0} />
    </Box>
  ) : null;
};

export default PaginationContainer;
