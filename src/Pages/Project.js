import React, { useState } from 'react';
import {  useParams  } from "react-router-dom";
import Placeholder from '../Assets/Misc/product_image_thumbnail_placeholder.png';
import DataSet from '../helper/data'
import './PageCSS/Project.scss'

export default function Portfolio() {
    const { value } = useParams();
    const [ state ] = useState(DataSet);

    return (
        <div className='project'>
            {state.map((item)=>
            <>
                {item.id === value ?
                <>
                    <h1 className='project__title'>{item.project}</h1>
                    <div className='project__container'>
                        <img className='project__img' alt='project' src={Placeholder}/>
                        <h3 className='project__sub-header'>More Info</h3>
                        <p className='project__details'>{item.details}</p>
                    </div>
                </>
                :
                null
                }
            </>
            )}
        </div>
    )
}