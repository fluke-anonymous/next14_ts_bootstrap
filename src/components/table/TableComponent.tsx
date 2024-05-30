import React, { useState } from 'react';
import { DataTable, DataTableRowEditCompleteEvent } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { Dropdown } from 'primereact/dropdown';
import { Calendar } from 'primereact/calendar';
import { Toolbar } from 'primereact/toolbar';

interface EditableTableProps {
    dataList: any[];
    columns: any[];
    checkedRows?: any[];
    addNewRow: (newRow: any) => void;
}

const EditableTable: React.FC<EditableTableProps> = ({ dataList, columns, checkedRows, addNewRow }) => {
    const [data, setData] = useState(dataList);
    const [newRow, setNewRow] = useState<any>({});

    const onRowEditComplete = (e: DataTableRowEditCompleteEvent) => {
        if (!e.data || e.index === undefined) return;

        const updatedData = [...data];
        updatedData[e.index] = e.data;
        setData(updatedData);
    };

    const onAddNewRow = () => {
        if (!newRow) return;
        addNewRow(newRow);
        setData([...data, { ...newRow, id: data.length + 1 }]);
        setNewRow({});
    };

    const renderColumns = () => {
        return columns.map((col) => {
            const { field, header, editor, sortable = true, filter = true } = col;
            return (
                <Column
                    key={field}
                    field={field}
                    header={header}
                    sortable={sortable}
                    filter={filter}
                    editor={(options) => {
                        if (editor === 'text') {
                            return (
                                <InputText
                                    type="text"
                                    value={options.value}
                                    onChange={(e) => options.editorCallback(e.target.value)}
                                />
                            );
                        }
                        if (editor === 'dropdown') {
                            return (
                                <Dropdown
                                    value={options.value}
                                    options={options.options}
                                    onChange={(e) => options.editorCallback(e.value)}
                                />
                            );
                        }
                        if (editor === 'calendar') {
                            return (
                                <Calendar
                                    value={options.value}
                                    onChange={(e) => options.editorCallback(e.value)}
                                />
                            );
                        }
                        return null;
                    }}
                    body={(rowData) => {
                        if (field === 'date') {
                            return new Date(rowData[field]).toLocaleDateString();
                        }
                        return rowData[field];
                    }}
                />
            );
        });
    };

    const addNewRowInputs = (
        <div className="p-grid p-fluid">
            {columns.map((col, i) => (
                <div className="p-col" key={i}>
                    {col.editor === 'text' && (
                        <InputText
                            placeholder={col.header}
                            value={newRow[col.field] || ''}
                            onChange={(e) => setNewRow({ ...newRow, [col.field]: e.target.value })}
                        />
                    )}
                    {col.editor === 'dropdown' && (
                        <Dropdown
                            placeholder={col.header}
                            value={newRow[col.field] || ''}
                            options={col.options}
                            onChange={(e) => setNewRow({ ...newRow, [col.field]: e.value })}
                        />
                    )}
                    {col.editor === 'calendar' && (
                        <Calendar
                            placeholder={col.header}
                            value={newRow[col.field] || null}
                            onChange={(e) => setNewRow({ ...newRow, [col.field]: e.value })}
                        />
                    )}
                </div>
            ))}
            <div className="p-col">
                <Button label="Add" icon="pi pi-check" onClick={onAddNewRow} />
            </div>
        </div>
    );

    return (
        <div>
            <Toolbar className="p-mb-4" left={addNewRowInputs} />
            <DataTable value={data} editMode="row" dataKey="id" paginator rows={10} rowsPerPageOptions={[5, 10, 20]} sortMode="multiple" filterDisplay="row" onRowEditComplete={onRowEditComplete}>
                {renderColumns()}
                <Column rowEditor headerStyle={{ width: '7rem' }} bodyStyle={{ textAlign: 'center' }}></Column>
            </DataTable>
        </div>
    );
};

export default EditableTable;
