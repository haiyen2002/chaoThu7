import React, {useState, useEffect} from 'react';
import { publicRequest } from '../../requestMethod';
import Post from '../../components/post/Post';
export default function PostList() {
  const [posts, setPosts] = useState([])
  
  useEffect(()=>{
    const getPost = async () => {
      try {
        const res = await publicRequest.get("/post")
        setPosts(res.data)
      } catch (error) {
        console.log(error);
      }
    }
    getPost()
  },[])

  // useEffect(()=>{
  //   const getPost = async () => {
  //     try {
  //       const res = await publicRequest.get("/post/find/"+ id)
  //       setPost(res.data)
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   }
  //   getPost()
  // },[id])

  return (
    
    <div>
      {console.log(posts)}
        {posts && posts.map((item, idx) => (
              <Post key={idx} post = {item}/>
        ))}
    </div>
  )
     
}
