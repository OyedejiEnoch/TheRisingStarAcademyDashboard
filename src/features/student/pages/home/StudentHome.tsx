import { HomeNoticeBoard } from "..";
import HomeBox from "../../../../app/components/homeBox/HomeBox"
import HomeChart from "../../../../app/components/homeChart/HomeChart"
import { FiUsers } from "react-icons/fi";
import { SlBookOpen } from "react-icons/sl";

const StudentHome = () => {
  return (
    <div className="w-full h-full flex flex-col p-5 gap-2 overflow-auto">
        <h1 className="font-bold text-[32px] font-inter ">Student's Dashboard</h1>


        <div className="flex flex-col gap-2 sm:gap-1 w-full">
          {/* first row */}
          <div className="flex flex-col sm:flex-row items-center gap-4 p-6">
            <div className="border border-gray-100 w-[292px] sm:w-[320px] h-[260px] flex justify-center items-center rounded-lg bg-white ">
              <img src="/home.png" className="w-[200px]" />
            </div>
            <div className="border border-gray-200 w-[292px] sm:w-[320px] h-[160px] rounded-lg bg-white ">
              <HomeBox title="Total Courses" link="/courses" figure={22} icon={<SlBookOpen size={20}/>} color="text-[#d24bd6]"/>
            </div>
            <div className="border border-gray-200 w-[292px] sm:w-[320px] h-[160px] rounded-lg bg-white ">
              <HomeBox title="Enrolled" link="/enrolled" figure={16} icon={<FiUsers size={20}/>}  color="text-[#03045E]"/>
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

          </div>
        </div>

   
    </div>
  )
}

export default StudentHome