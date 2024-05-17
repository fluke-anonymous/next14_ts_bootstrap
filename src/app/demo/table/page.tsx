// App.js
'use client'
import React, { useState, useEffect } from 'react';
import Table from '@/components/table/table';


const Page = () => {
    const data = [
        { id: 1, text: 'Text 1', number: 10, date: new Date('2024-05-17') },
        { id: 2, text: 'Text 2', number: 20, date: new Date('2024-05-18') },
        // Add more data as needed
      ];
    
      const columns = [
        { key: 'text', header: 'Text' },
        { key: 'number', header: 'Number' },
        { key: 'date', header: 'Date' },
      ];
    
      return (
        <div>
          <Table data={data} columns={columns} />
        </div>
      );
    };

export default Page;
