'use client'
import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import DoneIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import AddIcon from '@mui/icons-material/Add';
import TextField from '@mui/material/TextField';
import { visuallyHidden } from '@mui/utils';
type Props = {
    rows: any;
    headCells: any
}
const EnhancedTable = ({ rows, headCells }: Props) => {
    const [order, setOrder] = useState('asc');
    const [orderBy, setOrderBy] = useState('name');
    const [selected, setSelected] = useState([]);
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);
    const [editMode, setEditMode] = useState(null);
    const [newRowData, setNewRowData] = useState({
        name: '',
        calories: '',
        fat: '',
        carbs: '',
        protein: '',
    });

    const handleRequestSort = (property: any) => {
        const isAsc = orderBy === property && order === 'asc';
        setOrder(isAsc ? 'desc' : 'asc');
        setOrderBy(property);
    };

    const handleChangePage = (_: any, newPage: any) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event: any) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    const handleClick = (_: any, id: any) => {
        const selectedIndex = selected.indexOf(id);
        let newSelected: any = [];

        if (selectedIndex === -1) {
            newSelected = newSelected.concat(selected, id);
        } else if (selectedIndex === 0) {
            newSelected = newSelected.concat(selected.slice(1));
        } else if (selectedIndex === selected.length - 1) {
            newSelected = newSelected.concat(selected.slice(0, -1));
        } else if (selectedIndex > 0) {
            newSelected = newSelected.concat(
                selected.slice(0, selectedIndex),
                selected.slice(selectedIndex + 1)
            );
        }

        setSelected(newSelected);
    };

    const handleEditClick = (id: any) => {
        setEditMode(id);
    };

    const handleEditChange = (e: any, id: any, field: any) => {
        const newData = [...rows];
        const index = newData.findIndex((row) => row.id === id);
        newData[index][field] = e.target.value;
        rows[index] = newData[index];
    };

    const handleEditCancel = () => {
        setEditMode(null);
    };

    const handleAddRow = () => {
        const id = rows.length + 1;
        rows.push({
            id,
            ...newRowData,
        });
        setNewRowData({
            name: '',
            calories: '',
            fat: '',
            carbs: '',
            protein: '',
        });
    };

    const isSelected = (id: any) => selected.indexOf(id) !== -1;

    return (
        <Paper>
            <Toolbar>
                <Typography variant="h6" id="tableTitle" component="div">
                    Add
                </Typography>
                <Tooltip title="Add">
                    <IconButton onClick={handleAddRow}>
                        <AddIcon />
                    </IconButton>
                </Tooltip>
            </Toolbar>
            <TableContainer>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell padding="checkbox" style={{ backgroundColor: '#D5F5FE', border: '2px solid #A9EBFF ' }}>
                                <Checkbox />
                            </TableCell>
                            {headCells.map((headCell: any) => (
                                <TableCell key={headCell.id} style={{ backgroundColor: '#D5F5FE', border: '2px solid #A9EBFF ' }}>
                                    <TableSortLabel
                                        active={orderBy === headCell.id}
                                        direction={orderBy === headCell.id ? order : 'asc'}
                                        onClick={() => handleRequestSort(headCell.id)}
                                    >
                                        {headCell.label}
                                        {orderBy === headCell.id ? (
                                            <Box component="span" sx={visuallyHidden}>
                                                {order === 'desc'
                                                    ? 'sorted descending'
                                                    : 'sorted ascending'}
                                            </Box>
                                        ) : null}
                                    </TableSortLabel>
                                </TableCell>
                            ))}
                            <TableCell style={{ backgroundColor: '#D5F5FE', border: '2px solid #A9EBFF ' }}>Edit</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows
                            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                            .map((row: any) => {
                                const isItemSelected = isSelected(row.id);
                                const labelId = `enhanced-table-checkbox-${row.id}`;

                                return (
                                    <TableRow
                                        key={row.id}
                                        hover
                                        onClick={(event) => handleClick(event, row.id)}
                                        role="checkbox"
                                        aria-checked={isItemSelected}
                                        tabIndex={-1}
                                        selected={isItemSelected}
                                    >
                                        <TableCell padding="checkbox" style={{ backgroundColor: row.color, border: '2px solid #e9ecf2 ' }}>
                                            <Checkbox
                                                checked={isItemSelected}
                                                inputProps={{ 'aria-labelledby': labelId }}
                                            />
                                        </TableCell>
                                        {headCells.map((cell: any) => (
                                            <TableCell
                                                key={cell.id}
                                                style={{ color: cell.numeric ? 'red' : 'green', backgroundColor: headCells.disabled ? '#e9ecf2' : row.color, border: '2px solid #e9ecf2 ' }}
                                            >
                                                {editMode === row.id ? (
                                                    <TextField
                                                        value={row[cell.id]}
                                                        onChange={(e) =>
                                                            handleEditChange(e, row.id, cell.id)
                                                        }
                                                    />
                                                ) : (
                                                    row[cell.id]
                                                )}
                                            </TableCell>
                                        ))}
                                        <TableCell style={{ backgroundColor: row.color, border: '2px solid #e9ecf2 ' }}>
                                            {editMode === row.id ? (
                                                <div>
                                                    <IconButton onClick={handleEditCancel}>
                                                        <DoneIcon />
                                                    </IconButton>
                                                    <IconButton>
                                                        <EditIcon />
                                                    </IconButton>
                                                </div>
                                            ) : (
                                                <IconButton onClick={() => handleEditClick(row.id)}>
                                                    <EditIcon />
                                                </IconButton>
                                            )}
                                        </TableCell>
                                    </TableRow>
                                );
                            })}
                    </TableBody>
                </Table>
            </TableContainer>
            <TablePagination
                rowsPerPageOptions={[5, 10, 25]}
                component="div"
                count={rows.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />
        </Paper>
    );
};

export default EnhancedTable;
