import React from 'react';

export default function User({user}) {
    const PF = process.env.REACT_APP_PUBLIC_FOLDER
  return (
      <div  style={{borderBottom:'1px solid grey'}}>
          <h1>{user.username}</h1>
          <p>{user.email}</p>
          <img style={{width:50, height:50, display:'block'}} src={PF+user.profilePicture} alt="" />
          <p>{user.desc}</p>
      </div>
  )
}
