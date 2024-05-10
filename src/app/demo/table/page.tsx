import React from 'react'
import Table from '@/components/table/table'

interface Props {

}
const page = (props: Props) => {
    const data = [
        {
            id: 1, name: 'John Doe', age: 30, dob: new Date('1990-01-01'), selected: true,
            color: '#f2f2f0'
        },
        { id: 2, name: 'Jane Smith', age: 25, dob: new Date('1995-05-15'), selected: true, color: '#f2f2f0' },
    ];
    const columns = [
        {
            header: 'id',
            key: 'ID',
            label: 'ID',
            type: 'text',
            disabled: true
        },
        {
            header: 'name',
            key: 'Name',
            label: 'Name',
            type: 'text',
            disabled: true
        },
        {
            header: 'dob',
            key: 'Dob',
            label: 'Dob',
            type: 'text',
            disabled: false
        },
    ];
    return (
        <div className='m-5'>
            <Table headCells={columns} rows={data}></Table>
        </div>
    )
}

export default page