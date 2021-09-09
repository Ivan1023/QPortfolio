import React from 'react';
import { Link } from "react-router-dom";

import '../Pages/PageCSS/Main.scss'

export default function Main (){

    return (
        <div className='main'>
            <section >
                <h1 className='main__title'>My name is Queenie, and I am a scientist and data analyst based in Toronto. </h1>
                <p className='main__text'>Using data to craft scientist stories</p>
                <button className='main__button'><Link className='main__button__link' to="/Portfolio">View My Work</Link></button>
            </section>
        </div>
    )
}