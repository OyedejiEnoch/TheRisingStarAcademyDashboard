import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { setLoading, setUser, setIsAuthenticated } from '../features/userSlice'
import { setStudentUser, setStudentLoading } from '../features/studentSlice'
// import { SingleUser } from '@/features/pages'

type tutorDetails ={
    _id:string,
    name:string,
    email:string,
    phoneNo:string,
    bio:string,
    profession:string,
    course:string,
    avatar:{
        public_id:string,
        url:string
    },
    role:string,
    createdAt:string
}

type UserDetails ={
    _id:string,
    name:string,
    email:string,
    avatar:{
        public_id:string,
        url:string
    },
    myCourses:string[],
    role:string,
    createdAt:string
}

type AllUsers ={
    allUsers:UserDetails[]
}
type SingleUser = {
    singleUser:UserDetails
}
type AllTutors ={
    allTutors:tutorDetails[]
}

type SingleTutor ={
    singleUser:tutorDetails
}
// type UserStats={
//     data:{
//         id:number,
//         total:number
//     }
// }




export const userApi =createApi({
    reducerPath:"userApi",
    tagTypes:["User", "Tutor"],
    baseQuery:fetchBaseQuery({baseUrl: "https://therisingstaracademy.onrender.com/api", credentials: 'include'}),
    endpoints:(builder)=>({
        studentProfile: builder.query<UserDetails, void | null>({
            query:()=> "/users/my-profile",
            // we are transforming the data received by going deep into the exact data we want, e.g
            // our api is success:true, user message, what we really want is the user, so we can pass the details into our
            // state 
            transformResponse: (result:any) =>result.user,
            async onQueryStarted(_, {dispatch, queryFulfilled}){
                try{
                
                    const {data}=await queryFulfilled
                    dispatch(setStudentUser(data))
                    dispatch(setStudentLoading(false))


                }catch(error){
                    dispatch( setStudentLoading(false))
                }
            },
            providesTags:["User"]
        }),
        userProfile: builder.query<tutorDetails, void | null>({
            query:()=> "/users/tutor/my-profile",
            // we are transforming the data received by going deep into the exact data we want, e.g
            // our api is success:true, user message, what we really want is the user, so we can pass the details into our
            // state 
            transformResponse: (result:any) =>result.tutor,
            async onQueryStarted(_, {dispatch, queryFulfilled}){
                try{
                
                    const {data}=await queryFulfilled
                    dispatch(setUser(data))
                    dispatch(setIsAuthenticated(true))
                    dispatch(setLoading(false))


                }catch(error){
                    dispatch( setLoading(false))
                }
            },
            providesTags:["User"]
        }),
        allUsers:builder.query<AllUsers, void>({
            query:()=> "/users/admin/all",
            providesTags:["User"]
        }),
        singleUser:builder.query<SingleUser, void>({
            query:(id)=> `/users/admin/user/${id}`,
            providesTags:["User"]
        }),
        updateUser: builder.mutation<UserDetails, any>({
            query:({id, body})=>({
                url:`/users/admin/user/${id}`,
                method:"PUT",
                body
            }),
            invalidatesTags:["User"]
            
        }),
        allTutor:builder.query<AllTutors, void>({
            query:()=> "/users/tutor/admin/tutors",
            providesTags:["Tutor"]
        }),
        singleTutor:builder.query<SingleTutor, void>({
            query:(id)=> `/users/tutor/admin/tutor/${id}`,
            providesTags:["Tutor"]
        }),
        updateTutor: builder.mutation<tutorDetails, any>({
            query:({id, body})=>({
                url:`/users/tutor/admin/tutor/${id}`,
                method:"PUT",
                body
            }),
            invalidatesTags:["Tutor"]
            
        }),
        updateMyProfile: builder.mutation<tutorDetails, any>({
            query:( body)=>({
                url:`/users/tutor/update-profile`,
                method:"PUT",
                body
            }),
            invalidatesTags:["Tutor"]
            
        }),
    })
})

export const {useUserProfileQuery, useAllUsersQuery, useSingleUserQuery, useStudentProfileQuery,
    useUpdateUserMutation, useAllTutorQuery, useSingleTutorQuery, useUpdateTutorMutation, useUpdateMyProfileMutation} =userApi