import React, {useState} from 'react';
import './topbar.css';
import Overlay from './overlay/Overlay';

export default function Topbar () {
    const [ status, setStatus ] = useState('none');
    const [ isOpenMenu, setIsOpenMenu ] = useState(false)

    const handleOnOverlay = () => {
        setStatus( 'flex');
    }
    const handleOffOverlay = () => {
        setStatus('none');
    }

    const handleBtnClose = () => {
        setStatus('none');
    }

    const handleOpenMenu = () => {
        setIsOpenMenu(true)
    }

    return (
        <div className='top'>
            {/* <div className= {status} onClick={handleOffOverlay} id="overlay"></div> */}
            <div className="container">
                <Overlay status= {status} handleOffOverlay = {handleOffOverlay} handleBtnClose = {handleBtnClose}/>
                <div className="topLeft">
                    <h2 className='logo'>
                        <span>Cháo</span>
                        Thứ<span style={{fontSize: '38px'}}>7</span>
                        </h2>
                </div>
                <div className="topCenter">
                    <i onClick={handleOpenMenu} className="mobileMenuBtn fal fa-bars"></i>
                    <ul className="topList">
                        <span className='btnCloseMenu' onClick={()=>{setIsOpenMenu(false)}}> <i className="fal fa-times-octagon"></i></span>
                        <li className="topListItem">Trang Chủ</li>
                        <li className="topListItem">Tin Tức</li>
                        <li className="topListItem">Sự Kiện</li>
                        <li className="topListItem">Bài Đăng</li>
                        <li className="topListItem">Mạnh Thường Quân
                            <ul className='listItemDrop'>
                                <li>
                                    Thư Kêu Gọi
                                </li>
                                <li>
                                    Lời Cảm Ơn
                                </li>
                            </ul>
                        </li>
                        <li className="topListItem">Liên Hệ</li>
                    </ul>
                    <ul className={isOpenMenu? "mobileTopList" : "none mobileTopList" }>
                        <span className='btnCloseMenu' onClick={()=>{setIsOpenMenu(false)}}> <i className="fal fa-times-octagon"></i></span>
                        <li className="topListItem">Trang Chủ</li>
                        <li className="topListItem">Tin Tức</li>
                        <li className="topListItem">Sự Kiện</li>
                        <li className="topListItem">Bài Đăng</li>
                        <li className="topListItem">Mạnh Thường Quân
                            <ul className='listItemDrop'>
                                <li>
                                    Thư Kêu Gọi
                                </li>
                                <li>
                                    Lời Cảm Ơn
                                </li>
                            </ul>
                        </li>
                        <li className="topListItem">Liên Hệ</li>
                    </ul>
                </div>
                <div className="topRight">
                    <img className='topImg' src="/assets/person/1.jpg" alt="" />
                    <i onClick={handleOnOverlay} className="topSearchIcon fal fa-search"></i>
                </div>
            </div>
        </div>
    )
}