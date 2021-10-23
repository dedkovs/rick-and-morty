import Button from '@mui/material/Button';
import { FC } from 'react';

interface ResetFiltersButtonProps {
  text: string;
  handleResetFilters: () => void;
}

const ResetFiltersButton: FC<ResetFiltersButtonProps> = ({
  text,
  handleResetFilters,
}) => {
  return (
    <Button variant="outlined" size="small" onClick={handleResetFilters}>
      {text}
    </Button>
  );
};

export default ResetFiltersButton;
