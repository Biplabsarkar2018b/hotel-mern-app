import React from 'react'
import {useSelector} from 'react-redux'
import {Navigate, useLocation} from "react-router-dom"


const LoginProtectedroute = ({children}) => {
   
    let location = useLocation();
    const user = useSelector((state)=>state.user);
    if(user.state.isAuthenticated){
        if(user.state.user.accountType){
            return <Navigate to="/hotelhome" state={{ from: location}} replace />
        }else{
            return <Navigate to="/home" state={{ from: location}} replace />
        }
    }
  return (
    children
  )
}

export default LoginProtectedroute