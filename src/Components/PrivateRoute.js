import React,{useContext} from 'react'
import { Route,Navigate } from 'react-router-dom';
import { AuthContext } from '../Context/AuthContext';


function PrivateRoute({component:Component,...rest}) {
    const {user} =useContext(AuthContext)
  return (
    <Route {...rest} render={props=>{
        return user? <Component{...props}/> : <Navigate to="login"/>
    }}/>
  )
}

export default PrivateRoute
