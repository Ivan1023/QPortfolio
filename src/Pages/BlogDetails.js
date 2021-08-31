import React from 'react';
// import {  useParams  } from "react-router-dom";
// import DataSet from '../helper/blogData'
import './PageCSS/BlogDetails.scss'

export default function BlogDetails() { 
    // const { value } = useParams();
    // const [ state ] = useState(DataSet);

    return (
        <div>
           {/* {state.map((item)=>
               <>
               {item.id === value ?
                <div className='blogDetails'>
                    <h1>{item.title}</h1>
                    <p>{item.date}</p>
                    <p>{item.blog}</p>
                    <img src={item.image}/>
                </div>
               : null
               }
               </>
           )} */}
        </div>
    )
}