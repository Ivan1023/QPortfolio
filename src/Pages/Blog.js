import React, { useState } from 'react';
import {  useParams, Link } from "react-router-dom";
import Read from '../Assets/Blog/book-open.svg'
import DataSet from '../helper/blogData'
import './PageCSS/Blog.scss'

export default function Blog() { 
    const [ state ] = useState(DataSet);

    console.log(state)

    return (
        <div className='blog'>
            <h1 className='blog__title'>Blog</h1>
            <p>Here’s what I’ve been doing lately, working on, things I’m thinking about, or things I’m interested in. Generally these posts are divided into opinions, tutorials, and updates.</p>
            <div className='blog__container'>
                {state.map((item)=>
                    <>
                        <Link to={`/BlogDetails/${item.id}`}><h2 className='blog__subtitle'>{item.title}</h2></Link>
                        <div className='blog__individual-blog'>
                            <Link  to={`/BlogDetails/${item.id}`}><img className='blog__img' src={item.image}/></Link>
                            <p className='blog__preview'>{item.blogPreview}</p>
                            <Link to={`/BlogDetails/${item.id}`}>
                                <div className='blog__details'>
                                    <img src={Read}/>
                                    <p className='blog__sub-header'>Read More</p>
                                </div>
                            </Link>
                        </div>
                    </>
                )}
            </div>
        </div>
    )
}