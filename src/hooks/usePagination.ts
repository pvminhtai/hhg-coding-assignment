import { useCallback, useState } from 'react';
import { DEFAULT_PAGE_LIMIT, DEFAULT_PAGE_SELECTED } from '../constants';

export default function usePagination(
  page: number = DEFAULT_PAGE_SELECTED,
  limit: number = DEFAULT_PAGE_LIMIT
) {
  const [pagination, setPagination] = useState({ page, limit });

  const changeCurrentPage = useCallback(
    (page: number) => setPagination({ ...pagination, page }),
    [pagination]
  );

  const changePageLimit = useCallback(
    (size: number) => setPagination({ ...pagination, limit: size }),
    [pagination]
  );

  const resetPagination = useCallback(
    () =>
      setPagination({ page: DEFAULT_PAGE_SELECTED, limit: DEFAULT_PAGE_LIMIT }),
    []
  );

  return {
    pagination,
    changeCurrentPage,
    changePageLimit,
    setPagination,
    resetPagination,
  };
}
