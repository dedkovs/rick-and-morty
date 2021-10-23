import ResetFiltersButton from '../../components/home/ResetFiltersButton';
import Box from '@mui/material/Box';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useAppDispatch } from '../../redux/hooks';
import {
  resetFilters,
  getDataTrigger,
} from '../../redux/slices/charactersSlice';

const theme = createTheme({
  palette: {
    primary: {
      main: 'rgba(0,0,0,0.5)',
    },
  },
});

const ResetFiltersButtonContainer = () => {
  const dispatch = useAppDispatch();

  const handleResetFilters = () => {
    dispatch(resetFilters());
    dispatch(getDataTrigger());
  };

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          marginTop: 4,
          width: '100%',
        }}
      >
        <ResetFiltersButton
          text="Reset filters"
          handleResetFilters={handleResetFilters}
        />
      </Box>
    </ThemeProvider>
  );
};

export default ResetFiltersButtonContainer;
