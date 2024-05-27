import {
    Sheet,
    SheetContent,
  
    SheetTitle,
    SheetTrigger,
  } from "../ui/sheet"
  import { RxHamburgerMenu } from "react-icons/rx";
  import { MdSpaceDashboard } from "react-icons/md";
import { FaBookOpen } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { FaChalkboard } from "react-icons/fa";
import { SlCalender } from "react-icons/sl";
import {Link} from "react-router-dom"
//   SheetDescription,
// SheetHeader,

const MobileNav = () => {
  return ( 
    
    <section className="w-full max-w-[264px]" >
   <Sheet>
      <SheetTrigger><RxHamburgerMenu size={24} /></SheetTrigger>    
      <SheetContent side="left" className="border-none w-[300px] sm:w-[540px]">
        {/* <SheetHeader>
       
        </SheetHeader> */}

        <div className="w-full  h-full flex flex-col gap-8  bg-white">
        <SheetTitle className=" flex gap-6 flex-col">
          <h2 className="text-[20px] font-bold ">RisingStarAcademy</h2>
        <hr className="border-[1px] text-gray-400"/>
        </SheetTitle>


        {/* menu */}
        <div className="flex-1">
            <h2 className="text-[14px] text-gray-500">Main Menu</h2>
            <ul className="flex flex-col gap-4 p-2 mt-4">
                <Link to="/" className="flex items-center gap-2 font-semibold cursor-pointer hover:bg-gray-200 transition duration-150 px-4 py-2 rounded-2xl text-[#03045E]" >
                <MdSpaceDashboard className="text-[#03045E]" size={20}/> Dashboard</Link>    
                <Link to="/courses" className="flex items-center gap-2 font-semibold cursor-pointer hover:bg-gray-200 transition duration-150 px-4 py-2 rounded-2xl text-[#03045E]" >
                <FaBookOpen size={20} className="text-[#03045E]" /> Courses</Link>    
                <Link to="/users" className="flex items-center gap-2 font-semibold cursor-pointer hover:bg-gray-200 transition duration-150 px-4 py-2 rounded-2xl text-[#03045E]" >
                <FiUsers size={20} className="text-[#03045E]" />  Users</Link>    
                <Link to="/notice-board" className="flex items-center gap-2 font-semibold cursor-pointer hover:bg-gray-200 transition duration-150 px-4 py-2 rounded-2xl text-[#03045E]" >
                <FaChalkboard size={20} className="text-[#03045E]"  /> Notice board</Link>    
                <Link to="/calender" className="flex items-center gap-2 font-semibold cursor-pointer hover:bg-gray-200 transition duration-150 px-4 py-2 rounded-2xl text-[#03045E]" >
                <SlCalender size={20} className="text-[#03045E]" />  Calender</Link>    
            </ul>
        </div>


        {/* profile */}

        <div className="w-full bg-gray-300 p-4 rounded-2xl flex items-center gap-2">
            <div>

            </div>

            <div>
                <h2 className="text-semibold text-[16px] ">Enoch Oyedeji</h2>
                <p className="text-sm text-gray-500">Fullstack web developer</p>
            </div>
        </div>
    </div>

      </SheetContent>
    </Sheet>


        
    </section>
  )
}

export default MobileNav