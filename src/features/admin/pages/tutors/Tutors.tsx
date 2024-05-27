import {  GridColDef } from '@mui/x-data-grid';
import { DataTable } from '../../../../app/components';
// import { tutorRows } from '../../../constants/constants';
import { useAllTutorQuery } from '@/app/redux/api/userApi';
import { useEffect } from 'react';
import { toast } from 'react-toastify';
import Spinner from '@/app/components/spinner/Spinner';


const Tutors = () => {

    const {data,isError, error, isLoading} =useAllTutorQuery();

    console.log(data)

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
        {
          field:"avatar", headerName:"Avatar", width:100,
          renderCell:(params)=>{
              return <img className="w-[40px] h-[40px] rounded-full" src={params.row.avatar?.url || "/noavatar.png"} alt="img"/>
          }
      },
        { field: 'name', headerName: 'Name', width: 150 },
        { field: 'email', headerName: 'Email', width: 150 },
        { field: 'course', headerName: 'Course', width: 150 },
        {
          field: 'phoneNo', 
          headerName: 'Phone No',
          type: 'number',
          width: 180,
        },
     
      ];


  return (
        <section  className='className="py-4 px-2 sm:p-8 w-full h-full flex flex-col gap-6 overflow-y-auto'>
            <h1 className="font-bold text-[32px]">All Tutors</h1>
            {/* <Button variant="outline">Button</Button> */}

            <div className="p-2 w-full ">
            { isLoading ? <Spinner /> : <DataTable link="admin/tutors" route="tutors" columns={columns} rows={(data?.allTutors as object[])} showDelete={true}/>}
            </div>
        </section>
  )
}

export default Tutors