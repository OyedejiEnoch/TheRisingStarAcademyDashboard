import {  GridColDef } from '@mui/x-data-grid';
import { DataTable } from '../../../../app/components';
// import { rows } from '../../../constants/constants';
import { useAllUsersQuery } from '@/app/redux/api/userApi';
import { useEffect } from 'react';
import { toast } from 'react-toastify';
import Spinner from '@/app/components/spinner/Spinner';
// import { Button } from "../../../../@/components/ui/button"



const Users =()=>{

  const {data,isError, error, isLoading}=useAllUsersQuery()

  useEffect(()=>{
    if(isError){
      const customError = error as {
        status: number;
        data: {
          message:string
        };

      };
      toast.error(customError.data.message);
    }
    // dispatch(setUsersCount((data?.allUsers.length as number)))

    // console.log(usersCount);
    

  },[error] )

    const columns: GridColDef[] = [
        // { field: 'id', headerName: 'ID', width: 70 },
        {
          field:"avatar", headerName:"Avatar", width:100,
          renderCell:(params)=>{
              return <img className="w-[40px] h-[40px] rounded-full" src={params.row.avatar?.url || "/noavatar.png"} alt="img"/>
          }
      },
        { field: 'name', headerName: 'Name', width: 130 },
        { field: 'email', headerName: 'Email', width: 130 },
        {
          field: 'phoneNo', 
          headerName: 'PhoneNo',
          type: 'number',
          width: 180,
        },
        {
          field: 'fullName',
          headerName: 'Full name',
          description: 'This column has a value getter and is not sortable.',
          sortable: false,
          width: 160,
          valueGetter: (_, row) => `${row.firstName || ''} ${row.lastName || ''}`,
        },
      ];


  

    return (
        <section  className='className="py-4 px-2 sm:p-8 w-full h-full flex flex-col gap-6 overflow-y-auto'>
            <h1 className="font-bold text-[32px]">All Users</h1>
            {/* <Button variant="outline">Button</Button> */}

            <div className="p-2 w-full ">
            { isLoading ? <Spinner /> : <DataTable link="users" route="users" columns={columns} rows={(data?.allUsers as object[])} showDelete={true}/>}
            </div>
        </section>
    )
}


export default Users