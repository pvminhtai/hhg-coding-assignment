import { useCallback, useState } from 'react';
import { DEFAULT_SORT_BY, DEFAULT_SORT_ORDER } from '../constants';
import { ISorting } from '../interfaces';

interface IUseSorting {
  sorter: ISorting;
  changeSortField: (field: string) => void;
  changeSortOrder: (direction: string) => void;
  setSorter: React.Dispatch<React.SetStateAction<ISorting>>;
  resetSorter: () => void;
}

export default function useSorting(
  sortBy: string = DEFAULT_SORT_BY,
  order: string = DEFAULT_SORT_ORDER
): IUseSorting {
  const [sorter, setSorter] = useState<ISorting>({ sortBy, order });

  const changeSortField = useCallback(
    (field: string) => setSorter({ ...sorter, sortBy: field }),
    [sorter]
  );

  const changeSortOrder = useCallback(
    (direction: string) => setSorter({ ...sorter, order: direction }),
    [sorter]
  );

  const resetSorter = useCallback(
    () => setSorter({ sortBy: DEFAULT_SORT_BY, order: DEFAULT_SORT_ORDER }),
    []
  );

  return { sorter, changeSortField, changeSortOrder, setSorter, resetSorter };
}
