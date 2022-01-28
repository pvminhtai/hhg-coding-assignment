import { useCallback, useState } from 'react';
import { DEFAULT_SORT_FIELD, DEFAULT_SORT_ORDER } from '../constants';

export default function useSorter(
  field: string = DEFAULT_SORT_FIELD,
  order: string = DEFAULT_SORT_ORDER
) {
  const [sorter, setSorter] = useState({ field, order });

  const changeSortField = useCallback(
    (field: string) => setSorter({ ...sorter, field }),
    [sorter]
  );

  const changeSortOrder = useCallback(
    (direction: string) => setSorter({ ...sorter, order: direction }),
    [sorter]
  );

  const resetSorter = useCallback(
    () => setSorter({ field: DEFAULT_SORT_FIELD, order: DEFAULT_SORT_ORDER }),
    []
  );

  return { sorter, changeSortField, changeSortOrder, setSorter, resetSorter };
}
