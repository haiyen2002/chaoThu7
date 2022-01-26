import React, {useState} from 'react'
import './banner.css'
import {Bannerdata} from '../../dummyData'

export default function Banner() { 

    return (
        <div className='banner'>
          <div className="bannerList">
            {Bannerdata.map((item, idx) => (
                    <div key={idx} style={{background: `url(${item.img})`,backgroundPosition: 'center',backgroundSize: 'cover',backgroundRepeat: 'no-repeat'}} className="bannerItem">
                        <h3>{item.title}</h3>
                        <p>{item.description}</p>
                        <div className="layer"> </div>
                        <button><i className="fas fa-caret-right"></i>{item.button}</button>
                    </div>
                ))}
          </div>
          
        </div>
    )
}
