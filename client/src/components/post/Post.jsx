import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { publicRequest } from '../../requestMethod';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import './post.css'

export default function Post({post}) {
  const [user, setUser] = useState({})
  const [like, setLike] = useState(post.likes.length)
  const [isLiked, setIsLiked] = useState(false)
  const {user : currentUser} = useContext(AuthContext)
  const PF = process.env.REACT_APP_PUBLIC_FOLDER
  
  useEffect(() => {
    currentUser && setIsLiked(post.likes.includes(currentUser._id))
  },[currentUser? currentUser._id : null, post.likes])

  useEffect(() => {  
        const fetchUser = async () => {
          const res = await publicRequest.get(`user/find/${post.userId}`)
          setUser(res.data)
        }
        fetchUser()
      },[])
    
  const likeHandler = async () => {
    if(currentUser) {
      try {
         await axios.put(`http://localhost:5000/api/post/${post._id}/like`,{userId : currentUser._id})
        
       } catch (error) {
         console.log(error);
       }
       setLike(isLiked ? like-1 : like+1)
       setIsLiked(!isLiked)
    }else {
      alert('You must to login to like this post...')
    }
    
  }

  return (
    <div className='post'>
      <div className="boxImage">
        <img src={PF+post.img} alt="anh" />
      </div>
      <div className="boxText">
          <h2 className='title'>
            <Link style={{ color: 'inherit', textDecoration: 'inherit'}} to= {`/post/${post._id}`}>
              {post.title}
            </Link>
          </h2> 
          <p className='description' dangerouslySetInnerHTML={{__html:post.desc}}></p>
          <button className='likeBtn' onClick={likeHandler}>like</button><span>{like}</span>
          <p className='author'>Tác giả: {user.username}</p>
      </div>
    </div>
  )
     
}
