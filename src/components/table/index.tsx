import React, { useState } from "react";
import { Table } from "antd";
import type { ColumnsType, TableRowSelection, TablePaginationConfig } from "antd/es/table";

type DataType = {
  key: string;
  [key: string]: any; // Support for dynamic keys
};

type Props = {
  typeSelect?: "checkbox" | "radio";
  hideSelect?: boolean;
  selectRow?: (selectedRowKeys: React.Key[], selectedRows: DataType[]) => void;
  sort: { value: string; column: string };
  servicesName: string;
  columns: ColumnsType<DataType>;
  dataList: DataType[];
  defaultPageSize?: number;
  pageSizeOptions?: string[];
  onPageChange?: (page: number, pageSize: number) => void;
};

const TableComponent: React.FC<Props> = ({
  typeSelect = "checkbox",
  hideSelect = false,
  selectRow,
  sort,
  servicesName,
  columns,
  dataList,
  defaultPageSize = 25,
  pageSizeOptions = ["5", "10", "25", "30"],
  onPageChange,
}) => {
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(defaultPageSize);

  const rowSelection: TableRowSelection<DataType> | undefined = hideSelect
    ? undefined
    : {
        type: typeSelect,
        onChange: (selectedRowKeys:any, selectedRows:any) => {
          if (selectRow) {
            selectRow(selectedRowKeys, selectedRows);
          }
        },
      };

  // Enhance columns with sorting based on props
  const enhancedColumns = columns.map((col:any) => ({
    ...col,
    sortOrder: col.dataIndex === sort.column ? sort.value : undefined,
  }));

  const paginationConfig: TablePaginationConfig = {
    current: page,
    pageSize,
    pageSizeOptions,
    showSizeChanger: true,
    onShowSizeChange: (current, size) => {
      setPageSize(size);
    },
    onChange: (page, pageSize) => {
      setPage(page);
      setPageSize(pageSize);
      if (onPageChange) {
        onPageChange(page, pageSize);
      }
    },
  };

  return (
    <Table
      rowSelection={rowSelection}
      columns={enhancedColumns}
      dataSource={dataList}
      rowKey="key"
      title={() => servicesName}
      pagination={paginationConfig}
    />
  );
};

export default TableComponent;
