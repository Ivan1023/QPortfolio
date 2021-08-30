import React, { useState } from 'react';
import './PageCSS/Portfolio.scss';
import ProjectsComponents from '../Components/PortfolioProjectComponents'
import DataSet from '../helper/data'

export default function Portfolio() {
    const [state] = useState(DataSet);

    return (
        <div className='portfolio'>
            <h2 className='portfolio__title' >Portfolio</h2>
            <div className='portfolio__container'>
                {state.map((item)=>
                    <ProjectsComponents data={item} key={item.id}/>
                )}
            </div>
        </div>
    )
}