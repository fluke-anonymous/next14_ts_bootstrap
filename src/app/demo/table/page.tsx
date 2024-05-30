'use client'
import React, { useState, useEffect } from 'react';
import Table from '@/components/table/TableComponent';

const Page = () => {
  const [data, setData] = useState([
    { id: 1, name: 'John Doe', date: new Date(), status: 'Active' },
    { id: 2, name: 'Jane Roe', date: new Date(), status: 'Inactive' },
  ]);

  const columns = [
    { field: 'name', header: 'Name', editor: 'text' },
    { field: 'date', header: 'Date', editor: 'calendar' },
    { field: 'status', header: 'Status', editor: 'dropdown', options: [{ label: 'Active', value: 'Active' }, { label: 'Inactive', value: 'Inactive' }] },
  ];

  const addNewRow = (newRow: any) => {
    setData([...data, { ...newRow, id: data.length + 1 }]);
  };

  return (
    <div>
      <h1>Editable Table</h1>
      <Table dataList={data} columns={columns} addNewRow={addNewRow} />
    </div>
  );
};

export default Page;
