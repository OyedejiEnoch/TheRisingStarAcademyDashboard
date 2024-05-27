// import {Navbar, Footer, Sidebar } from '../app/components'

import {Navbar, Footer, StudentSidebar } from "../../app/components"
import { Outlet } from 'react-router-dom'


const StudentLayout =()=>{
    return(
        <div className='flex relative h-screen w-full'>
        <div className='hidden sm:flex w-[22%] border-r-[1px] border-gray-100 '>
          <StudentSidebar />
        </div>
  {/* [#f7f6f6 */}
        <div className='flex flex-col justify-between w-full bg-[#faf8fa]'>
          <Navbar />
  
          <Outlet />
          <Footer />
        
        </div>
      </div>
    )
}


export default StudentLayout