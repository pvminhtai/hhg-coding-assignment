import { Table } from 'antd';
import { useCallback, useEffect } from 'react';
import { GoBackButton } from '../../components';
import { DEFAULT_PAGE_LIMIT } from '../../constants';
import { useGetEmployees, usePagination, useSorter } from '../../hooks';
import columns from './columns';

export default function Employee(): JSX.Element {
  /** Custom hooks */
  const { pagination, changeCurrentPage } = usePagination();
  const { sorter } = useSorter();
  const { isLoading, employees, total, getEmployees } = useGetEmployees();

  const handleTableChange = useCallback(
    ({ current }) => changeCurrentPage(current),
    [changeCurrentPage]
  );

  /** useEffect */
  useEffect(() => {
    // const params = { ...pagination, ...sorter };
    getEmployees();
  }, [getEmployees, pagination, sorter]);

  return (
    <div className="employee-page">
      <header className="employee-page__header">
        <GoBackButton>Go back</GoBackButton>
        <h1 className="employee-page__heading">Employee Management</h1>
      </header>
      <main className="employee-page__container">
        <Table
          className="employees__table"
          columns={columns}
          dataSource={employees}
          loading={isLoading}
          pagination={{
            current: pagination.page,
            pageSize: DEFAULT_PAGE_LIMIT,
            total,
            position: ['bottomCenter'],
            showSizeChanger: false,
          }}
          onChange={handleTableChange}
          rowKey="id"
          bordered
        />
      </main>
    </div>
  );
}
