import { useEffect, useState } from "react";
import { IoAddCircleOutline } from "react-icons/io5";
import { IoIosRemoveCircleOutline } from "react-icons/io"
import { useCreateCourseMutation } from "@/app/redux/api/coursesApi";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const CreateCourse =()=>{

    const navigate =useNavigate()
    const [createCourse,{isLoading, error, isSuccess}]=useCreateCourseMutation()    
    type Topic ={
        title:string,
        body:string,
        summary:string
    }

    useEffect(()=>{
        if(error){
            const customError = error as {
                status: number;
                data: {
                  message:string
                };
              };
            toast.error(customError.data?.message)
        }
    
        if(isSuccess){
            toast.success("SubCourse created Successfully")
            navigate('/admin/courses')
        }
    
    },[isSuccess, error])

    const [topics, setTopics]=useState<Topic[]>([{
        title:"",
        body:"",
        summary:""
    }])

    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const [about, setAbout] = useState("");
    const [description, setDescription] = useState("");
    const [summary, setSummary] = useState("");
    // const [sTopics, setSTopics] = useState(topics);


    const [imagePreview, setImagePreview] = useState("")
    const [formData] = useState<FormData>(new FormData());

    console.log(topics)

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


    const handleImage =(e:React.ChangeEvent<HTMLInputElement> ) =>{
        const file = e.target.files?.[0];
        if(file && file.type.startsWith("image/")){
          const reader =new FileReader()
          reader.onload =()=>{
            setImagePreview(reader.result as string)
            formData.append("image", file)
          }
      
          reader.readAsDataURL(file)
        }
      }

      const handleInputChange = (index: number, event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = event.target;
        const newTopics = [...topics];
        newTopics[index][name as keyof Topic] = value;
        setTopics(newTopics);
      };
      const topicsPayload = topics.map(topic => ({
        title: topic.title,
        body: topic.body,
        summary: topic.summary,
      }));

    const handleSubmit =(e:React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault()

        formData.set('title', title);
        formData.set('about', about);
        formData.set('description', description);
        formData.set('summary', summary);
        formData.set('body', body);
        formData.set('topics', JSON.stringify(topicsPayload));

        createCourse(formData)
    }

    return(

        <section className="flex flex-col sm:flex-row w-full h-full py-4 px-2 sm:p-8  overflow-y-auto">
            

            <div className="flex-1 ">
                <div className="flex items-center gap-4 px-2">
                    <span><IoAddCircleOutline size={24} /></span>
                    <h1 className="font-bold text-[32px] text-slate-950 ">Create Course</h1>
                </div>

                <form onSubmit={handleSubmit} className="p-4 w-full flex flex-col sm:flex-row gap-6 ">

                    <div className="w-full sm:w-[60%] flex flex-col gap-4">
                        <div className="flex flex-col gap-2">
                            <label className="text-xl text-slate-950 ">Title</label>
                            <input name="title" type="text" className="w-full border border-gray-200 px-4 py-2 bg-white 
                            outline-none rounded-sm " 
                            value={title} 
                            onChange={(e)=>setTitle(e.target.value)}
                            />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label className="text-xl text-slate-950 ">Description</label>
                            <textarea name="description" cols={10} rows={3}  className="w-full border border-gray-200 px-4 py-2 bg-white 
                            outline-none rounded-sm "
                            value={description} 
                            onChange={(e)=>setDescription(e.target.value)}
                            ></textarea>
                        </div>
                        <div className="flex flex-col gap-2">
                            <label className="text-xl text-slate-950 ">About</label>
                            <textarea name="about" cols={10} rows={3}  className="w-full border border-gray-200 px-4 py-2 bg-white 
                            outline-none rounded-sm "
                            value={about} 
                            onChange={(e)=>setAbout(e.target.value)}
                            ></textarea>
                        </div>
                        <div className="flex flex-col gap-2">
                            <label className="text-xl text-slate-950 ">Summary</label>
                            <textarea name="summary" cols={10} rows={3} className="w-full border border-gray-200 px-4 py-2 bg-white 
                            outline-none rounded-sm "
                            value={summary} 
                            onChange={(e)=>setSummary(e.target.value)}
                            ></textarea>
                        </div>
                        <div className="flex flex-col gap-2">
                            <label className="text-xl text-slate-950 ">Body</label>
                            <textarea name="body" cols={10} rows={5}  className="w-full border border-gray-200 px-4 py-2 bg-white 
                            outline-none rounded-sm "
                            value={body} 
                            onChange={(e)=>setBody(e.target.value)}
                            ></textarea>
                        </div>

                        <div className="flex justify-between items-center">
                        <h2 className="text-xl text-slate-950 ">Topics</h2>

                        <div className="flex items-center gap-2 ">    
                        <span onClick={increaseTopics} className="cursor-pointer"><IoAddCircleOutline size={24} /></span>
                        <span onClick={decreaseTopic} className="cursor-pointer"><IoIosRemoveCircleOutline size={24} /></span>
                        </div>


                        </div>
                        <div>
                            {topics.map((topic, index)=>(
                                <div className="mt-4 px-4 ">
                                <h1 className="text-[18px] text-gray-600">{numbers[index]} Topic</h1>
                                <div className="px-4 flex flex-col gap-2">
                                    <div className="flex flex-col gap-2">
                                        <label className="text-[16px] text-gray-600 ">Title</label>
                                        <input type="text" 
                                        name="title"
                                        value={topic.title}
                                        onChange={(e) => handleInputChange(index, e)}
                                        className="w-full border border-gray-200 px-4 py-2 bg-white 
                                        outline-none rounded-sm " />
                                    </div>
                                        <div className="flex flex-col  gap-2">
                                        <label className="text-[16px] text-gray-600  ">Body</label>
                                        <textarea 
                                        name="body"
                                        value={topic.body}
                                        onChange={(e) => handleInputChange(index, e)}
                                        cols={10} rows={3}  className="w-full border border-gray-200 px-4 py-2 bg-white 
                                        outline-none rounded-sm "></textarea>
                                        </div>
                                    <div className="flex flex-col gap-2">
                                        <label className="text-[16px] text-gray-600 ">Summary</label>
                                        <textarea
                                        name="summary"
                                        value={topic.summary}
                                        onChange={(e) => handleInputChange(index, e)}
                                        cols={10} rows={3} className="w-full border border-gray-200 px-4 py-2 bg-white 
                                        outline-none rounded-sm "></textarea>
                                    </div>
                                </div>
                                 </div>
                            ))}
                        </div>

                    </div>


                    {/* right */}
                    <div className="w-full sm:w-[40%] h-[500px] bg-white rounded-lg flex flex-col gap-4  items-center p-4">
                        <div className="w-full sm:w-[350px] h-[300px] flex justify-center items-center object-cover  
                        flex-col border border-gray-200 rounded-lg">
                            <img src={imagePreview ? imagePreview : '/file-upload.svg'} alt='file-upload' width={100} height={90} />
                        </div>
                        <input type="file"
                         className=" w-full p-4 pl-10 rounded-2xl border-[1px] border-solid border-slate-200 outline-none"
                        onChange={handleImage} />

                    <button className="px-4 py-3 rounded w-full bg-slate-950 text-white font-semibold">{isLoading ? "Loading..." : "Create Course"}</button>
                    </div>
                </form>

            </div>
            
        </section>
    )
}


export default CreateCourse