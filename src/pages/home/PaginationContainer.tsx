import { FC, ChangeEvent } from 'react';
import Box from '@mui/material/Box';
import Pagination from '../../components/home/Pagination';
import { useAppSelector, useAppDispatch } from '../../redux/hooks';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useFilters } from '../../hooks/useFilters';
import { setFilters } from '../../redux/slices/charactersSlice';

const PaginationContainerStyle = {
  display: 'block',
  width: 'fit-content',
  margin: '0 auto',
  marginTop: 4,
} as const;

const PaginationContainer: FC = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('sm'));
  const filters = useAppSelector((state) => state.characters.filters);
  const response = useFilters(filters);

  const totalResultsCount = response.data?.info.count || 0;

  const pagesCount = response.data?.info.pages;

  const currentPage = filters.page;

  const dispatch = useAppDispatch();

  const handleChange = (e: ChangeEvent<unknown>, page: number) => {
    if (currentPage !== page) {
      dispatch(setFilters({ page }));
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    }
  };

  return totalResultsCount > 0 ? (
    <Box sx={PaginationContainerStyle}>
      <Pagination
        handleChange={handleChange}
        pagesCount={pagesCount || 0}
        page={currentPage}
        siblingCount={matches ? 1 : 0}
      />
    </Box>
  ) : null;
};

export default PaginationContainer;
