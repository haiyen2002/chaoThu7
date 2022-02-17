import './header.css';
import React, { useRef, useEffect } from 'react'
import { init } from 'ityped';


export default function Header() {
    const textRef = useRef();
    useEffect(() => {
        init(textRef.current, {
            showCursor: false,
            backDelay: 1500,
            backSpeed: 60,
            strings: ["Chúng tôi cần bạn"],
            disableBackTyping: false,
        })
    },[])
    return (
       <div className="header">
                <div style={{backgroundImage:"url('images/nhoi-long-voi-hinh-anh-tre-em-vung-cao-trong-gia-ret-2.png')"}} className="headerImg">
                    <div className="slogan">
                            <h1 ref={textRef}></h1>
                            <h3>Để Trở Thành Một Phần Thay Đổi Thế Giới </h3>
                            <p>Yêu thương mà chúng ta cho đi là yêu thương mà chúng ta giữ được. Hãy gửi gắm yêu thương của bạn vào Bát Cháo Thứ 7 đến trẻ em mắc bệnh hiểm nghèo!</p>
                    </div>
                </div>
       </div>
    )
}