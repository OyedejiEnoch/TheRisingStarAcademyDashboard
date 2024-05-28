import './App.css'
import {Routes, Route, BrowserRouter } from "react-router-dom"

import {Home, Courses, Users, SingleUser, NoticeBoard, SingleCourse, Tutors, MyCourses} from "./features/admin/pages"
import {StudentHome, StudentNoticeBoard, StudentCourses} from "./features/student/pages"
import CreateCourse from './features/admin/pages/courses/CreateCourse'
import Login from './features/admin/auth/login/Login'
import StudentLogin from './features/student/auth/login/StudentLogin'
import {ToastContainer} from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
import Register2 from './features/admin/auth/register/Register2'
import AdminBio from './features/admin/auth/register/AdminBio'
import AdminLayout from './features/admin/AdminLayout'
import StudentLayout from './features/student/StudentLayout'
import CreateSubCourse from './features/admin/pages/courses/CreateSubCourse'
// import AdminProtectedRoute from './app/components/AdminProtectedRoute'
// import StudentProtectedRoute from './app/components/StudentProtectedRoute'

function App() {

//   const Layout =()=>{
//     return(  
//     <div className='flex relative h-screen w-full'>
//       <div className='hidden sm:flex w-[22%] border-r-[1px] border-gray-100 '>
//         <Sidebar />
//       </div>
// {/* [#f7f6f6 */}
//       <div className='flex flex-col justify-between w-full bg-[#faf8fa]'>
//         <Navbar />

//         <Outlet />
//         <Footer />
      
//       </div>
//     </div>)
//   }

  // const router = createBrowserRouter([
  //   {
  //     path:"/",
  //     element:<Layout />,
  //     children: [
  //       {
  //         path:"/",
  //         element:<Home />
  //       },
  //       {
  //         path:"/courses",
  //         element:<Courses />
  //       },
  //       {
  //         path:"/my-courses",
  //         element:<MyCourses />
  //       },
  //       {
  //         path:"/users",
  //         element:<Users />
  //       },
  //       {
  //         path:"/user/:id",
  //         element:<SingleUser />
  //       },
  //       {
  //         path:"/tutors",
  //         element:<Tutors />
  //       },
  //       {
  //         path:"/notice-board",
  //         element:<NoticeBoard />
  //       },
  //       {
  //         path:"/calender",
  //         element:<Home />
  //       },
  //       {
  //         path:"/course/:id",
  //         element:<SingleCourse />
  //       },
  //       {
  //         path:"/course/new",
  //         element:<CreateCourse />
  //       },
  //     ]
  //   },
  //   {
  //     path:"/admin/login",
  //     element:<Login />
  //   },
  //   {
  //     path:"/admin/register",
  //     element:<Register2 />
  //   },
  //   // {
  //   //   path:"/admin/register/bio",
  //   //   element:<AdminBio />
  //   // }
  // ])

  return (
    <>
    <ToastContainer
    position="bottom-center"
    autoClose={5000}
    hideProgressBar={false}
    newestOnTop={false}
    closeOnClick
    rtl={false}
    pauseOnFocusLoss
    draggable
    pauseOnHover
    theme="light"
    
    />
      <BrowserRouter>
        <Routes>
          <Route path="/admin">
            <Route path='login' element={<Login />} />
            <Route path='register' element={<Register2 />} />
            <Route path='bio' element={<AdminBio />} />
          </Route>
          <Route path="/">
            <Route path='/' element={<StudentLogin />} />
          </Route>

          <Route path='/student' element={<StudentLayout />}>
            <Route index element={<StudentHome />} />
            <Route path='my-courses' element={<StudentCourses />} />
            <Route path='notice-board' element={<StudentNoticeBoard />} />

          </Route>


          <Route path='/admin' element={ <AdminLayout /> }>
            <Route index element={<Home />} />
            <Route path='courses' element={<Courses />} />
            <Route path='courses/:id' element={<SingleCourse />} />
            <Route path='my-courses' element={<MyCourses />} />
            <Route path='users' element={<Users />} />
            <Route path='users/:id' element={<SingleUser />} />
            <Route path='tutors' element={<Tutors />} />
            <Route path='notice-board' element={<NoticeBoard />} />
            <Route path='course/:id' element={<SingleCourse />} />
            <Route path='course/new' element={<CreateCourse />} />
            <Route path='sub-course/:id' element={<CreateSubCourse />} />
          </Route>
        </Routes>
      
      </BrowserRouter>
    </>
  )
}

export default App
