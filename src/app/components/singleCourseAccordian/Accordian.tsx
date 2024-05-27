import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "../ui/accordion"

  type Course={
    _id:string,
    title:string,
    description:string,
    summary:string,
    body:string,
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

  type Props ={
    course:Course
  }

const Accordian = ({course}:Props) => {
  
  return (
    <Accordion type="single" collapsible className="w-full">
      {course.subCourses.map((course, index)=>(
          <AccordionItem key={index} value={ `item-${index}`}>
           <AccordionTrigger>SubCourse</AccordionTrigger>
           <AccordionContent>
             Yes. It adheres to the WAI-ARIA design pattern.
           </AccordionContent>
         </AccordionItem>
      ))
     
      
      }
     
    </Accordion>
  )
}

export default Accordian