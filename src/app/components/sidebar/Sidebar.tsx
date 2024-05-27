// import { sidebarMenu } from "../../../constants/constants"
import {useEffect, useState} from "react"
import { MdSpaceDashboard } from "react-icons/md";
import { FaBookOpen } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { FaChalkboard } from "react-icons/fa";
import { SlCalender } from "react-icons/sl";
import {Link, useLocation, NavLink} from "react-router-dom"

const Sidebar = () => {
    const location =useLocation()
    const [activeLink, setActiveLink] =useState(location.pathname)

    // useEffect(()=>{
    //     setActiveLink(( as any))
    // }, [location.pathname])

  return (
    <div className="w-full  h-full flex flex-col gap-8 px-6 py-2 bg-white text-white">
        <div className=" flex gap-6 flex-col">
            <div className="flex items-center  gap-2">
            <img src="/rsalogo.jpg" alt="logo" className="w-[60px] " />
            {/* <h2 className="text-[16px]  font-bold ">RisingStarAcademy</h2> */}
            </div>
        <hr className="border-[1px] text-gray-400"/>
        </div>
{/* 03045E */}

        {/* menu */}
        <div className="flex-1">
            <h2 className="text-[14px] text-gray-500">Main Menu</h2>
            <ul className="flex flex-col gap-4 p-2 mt-4">
                

                <Link to="/admin" className={`${activeLink.includes( "/") && "bg-[#110c2e] text-white"} flex items-center gap-2 font-semibold cursor-pointer hover:bg-[#bcbdc9] hover:text-black transition duration-150 px-4 py-2 rounded-lg text-gray-700 text-[14px] `}>
                <MdSpaceDashboard size={20} /> Dashboard</Link>    
                
                <NavLink to="/admin/courses" className={`${activeLink.includes( "/courses") && "bg-[#110c2e] text-white"} flex items-center gap-2 font-semibold cursor-pointer hover:bg-[#bcbdc9] hover:text-black transition duration-150 px-4 py-2 rounded-lg text-gray-700 text-[14px] `} >
                <FaBookOpen size={20} className="" /> Courses</NavLink>    
                <Link to="/admin/my-courses" className={`${activeLink.includes( "/my-courses") && "bg-[#110c2e] text-white"} flex items-center gap-2 font-semibold cursor-pointer hover:bg-[#bcbdc9] hover:text-black transition duration-150 px-4 py-2 rounded-lg text-gray-700 text-[14px]`} >
                <FaBookOpen size={20} className="" /> My Courses</Link>    
                <Link to="/admin/users" className={`${activeLink.includes( "/users") && "bg-[#110c2e] text-white"} flex items-center gap-2 font-semibold cursor-pointer hover:bg-[#bcbdc9] hover:text-black transition duration-150 px-4 py-2 rounded-lg text-gray-700 text-[14px] `} >
                <FiUsers size={20} className="" />  Users</Link>    
                <Link to="/admin/tutors" className={`${activeLink.includes( "/tutors") && "bg-[#110c2e] text-white"} flex items-center gap-2 font-semibold cursor-pointer hover:bg-[#bcbdc9] hover:text-black transition duration-150 px-4 py-2 rounded-lg text-gray-700 text-[14px] `} >
                <FiUsers size={20} className="" />  Tutors</Link>    
                <Link to="/admin/notice-board" className={`${activeLink.includes( "/notice-board") && "bg-[#110c2e] text-white"} flex items-center gap-2 font-semibold cursor-pointer hover:bg-[#bcbdc9] hover:text-black transition duration-150 px-4 py-2 rounded-lg text-gray-700  text-[14px]`} >
                <FaChalkboard size={20} className=""  /> Notice board</Link>    
                <Link to="/admin/calender" className={`${activeLink.includes( "/calender") && "bg-[#110c2e] text-white"} flex items-center gap-2 font-semibold cursor-pointer hover:bg-[#bcbdc9] hover:text-black transition duration-150 px-4 py-2 rounded-lg text-gray-700 text-[14px] `} >
                <SlCalender size={20} className="" />  Calender</Link>    
            </ul>
        </div>


        {/* profile */}

        <div className="w-full bg-[#313dac] p-4 rounded-2xl flex items-center gap-2">
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

export default Sidebar