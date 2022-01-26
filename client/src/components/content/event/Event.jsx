import React from 'react'
import {Link} from 'react-router-dom'
import './event.css'
import {currentEvent, comingEvent} from '../../../dummyData'

export default function Event() {
    return (
        <div className='event'>
            <div className="currentEvent">
                <h2>Sự Kiện Đang Diễn Ra</h2>
                <div className="devide"></div>
                {currentEvent.length? currentEvent.map((item, idx) =>
                    (
                        <div key={idx} className="currentEventItem">
                            <img src={item.img} alt="" className="imgEvent" />
                            <div className="desCurrEvent">
                                <h2>{item.title}</h2>
                                <p>Ủng hộ ít nhất 100 bát cháo cho trẻ em mắc bệnh hiểm nghèo.</p>
                                <p>Thời gian: <span>{item.time}</span></p>
                                <p>Địa Điểm:  <span>{item.position}</span></p>
                                <p>Số Lượng: <span>{item.quantity} bát</span></p>
                                <p>Chi phí dự tính: <span>{item.price.toLocaleString()}đ</span> </p>
                                <div className='process'>
                                    <div className="processInner"></div>
                                    <div className="markProcess">70%</div>
                                </div>
                                <div className="boxButton">
                                <button className='donateButton'><i className="fas fa-caret-right"></i>Ủng Hộ Ngay</button>
                                </div>
                            </div>
                        </div>    
                    )
                ) : null}
               
            </div>
            <div className="comingEvent">
            <h2>Sự Kiện Sắp Diễn Ra</h2>
                <div className="devide"></div>
                {comingEvent.length? comingEvent.map((item, idex) => (
                    <Link  key={idex} to={`/event/${idex}`} style={{ textDecoration: 'none', color:"#2a2a2a" }}>
                        <div className="comingEventItem">
                            <img src={item.img} alt="" className="imgComingEvent" />
                            <div className="desComingEvent">
                                <h3>{item.title}</h3>
                                <p>
                                    <span><i className="fal fa-map-marker-smile"></i>{item.position}</span>
                                </p>
                                <span className='boxTime'>{ item.time.split('/')[1]}-{item.time.split('/')[2]}</span>
                                <p>{item.description}</p>
                            </div>
                        </div>
                    </Link>
                )):null}
            </div>
        </div>
    )
}
