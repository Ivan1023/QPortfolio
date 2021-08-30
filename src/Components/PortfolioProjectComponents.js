import React from 'react';
import { Link } from "react-router-dom";
import '../Pages/PageCSS/Portfolio.scss'


export default function Portfolio(props) {

    return (
        <div className='portfolio__project-containers'> 
            <Link to={`/Project/${props.data.id}`} alt={`project ${props.data.id}`}><img className="portfolio__img" alt='project' src={props.data.image}/></Link>
            <h3 className='portfolio__sub-header'>{props.data.project}</h3>
            <p className='portfolio__details'>{props.data.date}</p>
        </div>
    )
}