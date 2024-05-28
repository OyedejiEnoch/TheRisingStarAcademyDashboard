// import {
//     Sheet,
//     SheetContent,
//     SheetDescription,
//     SheetHeader,
//     SheetTitle,
//     SheetTrigger,
//   } from "../../../../@/components/ui/sheet"
//   import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdNotificationsOutline } from "react-icons/io";
  import StudentMobileNav from "../mobileNav/StudentMobileNav"
import { useAppSelector } from "@/app/redux/hooks";
import { useStudentProfileQuery } from "@/app/redux/api/userApi";


const Navbar = () => {

  const {data}=useStudentProfileQuery()
  console.log(data)
  const {student}=useAppSelector((state)=>state.student)

  return (
    <nav className="w-full flex justify-end p-4 border-b border-gray-200 bg-white" >

      <div className="hidden sm:flex  gap-4 items-center">

      {student? 
      ( <><div className="relative  p-2">
          <IoMdNotificationsOutline size={24} />
          <span className="absolute top-[-5px] right-[-10px] px-2 bg-red-600 text-sm text-white rounded-lg cursor-pointer">0</span>
        </div>
        <img src="https://images.pexels.com/photos/19993638/pexels-photo-19993638/free-photo-of-man-in-eyeglasses-and-t-shirt.jpeg?auto=compress&cs=tinysrgb&w=600" alt="img" 
        className="rounded-full w-[30px] h-[30px] object-cover cursor-pointer" />
        <h2 className="text-gray-500 text-sm font-semibold ">{student.name}</h2>
        </>)

        :<h2 className="text-gray-500 text-sm font-semibold cursor-pointer">Login</h2>
      }
      </div>

        <div className="sm:hidden">
         <StudentMobileNav />
        </div>
        
    </nav>
  )
}

export default Navbar