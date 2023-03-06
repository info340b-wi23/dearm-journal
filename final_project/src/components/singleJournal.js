import React from 'react';
import { useParams } from 'react-router-dom';
import _ from 'lodash';
import { Link } from 'react-router-dom';

import DREAM_ENTRYS from '../data/dream_entry.json';

function SingleJournal(props) {
    const paramsObj = useParams();
    const dreamTitle = paramsObj.dreamTitle; 
    
    let dream = _.find(DREAM_ENTRYS, {title: dreamTitle});
    console.log(dream.img);
    return(
        <div className='single-journal'>
                <div className="single-journal col-8">
                    <h2>{dream.title}</h2>
                    <h4>{dream.content}</h4>
                </div>
                <div className="col">
                    <h3 className="single-journal-emotions">Feelings: {dream.feeling}</h3>
                  
                    <h3 className="single-journal-emotions">Type of Dream: {dream.dreamType}</h3>
             
                    <img className="object-cover object-center rounded mx-auto d-block" src={"../" + dream.img} alt="dreamy pond"/>
                    <button className="back"><Link to="/journal">Back to Journal</Link></button>
                    
               
                </div>
        </div>
    )
}

export default SingleJournal;