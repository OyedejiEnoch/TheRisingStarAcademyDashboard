import {ReactNode} from 'react'
import { useAppSelector } from '../redux/hooks'
import { Navigate } from 'react-router-dom'
import Spinner from './spinner/Spinner'
type Prop ={
    children:ReactNode
}


const StudentProtectedRoute = ({children}:Prop) => {
    const {isAuthenticated, isLoading} =useAppSelector((state)=>state.student)

    if(isLoading) return <Spinner />

    // on reload the isAuthenticated is false by default, until it fetches the data,
    // therefore we set a loading which is true by default, therefore on reload we have a loading which is true and
    // isAuthenticated which is false, then once the data loads, loading becomes false isAuthenticated becomes true 
    // therefore it doesn't redirect us to the login page

    if(!isAuthenticated){
        return <Navigate to="/" replace />
    }
  return children
}

export default StudentProtectedRoute