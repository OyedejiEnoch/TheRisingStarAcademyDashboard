// import React from 'react'
import { Notifications } from "@/constants/constants"
import { normalize } from "path"
import { IoAddCircleOutline } from "react-icons/io5"
import { Link } from "react-router-dom"

const NoticeBoard = () => {
  return (
    <section className="flex w-full flex-col h-full py-4 px-2 sm:p-8 overflow-y-auto">
        <div className="flex w-full items-center justify-between">
          <h2 className="font-bold text-[32px]" >Notice Board</h2>
          
          <Link to="/course/new" className="flex items-center gap-2 text-lg cursor-pointer font-semibold">
                    <span><IoAddCircleOutline size={32}/></span> 
                    <div className="hidden sm:flex"> 
                    Create Notice </div>
                
              </Link>

        </div>
          <div className="flex flex-col gap-4 p-4 overflow-auto">
           {Notifications.map((notification)=>(
             
             ( <div className="w-full sm:w-[800px] bg-white px-6 py-4 flex flex-col gap-2 ">
                <h2 className="text-[20px] font-semibold">{notification.title}</h2>
                <p className="text-[14px] text-gray-700">{notification.time}</p>
                <p className="text-[14px] text-gray-500">{notification.content}</p>

                <div className="flex justify-end">
                  <span className=" border px-4 py-2 cursor-pointer">View</span>
                </div>
            </div>)
                ))
            
          }
          </div>
    </section>
  )
}

export default NoticeBoard