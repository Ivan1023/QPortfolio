import React from 'react';
import { Link } from "react-router-dom";

import '../Pages/PageCSS/Main.scss'

export default function Main (){

    return (
        <div className='main'>
            <section >
                <h1 className='main__title'>Hello! I’m a data scientist based in Toronto.</h1>
                <p className='main__text'>Sub copy or some interesting text here to get people to click.</p>
                <button className='main__button'><Link className='main__button__link' to="/Portfolio">View My Work</Link></button>
            </section>
        </div>
    )
}