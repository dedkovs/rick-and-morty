import { FC, ChangeEvent } from 'react';
import MuiPagination from '@mui/material/Pagination';
import PaginationItem from '@mui/material/PaginationItem';
import { useAppSelector } from '../../redux/hooks';

interface PaginationProps {
  handleChange: (e: ChangeEvent<unknown>, page: number) => void;
  siblingCount: number;
}

const Pagination: FC<PaginationProps> = (props) => {
  const { handleChange, siblingCount } = props;

  const pagesCount = useAppSelector(
    (state) => state.characters.pagination.pagesCount
  );

  const page = useAppSelector((state) => state.characters.filters.page);

  return (
    <MuiPagination
      onChange={handleChange}
      count={pagesCount}
      renderItem={(item) => {
        return (
          <PaginationItem
            {...item}
            sx={
              item.type === 'end-ellipsis' || item.type === 'start-ellipsis'
                ? { pointerEvents: 'none' }
                : null
            }
          />
        );
      }}
      siblingCount={siblingCount}
      page={page}
    />
  );
};

export default Pagination;
