import React from 'react'
import './content.css'
import Event from './event/Event'
import Donate from './donate/Donate'
import Volunteer from './volunteers/Volunteer'
import News from './news/News'

export default function Content() {
    return (
        <div className='content'>
            <Event />
            <Donate />
            <Volunteer />
            <News />
        </div>
    )
}
