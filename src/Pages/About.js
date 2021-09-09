import React from 'react';
import '../Pages/PageCSS/About.scss';
import Placeholder from '../Assets/Misc/product_image_thumbnail_placeholder.png';
import Photo from '../Assets/Photo/portfolioPhoto.JPG';

export default function About() {
    return (
        <div className='about'>
            <div>
                <h1 className='about__header'>About Me</h1>
                <p className='about__text'>I have a PhD in Biology and completed certification courses in Data Science and Machine Learning from BrainStation. I want to use this space to share personal stories about my career path from a post-doctoral fellow to Research Associate, and showcase projects that I have been passionately working on.</p>
                <p className='about__text'>I will constantly be updating this website so stay tuned! <span className='about__connect'>#scienceneversleeps</span></p>
                <p className='about__text about__connect'>Let’s connect!</p>
            </div>
            <div className='about__imgContainer'>
                {/* <img className="about__imgContainer__img" alt='personal' src={Placeholder}/> */}
                <img className="about__imgContainer__img" alt='personal' src={Photo}/>
            </div>
        </div>
    )
}