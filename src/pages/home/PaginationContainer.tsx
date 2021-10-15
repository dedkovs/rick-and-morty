import { FC, ChangeEvent } from 'react';
import Box from '@mui/material/Box';
import Pagination from '../../components/home/Pagination';
import { useAppSelector, useAppDispatch } from '../../redux/hooks';
import { getDataTrigger } from '../../redux/slices/charactersSlice';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

const PaginationContainerStyle = {
  display: 'block',
  width: 'fit-content',
  margin: '0 auto',
  marginTop: 4,
} as const;

const PaginationContainer: FC = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('sm'));

  const data = useAppSelector((state) => state.characters.data);

  const currentPage = useAppSelector((state) => state.characters.filters.page);

  const dispatch = useAppDispatch();

  const handleChange = (e: ChangeEvent<unknown>, page: number) => {
    if (currentPage !== page) {
      dispatch(getDataTrigger({ page }));
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth',
      });
    }
  };

  return data.length > 0 ? ( //
    // if data.length === 0 ...
    <Box sx={PaginationContainerStyle}>
      <Pagination handleChange={handleChange} siblingCount={matches ? 1 : 0} />
    </Box>
  ) : null;
};

export default PaginationContainer;
