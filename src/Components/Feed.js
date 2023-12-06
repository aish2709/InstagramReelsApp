import React, { useContext, useEffect,useState } from 'react'
import { AuthContext } from '../Context/AuthContext'
import UploadFile from './UploadFile'
import { database } from '../firebase'

function Feed() {
    const {user,logout} = useContext(AuthContext)
 
  // const [userData, setUserData] = useState('')
  // useEffect(() => {
  //   const unsub = database.users.doc(user.uid).onSnapshot((snapshot) => {
  //     setUserData(snapshot.data())
  //   })
  //   return () => { unsub() }
  // }, [user])
  const [userData, setUserData] = useState('')
  useEffect(() => {
    const unsub = database.users.doc(user.uid).onSnapshot((snapshot) => {
      setUserData(snapshot.data())
    })
    return () => { unsub() }
  }, [user])
  return (
    <div style={{display:'flex', justifyContent:'center',alignItems:'center',flexDirection:'column'}}>
    <div className='comp' style={{width:'50%'}}>
      <h1>Welcome to Feed</h1>
      <button onClick={logout}>Logout</button>
    </div>
      <UploadFile user={userData} />
    </div>
  )
}

export default Feed
