import {configureStore} from "@reduxjs/toolkit"
import {authApi} from "./api/authApi"
import { userApi } from "./api/userApi"
import { courseApi } from "./api/coursesApi"
import { noticeApi } from "./api/noticeApi"
import UserReducer from "./features/userSlice"
import StudentReducer from "./features/studentSlice"


export const store= configureStore({
    reducer:{
        auth:UserReducer,
        student:StudentReducer,
        [authApi.reducerPath]:authApi.reducer,
        [userApi.reducerPath]:userApi.reducer,
        [courseApi.reducerPath]:courseApi.reducer,
        [noticeApi.reducerPath]:noticeApi.reducer
    },
    middleware:(getDefaultMiddleware)=>getDefaultMiddleware().concat([ authApi.middleware, userApi.middleware,courseApi.middleware, noticeApi.middleware])
})

export type RootState= ReturnType<typeof store.getState>
export type AppDispatch =typeof store.dispatch