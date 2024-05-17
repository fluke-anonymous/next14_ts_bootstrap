import React, { useState } from 'react';

interface TableColumn {
    key: string;
    header: string;
}

interface TableRow {
    id: number;
    [key: string]: string | number | Date | undefined;
}

interface TableProps {
    data: TableRow[];
    columns: TableColumn[];
}

const TableComponent: React.FC<TableProps> = ({ data, columns }) => {
    const [rows, setRows] = useState<TableRow[]>(data);
    const [pageSize, setPageSize] = useState<number>(5);
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [sortKey, setSortKey] = useState<string>('');
    const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');
    const [filters, setFilters] = useState<{ [key: string]: string }>({});

    const handleAddRow = () => {
        const newRow: TableRow = { id: rows.length + 1 };
        columns.forEach(column => {
            if (column.key === 'date') {
                newRow[column.key] = new Date(); // Initialize date column with current date
            } else {
                newRow[column.key] = ''; // Initialize other columns with an empty string
            }
        });
        setRows([...rows, newRow]);
    };

    const handleTextChange = (id: number, key: string, value: string) => {
        const updatedRows = rows.map(row => (row.id === id ? { ...row, [key]: value } : row));
        setRows(updatedRows);
    };

    const handleNumberChange = (id: number, key: string, value: number) => {
        const updatedRows = rows.map(row => (row.id === id ? { ...row, [key]: value } : row));
        setRows(updatedRows);
    };

    const handleDateChange = (id: number, key: string, value: Date) => {
        const updatedRows = rows.map(row => (row.id === id ? { ...row, [key]: value } : row));
        setRows(updatedRows);
    };

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
    };

    const handleSort = (key: string) => {
        if (sortKey === key) {
            setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
        } else {
            setSortKey(key);
            setSortOrder('asc');
        }
    };

    const handleFilterChange = (key: string, value: string) => {
        setFilters({ ...filters, [key]: value });
    };

    const applyFilters = () => {
        let filteredRows = data.slice(); // Create a copy of the original data

        // Apply each filter
        columns.forEach(column => {
            const filterValue = filters[column.key]?.toLowerCase();
            if (filterValue) {
                filteredRows = filteredRows.filter(row =>
                    String(row[column.key]).toLowerCase().includes(filterValue)
                );
            }
        });

        setRows(filteredRows);
    };

    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    const sortedRows = sortKey ? [...rows].sort((a, b) => {
        if (sortOrder === 'asc') {
            return a[sortKey] > b[sortKey] ? 1 : -1;
        } else {
            return a[sortKey] < b[sortKey] ? 1 : -1;
        }
    }) : rows;

    const currentRows = sortedRows.slice(startIndex, endIndex);

    return (
        <div>
            <button onClick={handleAddRow}>Add Row</button>
            <table>
                <thead>
                    <tr>
                        {columns.map(column => (
                            <th key={column.key} onClick={() => handleSort(column.key)}>
                                {column.header} {sortKey === column.key && (
                                    <span>{sortOrder === 'asc' ? '▲' : '▼'}</span>
                                )}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        {columns.map(column => (
                            <th key={column.key}>
                                <input
                                    key={column.key}
                                    type="text"
                                    placeholder={`Filter ${column.header}`}
                                    value={filters[column.key] || ''}
                                    onChange={(e) => handleFilterChange(column.key, e.target.value)}
                                    onBlur={applyFilters}
                                />
                            </th>
                        ))}
                    </tr>
                    {currentRows.map(row => (
                        <tr key={row.id}>
                            {columns.map(column => (
                                <td key={column.key}>
                                    {column.key === 'date' ? (
                                        <input
                                            type="date"
                                            value={row[column.key]?.toISOString().split('T')[0] || ''}
                                            onChange={(e) => handleDateChange(row.id, column.key, new Date(e.target.value))}
                                        />
                                    ) : (
                                        <input
                                            type="text"
                                            value={row[column.key] as string}
                                            onChange={(e) => handleTextChange(row.id, column.key, e.target.value)}
                                        />
                                    )}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
            <select value={pageSize} onChange={(e) => setPageSize(parseInt(e.target.value))}>
                <option value={5}>5</option>
                <option value={10}>10</option>
                <option value={20}>20</option>
            </select>
            <Pagination currentPage={currentPage} pageSize={pageSize} totalItems={rows.length} onPageChange={handlePageChange} />
        </div>
    );
};

interface PaginationProps {
    currentPage: number;
    pageSize: number;
    totalItems: number;
    onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ currentPage, pageSize, totalItems, onPageChange }) => {
    const totalPages = Math.ceil(totalItems / pageSize);

    const handlePrevClick = () => {
        if (currentPage > 1) {
            onPageChange(currentPage - 1);
        }
    };

    const handleNextClick = () => {
        if (currentPage < totalPages) {
            onPageChange(currentPage + 1);
        }
    };

    return (
        <div>
            <button onClick={handlePrevClick} disabled={currentPage === 1}>Prev</button>
            <span>{currentPage} / {totalPages}</span>
            <button onClick={handleNextClick} disabled={currentPage === totalPages}>Next</button>
        </div>
    );
};

export default TableComponent;
