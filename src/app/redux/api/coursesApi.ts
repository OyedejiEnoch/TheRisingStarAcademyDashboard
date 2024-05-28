import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";


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

type getCourses={
    courses:Course[]
}

// type CreateCourse ={
//     title:string,
//     description:string,
//     summary:string,
//     body:string,
//     topics:[{
//         title:string,
//         body:string,
//         summary:string
//     }],
//     image:{
//         public_id:string,
//         url:string
//     }
// }

type SingleCourse={
    course:Course
}

export const courseApi =createApi({
    reducerPath:"courseApi",
    tagTypes:["Course"],
    baseQuery: fetchBaseQuery({baseUrl: 'https://therisingstaracademy.onrender.com/api',credentials: 'include' }),
    endpoints: (builder)=>({
        allCourse:builder.query<getCourses, void>({
            query:()=> "/courses/all",
            providesTags:["Course"]
        }),
        allAdminCourse:builder.query<getCourses, void>({
            query:()=> "/courses/admin/personal-courses",
            providesTags:["Course"]
        }),
        latestCourses:builder.query<getCourses, void>({
            query:()=> "/courses/all/latest",
            providesTags:["Course"]
        }),
        singleCourse: builder.query<SingleCourse, string>({
            query:(id)=>`/courses/single/${id}`
        }),
        createCourse:builder.mutation<Course, any>({
            query:(body) =>({
                url:"/courses/admin/new",
                body,
                method: "POST"
            }),
            invalidatesTags:["Course"]
        }),
        createSubCourse:builder.mutation<Course, any>({
            query:({id, body}) =>({
                url:`/sub-courses/admin/new/${id}`,
                body,
                method: "POST"
            }),
            invalidatesTags:["Course"]
        })
    })
})

export const {useAllCourseQuery, useLatestCoursesQuery,useSingleCourseQuery, useAllAdminCourseQuery, useCreateCourseMutation, useCreateSubCourseMutation} = courseApi