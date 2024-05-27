// import React from 'react'
import {  GridColDef } from '@mui/x-data-grid';
import { DataTable } from '../../../app/components';
import { tutorRows } from '../../../constants/constants';


const TutorTable = () => {

  const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'name', headerName: 'name', width: 200 },
    { field: 'email', headerName: 'email', width: 200 },
    {
      field: 'phoneNumber', 
      headerName: 'Phone No',
      type: 'number',
      width: 100,
    },

  ];


  return (
    <section className="w-full h-full " >
        <div className="p-2 w-full ">
            <DataTable link="admin/users" route="tutor" columns={columns} rows={tutorRows} page="tutor" />
        </div>
    </section>
  )
}

export default TutorTable