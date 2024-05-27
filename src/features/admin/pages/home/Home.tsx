import TutorTable from "@/app/components/tutorTable/TutorTable";
import { HomeNoticeBoard } from "..";
import HomeBox from "../../../../app/components/homeBox/HomeBox"
import HomeChart from "../../../../app/components/homeChart/HomeChart"
import { FiUsers } from "react-icons/fi";
import { SlBookOpen } from "react-icons/sl";
import { useAllUsersQuery } from "@/app/redux/api/userApi";
import { useAllCourseQuery } from "@/app/redux/api/coursesApi";
// import UserChart from "../../../app/components/userChart/UserChart"

const Home = () => {
  const {data:users} =useAllUsersQuery()
  const {data:course} =useAllCourseQuery()
  return (
    <div className="w-full h-full flex flex-col p-5 gap-2 overflow-auto">
        <h1 className="font-bold text-[32px] text-[#7579E7]">Overview</h1>


        <div className="flex flex-col gap-2 sm:gap-1 w-full">
          {/* first row */}
          <div className="flex flex-col sm:flex-row items-center gap-4 p-6">
            <div className="border border-gray-200 w-[292px] sm:w-[320px] h-[160px] rounded-lg bg-white ">
              <HomeBox title="Total Users" link="/admin/users" figure={(users?.allUsers.length as number)} icon={<FiUsers size={20}/>} color="text-[#4fee69]" />
            </div>
            <div className="border border-gray-200 w-[292px] sm:w-[320px] h-[160px] rounded-lg bg-white ">
              <HomeBox title="Total Courses" link="/admin/courses" figure={(course?.courses.length as number)} icon={<SlBookOpen size={20}/>} color="text-[#d24bd6]"/>
            </div>
            <div className="border border-gray-200 w-[292px] sm:w-[320px] h-[160px] rounded-lg bg-white ">
              <HomeBox title="Enrolled" link="/enrolled" figure={10} icon={<FiUsers size={20}/>}  color="text-[#03045E]"/>
            </div>
          </div>



          {/* second row */}
          <div className="flex flex-col sm:flex-row gap-6 px-4 py-2 w-full flex-wrap ">
            <div className="hidden sm:flex border border-gray-200 w-[292px] sm:w-[660px] h-[300px] rounded-lg bg-white">
              <HomeChart />
            </div>

            <div className="border border-gray-200 w-[292px] sm:w-[300px] h-[360px] rounded-lg bg-white overflow-y-auto">
    	        <HomeNoticeBoard />
            </div>

            {/* <div className="hidden sm:flex border border-gray-200 w-[292px] sm:w-[750px] h-[300px] rounded-lg bg-white">
              <TutorTable />
            </div> */}
          </div>
        </div>

   
    </div>
  )
}

export default Home