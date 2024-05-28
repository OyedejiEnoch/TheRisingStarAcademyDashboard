import { useEffect, useState } from "react";
import { IoAddCircleOutline } from "react-icons/io5";
import { IoIosRemoveCircleOutline } from "react-icons/io"
import Accordian from "@/app/components/singleCourseAccordian/Accordian";
import { useSingleCourseQuery } from "@/app/redux/api/coursesApi";
import { Link, useParams } from "react-router-dom";
import Spinner from "@/app/components/spinner/Spinner";


type Course ={
    _id:string,
    title:string,
    description:string,
    summary:string,
    body:string,
    about:string,
    topics:[{
        title:string,
        body:string,
        summary:string
    }],
    subCourses:[],
    image:{
        public_id:string,
        url:string
    }
}

const SingleCourse =()=>{

    const params =useParams()
    const {data, isLoading}= useSingleCourseQuery((params.id as string))
    console.log(data)

    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const [about, setAbout] = useState("");
    const [description, setDescription] = useState("");
    const [summary, setSummary] = useState("");

    

    useEffect(()=>{
        setTitle((data?.course.title as string))
        setBody((data?.course.body as string))
        setAbout((data?.course.about as string))
        setDescription((data?.course.description as string))
        setSummary((data?.course.summary as string))
    }, [])

    type Topic ={
        title:string,
        body:string,
        summary:string
    }

    const [topics, setTopics]=useState<Topic[]>([])
    // let topics=[1]
    // let addTopic=[1]

    const increaseTopics =()=>{
        const newTopic ={
            title:"",
            body:"",
            summary:""
        }

        setTopics([...topics, newTopic])
    }

    const decreaseTopic =()=>{
        if(topics.length > 0){
            const newTopics =[...topics]
            newTopics.pop()

            setTopics(newTopics)
        }
    }

    const numbers=["First", "Second", "Third", "Fourth", "Fifth", "Sixth", "Seventh", "Eighth", "Ninth", "Tenth"]

    const handleInputChange = (index: number, event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = event.target;
        const newTopics = [...topics];
        newTopics[index][name as keyof Topic] = value;
        setTopics(newTopics);
      };
    //   const topicsPayload = topics.map(topic => ({
    //     title: topic.title,
    //     body: topic.body,
    //     summary: topic.summary,
    //   }));

    
      if(isLoading){
        return <Spinner />
      }

    return(
        <section className="flex flex-col sm:flex-row w-full h-full py-4 px-2 sm:p-8 overflow-y-auto">
            

            <div className="flex-1 ">
                <div className="flex items-center gap-4 px-2">
                    <span><IoAddCircleOutline size={24} /></span>
                    <h1 className="font-bold text-[32px]">Update Course</h1>
                </div>

                <form className="p-4 w-[80%] flex flex-col gap-6">
                    <div className="flex flex-col gap-2">
                        <label className="text-xl ">Title</label>
                        <input type="text" className="w-full border border-gray-400 px-4 py-2 bg-transparent 
                        outline-none rounded-sm " 
                        value={title} 
                        onChange={(e)=>setTitle(e.target.value)}
                        />
                    </div>
                    <div className="flex flex-col gap-2">
                        <label className="text-xl ">Description</label>
                        <textarea cols={10} rows={3}  className="w-full border border-gray-400 px-4 py-2 bg-transparent 
                        outline-none rounded-sm "
                        value={description} 
                        onChange={(e)=>setDescription(e.target.value)}
                        ></textarea>
                    </div>
                    <div className="flex flex-col gap-2">
                        <label className="text-xl ">About</label>
                        <textarea cols={10} rows={3}  className="w-full border border-gray-400 px-4 py-2 bg-transparent 
                        outline-none rounded-sm "
                        value={about} 
                        onChange={(e)=>setAbout(e.target.value)}
                        ></textarea>
                    </div>
                    <div className="flex flex-col gap-2">
                        <label className="text-xl ">Summary</label>
                        <textarea cols={10} rows={3} className="w-full border border-gray-400 px-4 py-2 bg-transparent 
                        outline-none rounded-sm "
                        value={summary} 
                        onChange={(e)=>setSummary(e.target.value)}
                        ></textarea>
                    </div>
                    <div className="flex flex-col gap-2">
                        <label className="text-xl ">Body</label>
                        <textarea cols={10} rows={5}  className="w-full border border-gray-400 px-4 py-2 bg-transparent 
                        outline-none rounded-sm "
                        value={body} 
                        onChange={(e)=>setBody(e.target.value)}
                        ></textarea>
                    </div>

                    <div className="flex justify-between items-center">
                    <h2 className="text-xl">Topics</h2>

                    <div className="flex items-center gap-2 ">    
                    <span onClick={increaseTopics} className="cursor-pointer"><IoAddCircleOutline size={24} /></span>
                    <span onClick={decreaseTopic} className="cursor-pointer"><IoIosRemoveCircleOutline size={24} /></span>
                    </div>


                    </div>
                    <div>
                        {data?.course?.topics.map((topic, index)=>(
                            <div className="mt-2 px-4 ">
                            <h1 className="text-[18px] text-gray-700">{numbers[index]} Topic</h1>
                            <div className="px-4 flex flex-col gap-2">
                                <div className="flex flex-col gap-2">
                                    <label className="text-[16px] text-gray-600 ">Title</label>
                                    <input type="text" 
                                    value={topic.title}
                                    onChange={(e) => handleInputChange(index, e)}
                                    className="w-full border border-gray-400 px-4 py-2 bg-transparent 
                                    outline-none rounded-sm " />
                                </div>
                                    <div className="flex flex-col text-gray-600 gap-2">
                                    <label className="text-[16px] ">Body</label>
                                    <textarea cols={10} rows={3}  
                                    value={topic.body}
                                    onChange={(e) => handleInputChange(index, e)}
                                    className="w-full border border-gray-400 px-4 py-2 bg-transparent 
                                    outline-none rounded-sm "></textarea>
                                    </div>
                                <div className="flex flex-col text-gray-600 gap-2">
                                    <label className="text-[16px] ">Summary</label>
                                    <textarea cols={10} rows={3} 
                                    value={topic.summary}
                                    onChange={(e) => handleInputChange(index, e)}
                                    
                                    className="w-full border border-gray-400 px-4 py-2 bg-transparent 
                                    outline-none rounded-sm "></textarea>
                                </div>
                            </div>
                             </div>
                        ))}
                    </div>

                    <button className="px-4 py-3 rounded bg-[#1E0342] text-white font-semibold">Update Course</button>
                </form>

            </div>

            <div className=" w-[380px] border border-gray-200 p-4 flex flex-col gap-6 ">
                <p className="text-[22px] text-semibold">Sub Courses</p>
                <div>
                    <Accordian course={(data?.course as Course)}/>
                </div>

                <Link to={`/admin/sub-course/${data?.course._id}`} className="px-4 py-3 rounded bg-[#1E0342] text-white font-semibold">Create a Sub Course</Link>

            </div>
            
        </section>
    )
}


export default SingleCourse