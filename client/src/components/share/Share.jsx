import React, { Component } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { useState } from 'react'
import './share.css'
import { useRef } from 'react'
import { useContext } from 'react'
import { AuthContext } from '../../context/AuthContext'
import axios from 'axios'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckSquare, faCoffee } from '@fortawesome/fontawesome-free-solid'

export default function Share() {
    const {user} = useContext(AuthContext)
    const PF = process.env.REACT_APP_PUBLIC_FOLDER
    const desc = useRef()
    const title = useRef()
    const [file, setFile] = useState(null)
    const [addData, setAddData] = useState("")

    ClassicEditor.defaultConfig = {
        toolbar: {
          items: [
            'heading',
            '|',
            'bold',
            'italic',
            '|',
            'bulletedList',
            'numberedList',
            '|',
            'insertTable',
            '|',
            // 'imageUpload',
            '|',
            'undo',
            'redo'
          ]
        },
        // image: {
        //   toolbar: [
        //     'imageStyle:full',
        //     'imageStyle:side',
        //     '|',
        //     'imageTextAlternative'
        //   ]
        // },
        table: {
          contentToolbar: [ 'tableColumn', 'tableRow', 'mergeTableCells' ]
        },
        language: 'en'
      };

    const submitHandler = async (e) => {
        e.preventDefault();
        if(addData && title && file){
          const newPost = {
            userId: user._id,
            desc: addData,
            title: title.current.value,
          };
          if (file) {
            const data = new FormData();
            const fileName = ""+file.name;
            data.append("name", fileName);
            data.append("file", file);
            newPost.img = fileName;
            console.log(newPost);
            try {
              await axios.post("http://localhost:5000/api/upload", data);
            } catch (err) {}
          }
          try {
            await axios.post("http://localhost:5000/api/post/add", newPost);
            window.location.reload();
          } catch (err) {}
        }else{
          alert('Vui lòng điền đầy đủ thông tin tiêu đề, nội dung và hình ảnh!!')
        }
       
    }

  return (
    <div className='share'>
       <div className="shareContent">
       <h3>What would you like to share?</h3>
        <div className="shareWrapper">
            <div className="shareTop">
                {/* <img className='shareProfileImg' src="/assets/news/bat-chao.jpg" alt="" /> */}
                <label htmlFor="title">Tiêu Đề</label>
                <input id='title' ref={title} type="text" className='shareInput' required/> <br />
                <p>Nội Dung</p>
                <CKEditor
                    id='description'
                    editor={ ClassicEditor }
                    data={addData}                  
                    onChange={ ( event, editor ) => {
                        const data = editor.getData();
                       setAddData(data)
                    } }
                    config = {
                        {
                            ckfinder: {
                                uploadUrl:'/uploads'
                            }
                        }
                    }
                />
            </div>
            {file && (
                <div className="shareImgContainer">
                    <img src={URL.createObjectURL(file)} alt="" />
                   <span className='cancel'>Cancel</span> <FontAwesomeIcon icon="ban" onClick={()=>setFile(null)}/>
                </div>
            ) }
            <form className="shareBottom" onSubmit={submitHandler}>
                <div className="shareOptions">
                    <label htmlFor='file' className="shareOption">
                        <span className='shareOptionText'>
                        <FontAwesomeIcon icon="file-image" /><span>Photo or videos</span></span>
                        <input style={{display: "none"}} type="file" name="" id="file" accept='.jpg, .png, .jpeg' onChange={(e) => setFile(e.target.files[0])}/>
                    </label>
                </div>
                <button type='submit'>Post</button>
            </form>
        </div>
       </div>
    </div>
  )
}
