import { FC } from 'react';
import { SelectChangeEvent } from '@mui/material/Select';
import StatusSelect from '../../components/home/StatusSelect';
import { useAppDispatch } from '../../redux/hooks';
import { getFilteredResultsTrigger } from '../../redux/slices/charactersSlice';
import { characterStatuses } from '../../entities/charactersTypes';

const StatusSelectContainer: FC = () => {
  const dispatch = useAppDispatch();

  const handleCharacterStatusChange = (e: SelectChangeEvent) => {
    dispatch(
      getFilteredResultsTrigger({
        pageNumber: 1,
        status: e.target.value as characterStatuses,
      })
    );
  };

  return <StatusSelect onChange={handleCharacterStatusChange} />;
};

export default StatusSelectContainer;
