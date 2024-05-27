import { DataGrid, GridColDef, GridToolbar } from '@mui/x-data-grid';
import { MdDeleteForever, MdEdit } from 'react-icons/md';
import "./DataTable.css"
import {v4 as uuidv4} from "uuid"
import {Link} from "react-router-dom"
import DeleteDrawer from '../deleteDrawer/DeleteDrawer';


type Props ={
    columns: GridColDef[],
    rows:object[],
    link?:string,
    image?:string,
    route:string,
    showDelete?:boolean,
    page?:string
}


const handleDelete =({id}:any)=>{

}

const DataTable = (props:Props) => {

    const actionColumn : GridColDef ={field: 'action', headerName: 'Actions', width: 200, renderCell:(params)=>{
        return(
        
            <div className="flex items-center w-full h-full gap-2 cursor-pointer">
                 <Link to={`/${props.link}/${params.row._id}`} >
                    <span className="text-[#3ec555] outline-dashed outline-1 p-2   "> View</span>
                </Link>
           
            {props.page === "tutor" ? "" : <div className="delete" onClick={()=> handleDelete(params.row._id)} >
              {/* <span className="text-[#e90404]"><MdDeleteForever size={24} /> </span> */}
              <DeleteDrawer />
            </div>}
                                 
            </div>
            
        )
      } }

      const generateUniqueId =()=>{
        return uuidv4()
      }

  return (
    <div className="dataTable">
    <DataGrid
        className="bg-white p-[20px] "
         rows={props.rows}
         columns={[...props.columns, actionColumn]}
         getRowId={generateUniqueId}
         initialState={{
           pagination: {
             paginationModel: {
               pageSize: 8,
             },
           },
         }}
         slots={{toolbar:GridToolbar}}
         slotProps={{
             toolbar:{
                 showQuickFilter:true,
                 quickFilterProps:{debounceMs:500}
             }
         }}
         pageSizeOptions={[5]}
         checkboxSelection
         disableRowSelectionOnClick
         disableColumnFilter
         disableDensitySelector
         disableColumnSelector
   />
 </div>
  )
}

export default DataTable