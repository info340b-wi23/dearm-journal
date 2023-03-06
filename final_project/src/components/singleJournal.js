import React from 'react';
import { useParams } from 'react-router-dom';
import _ from 'lodash';

import DREAM_ENTRYS from '../data/dream_entry.json';

function SingleJournal(props) {
    const paramsObj = useParams();
    const dreamTitle = paramsObj.dreamTitle; 
    
    let dream = _.find(DREAM_ENTRYS, {title: dreamTitle});
    console.log(dream.img);
    return(
        <div className="row">
                <div className="single-journal col-8">
                    <h2>{dream.title}</h2>
                    <h4>{dream.content}</h4>
                </div>
                <div className="col">
                    <h2 className="single-journal-emotions">Feelings: {dream.feeling}</h2>
                  
                    <h2 className="single-journal-emotions">Type of Dream: {dream.dreamType}</h2>
             
                    <img className="object-cover object-center rounded mx-auto d-block" src={"../" + dream.img} alt="dreamy pond"/>
               
                </div>
        </div>
    )
}

export default SingleJournal;