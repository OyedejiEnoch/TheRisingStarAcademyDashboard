// import {Navbar, Footer, Sidebar } from '../app/components'

import {AdminNavbar, Footer, Sidebar } from "../../app/components"
import { Outlet } from 'react-router-dom'


const AdminLayout =()=>{
    return(
        <div className='flex relative h-screen w-full'>
        <div className='hidden sm:flex w-[22%] border-r-[1px] border-gray-100 '>
          <Sidebar />
        </div>
  {/* [#f7f6f6 */}
        <div className='flex flex-col justify-between w-full bg-[#faf8fa]'>
          <AdminNavbar />
  
          <Outlet />
          <Footer />
        
        </div>
      </div>
    )
}


export default AdminLayout