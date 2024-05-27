import {Link} from "react-router-dom"
import { IoMdBook, IoMdBookmark } from "react-icons/io";
import { useSingleCourseQuery } from "@/app/redux/api/coursesApi";
import { SkeletonCard } from "../skeleton/Skeleton";


type Props={
  courseId:string
}



const StudentCourseCard =({courseId}:Props)=>{

    const {data:course, isLoading}=useSingleCourseQuery(courseId)

    if(isLoading){
      return <SkeletonCard />
    }

    return(
        <div className="w-[320px] border border-gray-100 bg-white  rounded-xl " >
        <div className="w-full ">
            <img src="https://images.pexels.com/photos/1925536/pexels-photo-1925536.jpeg?auto=compress&cs=tinysrgb&w=600" alt="img" 
            className="object-cover w-full rounded-t-xl h-[160px] "/>
        </div>
    
        {/* bottom */}
        <div className="flex flex-col p-4 gap-2">
        <h2 className="font-semibold text-[18px] font-inter">{course?.title}</h2>
        <p className="text-sm text-gray-500">{course?.description} </p>
        </div>
    
    
        <div className="flex items-center justify-between px-4 py-2">
          <span className="flex items-center text-sm text-gray-500 gap-2"><IoMdBook size={24} className="text-[#687EFF]" />{course?.topics?.length} topics</span>
          <span className="flex items-center text-sm text-gray-500 gap-2"><IoMdBookmark size={24} className="text-[#fca3c4]" /> {course?.subCourses?.length} Sub courses</span>
        </div>
    
        <hr />
        <div className="flex justify-end p-2">
            <Link to="/course/123"><span 
            className="flex items-center gap-2 text-sm text-[#201658] cursor-pointer border-2 border-dotted p-2">View course </span></Link>
        </div>
      </div>
    )
}


export default StudentCourseCard