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
  const [_page, setPage] = useState(page);

  return (
    <MuiPagination
      onChange={(e, pageNumber) => {
        setPage(pageNumber);
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
          />
        );
      }}
      siblingCount={siblingCount}
      page={_page}
    />
  );
};

export default Pagination;
