import React, {useState} from 'react'
import './banner.css'
import {data} from '../../assets/data/bannerData'

export default function Banner() { 
    const [isVisible, setIsVisible] = useState(false);

    return (
        <div className='banner'>
          <div className="bannerList">
            {data.map((item, idx) => (
                    <div key={idx} style={{background: `url(${item.img})`,backgroundPosition: 'center',backgroundSize: 'cover',backgroundRepeat: 'no-repeat'}} className="bannerItem">
                        <h3>{item.title}</h3>
                        <p className={isVisible? 'visible' : ''}>{item.description}</p>
                        <span className={isVisible? 'showMore none' : 'showMore'} onClick={()=> (setIsVisible(true))}>(Xem thêm)</span>
                        <div className="layer"> </div>
                        <button><i className="fas fa-caret-right"></i>{item.button}</button>
                    </div>
                ))}
          </div>
          
        </div>
    )
}
