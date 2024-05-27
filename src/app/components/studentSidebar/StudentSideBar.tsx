import {useState} from "react"
import { MdSpaceDashboard } from "react-icons/md";
import { FaBookOpen } from "react-icons/fa";
import { FaChalkboard } from "react-icons/fa";
import { SlCalender } from "react-icons/sl";
import {Link, useLocation} from "react-router-dom"

const StudentSidebar = () => {
    const location =useLocation()
    const [activeLink] =useState(location.pathname)


  return (
    <div className="w-full  h-full flex flex-col gap-8 px-6 py-2 bg-white text-white">
        <div className=" flex gap-6 flex-col">
            <div className="flex items-center  gap-2">
            <img src="/rsalogo.jpg" alt="logo" className="w-[60px] " />
            </div>
        <hr className="border-[1px] text-gray-400"/>
        </div>


        {/* menu */}
        <div className="flex-1">
            <h2 className="text-[14px] text-gray-500">Main Menu</h2>
            <ul className="flex flex-col gap-4 p-2 mt-4">
                

                <Link to="/student" className={`${activeLink.includes("") && "bg-[#110c2e] text-white"} font-inter flex items-center gap-2 font-semibold cursor-pointer hover:bg-[#bcbdc9] hover:text-black transition duration-150 px-4 py-2 rounded-lg text-gray-700 text-[14px] `}>
                <MdSpaceDashboard /> Dashboard</Link>   

                <Link to="/student/my-courses" className={`${activeLink.includes("/my-courses") && "bg-[#110c2e] text-white"} font-inter flex items-center gap-2 font-semibold cursor-pointer hover:bg-[#bcbdc9] hover:text-black transition duration-150 px-4 py-2 rounded-lg text-gray-700 text-[14px]`} >
                <FaBookOpen size={20} className="" /> My Courses</Link>    
                 
                <Link to="/student/notice-board" className={`${activeLink.includes("/notice-board") && "bg-[#110c2e] text-white"} font-inter flex items-center gap-2 font-semibold cursor-pointer hover:bg-[#bcbdc9] hover:text-black transition duration-150 px-4 py-2 rounded-lg text-gray-700  text-[14px]`} >
                <FaChalkboard size={20} className=""  /> Notice</Link> 

                <Link to="/student/calender" className={`${activeLink.includes("/calender") && "bg-[#110c2e] text-white"} font-inter flex items-center gap-2 font-semibold cursor-pointer hover:bg-[#bcbdc9] hover:text-black transition duration-150 px-4 py-2 rounded-lg text-gray-700 text-[14px] `} >
                <SlCalender size={20} className="" />  Calender</Link>    
            </ul>
        </div>


        {/* profile */}

        <div className="w-full bg-[#110c2e] p-4 rounded-2xl flex items-center gap-2">
            <div>

            </div>

            <div>
                <h2 className="text-semibold text-[16px] ">Enoch Oyedeji</h2>
                <p className="text-sm text-gray-200">Fullstack web developer</p>
            </div>
        </div>
    </div>
  )
}

export default StudentSidebar