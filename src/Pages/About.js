import React from 'react';
import '../Pages/PageCSS/About.scss'
import Placeholder from '../Assets/Misc/product_image_thumbnail_placeholder.png'

export default function About() {
    return (
        <div className='about'>
            <div>
                <h1 className='about__header'>About Me</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </div>
            <div>
                <img className="about__img" alt='personal' src={Placeholder}/>
            </div>
        </div>
    )
}