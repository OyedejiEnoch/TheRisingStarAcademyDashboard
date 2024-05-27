import {createSlice, PayloadAction} from "@reduxjs/toolkit"


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



type InitialState ={
    isLoading:boolean,
    student:UserDetails | null,
    isAuthenticated:boolean
}

const initialState:InitialState ={
    isLoading:true,
    student:null,
    isAuthenticated:false
}

export const userSlice =createSlice({
    name:"user",
    initialState,
    reducers:{
        setStudentUser:(state, action:PayloadAction<UserDetails>)=>{
            state.student=action.payload
            state.isAuthenticated = true
        },
        setStudentLoading:(state, action:PayloadAction<boolean>)=>{
            state.isLoading =action.payload
        }

    }
})

export const {setStudentUser, setStudentLoading} =userSlice.actions

export default userSlice.reducer