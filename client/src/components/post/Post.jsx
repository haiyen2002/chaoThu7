import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { publicRequest } from '../../requestMethod';
import { Link } from 'react-router-dom';

export default function Post({post}) {
  console.log(post);
  const [user, setUser] = useState({})
  const [like, setLike] = useState(post.likes)
  const [likeCount, setLikeCount] = useState(like.length)

  useEffect(() => {  
        const fetchUser = async () => {
          console.log(15, post.userId);
          const res = await publicRequest.get(`user/find/${post.userId}`)
          console.log(res);
          setUser(res.data)
        }
        fetchUser()
      },[])
    
  const likeHandler = () => {
    setLikeCount(like.includes(user._id)? like.splice(user._id,1) : like.push(user._id))
  }
  return (
    <div >
            <h1>
              <Link to= {`/post/${post._id}`}>
                 {post.title}
              </Link>
              </h1>
            <p>{post.desc}</p>
            <button onClick={likeHandler}>like</button>
            <p>{likeCount}</p>
            <p>{user.username}</p>
    </div>
  )
     
}
