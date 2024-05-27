import { Link } from "react-router-dom";
import {CourseCard} from "../../../../app/components"
import { IoAddCircleOutline } from "react-icons/io5";
import { useAllCourseQuery } from "@/app/redux/api/coursesApi";
import { SkeletonCard } from "@/app/components/skeleton/Skeleton";

const Courses =()=>{

    const array=[1,2,3,4,5,6,7,8,9]
    const {data, isLoading}=useAllCourseQuery()

    return (
        <section className="py-4 px-2 sm:p-8 w-full h-full flex flex-col gap-6 overflow-y-auto">
            <div className="flex items-center justify-between px-2">
                <h1 className="font-bold text-[32px]">Courses</h1>

                <div className="flex items-center gap-2 text-sm cursor-pointer font-semibold">
                    <span><IoAddCircleOutline size={32}/></span> 
                    <Link to="/admin/course/new" className="hidden sm:flex">
                    Add New Course
                    </Link>
                </div>
            </div>

            <div className="grid md:grid-cols-3 lg:mt-6 gap-6 p-2 ">

                {isLoading ? array.map((_)=>(
                    <SkeletonCard />
                )) :

                data?.courses.map((course)=>(
                                        
                    <CourseCard course={course} />
                
                ))
                }
            </div>
        </section>
    )
}

export default Courses