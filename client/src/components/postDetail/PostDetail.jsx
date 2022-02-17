import React, {useState, useEffect} from 'react';
import { useLocation } from 'react-router-dom';
import { publicRequest } from '../../requestMethod';
import { useParams } from 'react-router-dom';
import Footer from '../footer/Footer';
import './postDetail.css'

export default function PostDetail() {
    const params = useParams()
    const id = params.id
    // const location = useLocation();
    // const id = location.pathname.split("/")[2]
    const [post, setPost] = useState([])
    useEffect(()=>{
        const getPost = async () => {
          try {
            const res = await publicRequest.get("/post/find/"+ id)
            setPost(res.data)
          } catch (error) {
            console.log(error);
          }
        }
        getPost()
      },[id])

    return (
        <div className='postDetailWrapper'>
          <div  className='postDetail'>
            <div key={post._id}>
                <h2 className='title'>{post.title}</h2>
                <p dangerouslySetInnerHTML={{__html:post.desc}}></p>
                {/* <p>{post.likes && post.likes.length}</p> */}
              </div>
            </div>
          <Footer />
        </div>
  )
}
