import { FC, ChangeEvent, useState } from 'react';
import MuiPagination from '@mui/material/Pagination';
import PaginationItem from '@mui/material/PaginationItem';

interface PaginationProps {
  handleChange: (e: ChangeEvent<unknown>, page: number) => void;
  pagesCount: number;
  page: number;
  siblingCount: number;
}

const Pagination: FC<PaginationProps> = (props) => {
  const { handleChange, pagesCount, page, siblingCount } = props;
  const [pageState, setPageState] = useState(page);

  return (
    <MuiPagination
      onChange={(e, pageNumber) => {
        setPageState(pageNumber);
        handleChange(e, pageNumber);
      }}
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
            disabled={
              (item.type === 'previous' && page === 1) ||
              (item.type === 'next' && page === pagesCount)
            }
          />
        );
      }}
      siblingCount={siblingCount}
      page={pageState}
    />
  );
};

export default Pagination;
