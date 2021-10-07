import { Link, MemoryRouter, Route } from 'react-router-dom';
import Pagination from '@mui/material/Pagination';
import PaginationItem from '@mui/material/PaginationItem';
import { useAppSelector, useAppDispatch } from '../../redux/hooks';
import { setPageNumber } from '../../redux/slices/pagination.slice';

interface PaginationComponentProps {
  count: number;
}

const PaginationComponent: React.FC<PaginationComponentProps> = ({ count }) => {
  const characterName = useAppSelector(
    (state) => state.characters.characterName
  );
  const filteredCharactersFromApi = useAppSelector(
    (state) => state.characters.filteredCharactersFromApi
  );

  const pageNumber = useAppSelector((state) => state.pagination.pageNumber);
  const dispatch = useAppDispatch();

  return filteredCharactersFromApi.length > 0 ? (
    <MemoryRouter initialEntries={['/character']} initialIndex={0}>
      <Route>
        {({ location }) => {
          const query = new URLSearchParams(location.search);
          const page = parseInt(query.get('page') || '1', 10);
          return (
            <Pagination
              onChange={(e, page) => {
                if (page === pageNumber) return;
                dispatch(setPageNumber(page));
                dispatch({ type: 'PAGE_NUMBER_CHANGED' });
              }}
              page={page}
              count={count}
              renderItem={(item) => (
                <PaginationItem
                  component={Link}
                  to={`/character/${
                    // item.page === 1 ? '' : `?page=${item.page}`
                    `?page=${item.page}&name=${characterName}`
                  }`}
                  {...item}
                />
              )}
            />
          );
        }}
      </Route>
    </MemoryRouter>
  ) : null;
};

export default PaginationComponent;
