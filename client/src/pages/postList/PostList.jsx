import React, {useState, useEffect} from 'react';
import { publicRequest } from '../../requestMethod';
import Post from '../../components/post/Post';
import Share from '../../components/share/Share';
import { useContext } from 'react'
import { AuthContext } from '../../context/AuthContext';
import './postList.css';
import Footer from '../../components/footer/Footer'

export default function PostList() {
  const [posts, setPosts] = useState([])
  const {user} = useContext(AuthContext)

  useEffect(()=>{
    const getPost = async () => {
      try {
        const res = await publicRequest.get("/post")
        setPosts(res.data.sort(function(a,b){
          return new Date(b.createdAt) - new Date(a.createdAt)
        }))
      } catch (error) {
        console.log(error);
      }
    }
    getPost()
  },[])
  
  return (
    <div>
      {user &&  <Share />}
      <div className='postList'>
            {posts && posts.map((item, idx) => {
              // return <Post key={idx} post = {item}/>
              if(idx === 0){
                return <div key={idx} className='popularNews'><Post post = {item}/></div>
              }else {
                return <div key={idx} className='nomalNews'><Post post = {item}/></div> 
              }
            }
            )}
      </div>
      <Footer />
    </div>
  )
     
}
