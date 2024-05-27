
import { useEffect, useState } from "react";
import { useUpdateMyProfileMutation } from "../../../../app/redux/api/userApi";
import { toast } from "react-toastify";
import {useNavigate} from "react-router-dom"
// import Navbar from "../../../app/components/layout/navbar/Navbar"

const AdminBio = () => {

  const navigate =useNavigate()
  const [updateMyProfile, {isLoading, isSuccess, error}]=useUpdateMyProfileMutation()
  

  useEffect(()=>{
    if(error){
      const customError = error as {
          status: number;
          data: {
            message:string
          };
          // Add any other properties that your error object contains
        };
      toast.error(customError.data?.message)
  }

    if(isSuccess){
      toast.success("Registered Successfully")
      navigate("/admin")
    }

  }, [error, isSuccess])

  const [credentials, setCredentials]=useState({
    phoneNo:"",
    bio:"",
    profession:"",
    course:"",
  })

  const handleChange =(e:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>)=>{
    const {name, value}=e.target

    setCredentials((prevValue)=>{
      return {...prevValue, [name]:value}
    })
  }
  

  const handleSubmit =(e:React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault()
    updateMyProfile(credentials)
  }


  return (
    <section className="w-full h-screen overflow-auto ">
      <div className="w-full flex justify-center  h-screen overflow-auto ">

        {/* left */}
        <div className="flex-1 hidden sm:flex ">
          <div className="w-full relative">
          <h2 className="absolute bottom-10 right-10 font-inter text-white">Rising Star Academy</h2>
          <div className="absolute inset-0 bg-black opacity-60 z-10"></div>
            <img src="/background.jpg" alt="background " className="h-screen w-full" />
          </div>
        </div>

          {/* right */}
          <div className="flex-2 w-full sm:w-[50%] flex flex-col items-center justify-center bg-white  px-6 sm:px-4 py-6 rounded-xl shadow ">
            <p className="text-lg sm:text-2xl    font-bold mt-2 flex  w-full justify-start text-start sm:text-center sm:justify-center">Register As A Facilitator  </p>
            <p className="text-sm text-gray-500 mt-2 ">Fill in your details as a facilitator </p>

                

            <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full sm:w-[400px] mt-4 h-screen overflow-auto ">
                    <div className="flex flex-col gap-2">
                      <label htmlFor="PhoneNo" className="font-semibold text-[16px]" >PhoneNo</label>
                      <div className="relative">
                        <input 
                          id="PhoneNo" 
                          type="text" 
                          name="phoneNo"
                          value={credentials.phoneNo}
                          onChange={handleChange}
                          placeholder="+234" 
                          className="w-full px-4 py-3 rounded-lg border-[1px] border-gray-300 outline-blue-900"
                          />
                      </div>
                  </div>

                  <div className="flex flex-col gap-2">
                      <label htmlFor="Bio" className="font-semibold text-[16px]" >Bio</label>
                      <div className="relative">
                        <textarea 
                          id="Bio" 
                          name="bio"
                          value={credentials.bio}
                          onChange={handleChange}
                          placeholder="Bio" 
                          className="w-full px-4 py-3 rounded-lg border-[1px] border-gray-300 outline-blue-900"
                          />
                      </div>
                  </div>


                  <div className="flex flex-col gap-2">
                      <label htmlFor="Profession" className="font-semibold text-[16px]" >Profession</label>
                      <div className="relative">
                        <input 
                          id="Profession" 
                          type="text" 
                          name="profession"
                          value={credentials.profession}
                          onChange={handleChange}
                          placeholder="Developer" 
                          className="w-full px-4 py-3 rounded-lg border-[1px] border-gray-300 outline-blue-900"
                          />
                      </div>
                  </div>

                  <div className="flex flex-col gap-2">
                      <label htmlFor="Course" className="font-semibold text-[16px]" >Course</label>
                      <div className="relative">
                        <input 
                          id="Course" 
                          type="text" 
                          name="course"
                          value={credentials.course}
                          onChange={handleChange}
                          placeholder="Product Management" 
                          className="w-full px-4 py-3 rounded-lg border-[1px] border-gray-300 outline-blue-900"
                          />
                      </div>
                  </div>

              <button className="w-full mt-8 px-6 py-3 bg-[#5721B7] hover:bg-gray-800 transition duration-150 shadow-md rounded-md text-white ">{isLoading ? "Loading.." : "Submit"}</button>

            </form>
              
          </div>
         
      </div>
    </section>
  )
}

export default AdminBio