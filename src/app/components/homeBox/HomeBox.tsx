import { Link } from "react-router-dom"
import { FaArrowRightLong } from "react-icons/fa6";
import { ReactNode } from "react";
// import { LineChart, Line, Tooltip, ResponsiveContainer, CartesianGrid, XAxis, YAxis, Legend } from 'recharts';
// import { chartData } from "@/constants/constants";


type Prop ={
    title:string,
    icon:ReactNode,
    figure:number,
    link:string,
    color?:string
}



const HomeBox = ({title, figure, link, icon, color}:Prop) => {
  return (
    <div className="w-full bg-white h-full p-4 flex flex-col gap-4 rounded-lg">
        <div className="flex items-center gap-4">
            <span className={`${color}`}>{icon}</span>
            <h2 className="font-inter" >{title}</h2>
        </div>


        <div className="flex-1">
            <h1 className="text-3xl font-bold text-[#2b1e5c]">{figure}</h1>
        </div>

        <div className="flex justify-between items-center">
           
            <div className="flex items-center gap-2">
                <span className="text-[#3ec555] text-sm">32%</span>
                <span className="text-sm text-gray-600">this week</span>
            </div>
           


            <Link to={`/${link}`} className="text-[12px] flex items-center gap-2 text-[#03045E]">View More <FaArrowRightLong size={20} /></Link>
        </div>

        <div className="w-full h-full">

        </div>
    </div>
  )
}

export default HomeBox


// <div className="h-full w-full">
// <ResponsiveContainer width="99%" height="100%">
// <LineChart data={chartData}>
//   <Tooltip
//   contentStyle={{background:"transparent", border:"none"}}
//   labelStyle={{display:"none"}}
//   position={{x:30, y:50}}
//   />
//   <Line type="monotone" dataKey={"users"} stroke={"4fee69"} strokeWidth={2} dot={false}/>
// </LineChart>
// </ResponsiveContainer>
// </div>