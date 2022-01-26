import React from 'react'
import { news } from '../../../dummyData'
import './news.css'

export default function News() {
    return (
        <div className='news'>
            <h1><i className="fad fa-bars"></i>Tin Tức Nổi Bật<i className="fad fa-bars"></i></h1>
            <div className="newWrapper">
                {news && news.map((item, idx)=> (
                    <div key={idx} className="newsItem">
                        <img src={item.img} alt="" className="newsItemImage" />
                        <div className="newsItemText">
                            <div className="newsItemTitle">
                                <p className="time"><span>{item.time.split('/')[0]}</span><span>{item.time.split('/')[1]}</span></p>
                                <p className="title">{item.title}</p>
                            </div>
                            <p className="newsItemDescrip">{item.description}</p>
                            <p className='readMore'>Read more <i className="fas fa-caret-right"></i></p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
