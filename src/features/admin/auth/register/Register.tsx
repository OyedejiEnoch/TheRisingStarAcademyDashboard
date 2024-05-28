import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";

import { useState } from "react";
import { Link } from "react-router-dom";
// import { toast } from "react-toastify";
// import { useRegisterMutation } from "../../../app/redux/api/authApi";
// import { useNavigate } from "react-router-dom";

const Register = () => {

  // const navigate=useNavigate()
  // const {isAuthenticated}=useAppSelector((state)=>state.user)
  const [open, setOpen]=useState(false)

  // const [register,{error, isLoading, isSuccess}]= useRegisterMutation()

  const [credentials, setCredentials]=useState({
    firstName:"",
    lastName:"",
    email:"",
    password:"",
    phoneNo:"",
    bio:undefined,
    profession:"",
    course:"",

  })

  // useEffect(()=>{
  //   if(error){
  //     const customError = error as {
  //         status: number;
  //         data: {
  //           message:string |[""]
  //         };
  //         // Add any other properties that your error object contains
  //       };
  //     if(typeof customError.data.message === "string"){
  //         toast.error(customError.data?.message )
  //       }else{
  //           toast.error(customError.data?.message[0])
  //     }      
  // }
  // if(isSuccess){
  //     toast.success("Registered Successfully")
  //     navigate("/")
  // }

  // },[error, isSuccess])

  const handleChange =(e:React.ChangeEvent<HTMLInputElement>)=>{
    const {name, value}=e.target

    setCredentials((prevValue)=>{
      return {...prevValue, [name]:value}
    })
  }

  // const {name, email, password}= credentials
  const handleSubmit =(e:React.FormEvent<HTMLFormElement | HTMLTextAreaElement>)=>{
    e.preventDefault()
    // const validName=/^[a-z A-Z]+$/
    // const validEmail =/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

    // if(!name.trim()) return toast.error("Name is missing")
    // if(!validName.test(name)) return toast.error("Invalid name")
    // if(!validEmail.test(email)) return  toast.error("Invalid email")
    // if(!password.trim()) return toast.error("Password is missing")
    // if(password.length < 6) return toast.error("Password must be more than 6 characters")

    // register(credentials)
  }

  return (
    <section className="w-full h-screen overflow-auto  ">
      <div className="w-full flex justify-center items-center h-screen overflow-auto ">

          {/* right */}
          <div className="flex-2 w-full sm:w-[70%] flex flex-col items-center justify-center bg-white overflow-y-auto  px-6 sm:px-4 py-6 rounded-xl shadow ">

            <div className="flex items-center flex-col">
            <img src="/rsalogo.jpg" alt="logo" className="w-[60px] " />

            <h2 className="text-2xl font-semibold">Register As A Facilitator</h2>
            </div>

            <form onSubmit={handleSubmit} className=" w-full overflow-y-auto ">
              <div className="flex flex-col sm:flex-row gap-4 w-full mt-10 overflow-y-auto">

             
              <div className="flex-1 flex flex-col gap-4">

              <div className="flex flex-col gap-2">
                  <label htmlFor="firstName" className="font-semibold text-[16px]" >First Name</label>
                      <div className="relative">
                        <input 
                          id="firstName" 
                          type="text" 
                          name="firstName"
                          value={credentials.firstName}
                          onChange={handleChange}
                          placeholder="First Name" 
                          className="w-full px-4 py-3 rounded-lg border-[1px] border-gray-300 outline-blue-900"
                          />
                      </div>
                  </div>

                  <div className="flex flex-col gap-2">   
                      <label htmlFor="lastName" className="font-semibold text-[16px]" >Last Name</label>
                      <div className="relative">
                        <input 
                          id="lastName" 
                          type="text" 
                          name="lastName"
                          value={credentials.lastName}
                          onChange={handleChange}
                          placeholder="Last Name" 
                          className="w-full px-4 py-3 rounded-lg border-[1px] border-gray-300 outline-blue-900"
                          />
                      </div>
                  </div>


                  <div className="flex flex-col gap-2">
                      <label htmlFor="Email" className="font-semibold text-[16px]" >Email</label>
                      <div className="relative">
                        <input 
                          id="Email" 
                          type="email" 
                          name="email"
                          value={credentials.email}
                          onChange={handleChange}
                          placeholder="Email"
                          className="w-full px-4 py-3 rounded-lg border-[1px] border-gray-300 outline-blue-900" 
                          />
                      </div>
                  </div>


              <div className="flex flex-col gap-2">
                <label htmlFor="Password" className="font-semibold text-[16px]" >Password</label>
                <div className="relative">
                  <input 
                    id="Password" 
                    type={open ? "text" :"password"} 
                    name="password" 
                    value={credentials.password}
                    onChange={handleChange}
                    placeholder="***" 
                    className="w-full px-4 py-3 rounded-lg border-[1px] border-gray-300 outline-blue-900"
                    />
                  {open ? 
                  <AiFillEye 
                    size={20}
                    onClick={()=>setOpen((prevValue)=> !prevValue)} 
                    className="absolute right-4 top-5 text-[#5721B7] cursor-pointer " /> :
                  
                  <AiFillEyeInvisible 
                    size={20} 
                    onClick={()=>setOpen((prevValue)=> !prevValue)} 
                    className="absolute right-4 top-5 text-[#5721B7] cursor-pointer " />}
                  
                </div> 
              </div>
              </div>




              <div className="flex-1 flex flex-col gap-4">

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
                          onChange={credentials.bio}
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
              </div>
              
              </div>
              <div className="mt-6 w-full flex justify-center">
                <button className="w-[30%] px-6 py-3 bg-[#5721B7] hover:bg-gray-800 transition duration-150 shadow-md rounded-md text-white">Sign Up</button>
              </div>
              <div className="flex flex-col justify-center gap-4 items-center w-full mt-2">
                <p className="text-gray-600 text-sm cursor-pointer flex items-center gap-2"> Do not have an account? <Link to= {"/auth/register"} className="font-bold text-black ">Sign Up</Link></p>
               <p className="text-gray-600 text-sm cursor-pointer"> <Link to= {"/auth/register"}>Forgot Password? </Link></p>
              </div>
            </form>
              
          </div>
         
      </div>
    </section>
  )
}

export default Register

