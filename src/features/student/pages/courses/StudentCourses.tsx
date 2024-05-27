import { Link } from "react-router-dom";
import { IoAddCircleOutline } from "react-icons/io5";
import { useAppSelector } from "@/app/redux/hooks";
import StudentCourseCard from "@/app/components/courseCard/StudentCourseCard";

const Courses =()=>{

    // const {data, isLoading}=useAllCourseQuery()
    const {student} =useAppSelector((state)=> state.student)
    // fetch all courses enrolled by student

    return (
        <section className="py-4 px-2 sm:p-8 w-full h-full flex flex-col gap-6 overflow-y-auto">
            <div className="flex items-center justify-between px-2">
                <h1 className="font-bold text-[32px]">Courses</h1>

                <div className="flex items-center gap-2 text-sm cursor-pointer font-semibold">
                    <span><IoAddCircleOutline size={32}/></span> 
                    <Link to="/course/new" className="hidden sm:flex">
                    Add New Course
                    </Link>
                </div>
            </div>

            {student?.myCourses.length ===0 ?<div>
                    <div className="w-full h-screen flex flex-col justify-center items-center">
                        <img src="/Oops.png" alt="img" className="h-[400px]"  />
                        <h2>Oops! You haven't enrolled for a course</h2>
                        </div>
                </div> :

                
                
                <div className="grid md:grid-cols-3 lg:mt-6 gap-6 p-2 ">
                {
                
                student?.myCourses.map((courseId)=>(

                    <StudentCourseCard courseId={courseId} />
                ))
                }
            </div>}
        </section>
    )
}

export default Courses