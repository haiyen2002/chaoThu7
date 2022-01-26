import React, {useState, useEffect} from 'react';
import { publicRequest } from '../../requestMethod';
import User from './User';

export default function AllUser() {
  const [users, setUsers] = useState([])
  
  useEffect(()=>{
    const getUser = async () => {
      try {
        const res = await publicRequest.get("/user")
        setUsers(res.data)
      } catch (error) {
        console.log(error);
      }
    }
    getUser()
  },[])

  return (
    <div>
        {users && users.map((item, idx) => (
              <User key={idx} user = {item}/>
        ))}
    </div>
  )
}
