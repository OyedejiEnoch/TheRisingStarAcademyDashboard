import {createSlice, PayloadAction} from "@reduxjs/toolkit"

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


type InitialState ={
    isLoading:boolean,
    tutor:tutorDetails | null,
    isAuthenticated:boolean
}

const initialState:InitialState ={
    isLoading:true,
    tutor:null,
    isAuthenticated:false
}

export const userSlice =createSlice({
    name:"user",
    initialState,
    reducers:{
        setUser:(state, action:PayloadAction<tutorDetails>)=>{
            state.tutor=action.payload
        },
        setIsAuthenticated:(state, action:PayloadAction<boolean>)=>{
            state.isAuthenticated = action.payload

        },
        setLoading:(state, action:PayloadAction<boolean>)=>{
            state.isLoading =action.payload
        }

    }
})

export const {setUser, setLoading, setIsAuthenticated} =userSlice.actions

export default userSlice.reducer