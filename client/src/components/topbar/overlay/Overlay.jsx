import React, {useState} from 'react';
import './overlay.css'

export default function Overlay (props) {
    const handleStopPropagation = (e) => {
        e.stopPropagation()
    }

    return (
        <div className= {props.status} onClick={props.handleOffOverlay} id="overlay">
            <div className='search-overlay' onClick={handleStopPropagation}>
                <div onClick={props.handleBtnClose} className="search-overlay-close">
                <i className="fal fa-times-octagon"></i>
                </div>
                <div className="select-overlay-top">
                    <div className="select-types">
                        <select className="select-box">
                            <option value="">All</option>
                        </select>
                    </div>
                    <div className="input-groups">
                        <input className='input_search' placeholder='Tìm kiếm...' />
                        <span><i className="fas fa-search"></i></span>
                    </div>
                </div>
                <div className='boxResult'>
                    <div className="select-overlay-bottom">
                        <div className="search-result-item">                              
                                <div><img src="https://yolo.vn/wp-content/uploads/2019/08/hinh-anh-cho-pomsky-dep-45.jpg" alt="" /> </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}