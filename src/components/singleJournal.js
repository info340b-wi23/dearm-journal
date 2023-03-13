import React from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import _ from 'lodash';

function SingleJournal(props) {
    const paramsObj = useParams();
    const dreamTitle = paramsObj.dreamTitle; 
    const dreamAry = props.dreamList;
    let dream = _.find(dreamAry, {title: dreamTitle});
    return(
        <div>
            { dream.title != null && 
                <div className='single-journal'>
                    <div className="single-journal-content">
                        <h2 className="dream-title">{dream.title}</h2>
                        <h3 className="dream-content">{dream.content}</h3>
                    </div>
                    <div className="single-journal-col">
                        <h4 className="single-journal-feelings">Feelings: {dream.feeling}</h4>
                        <h4 className="single-journal-type">Type of Dream: {dream.dreamType}</h4>
                        <img 
                            className="dream-image" 
                            src={dream.img} 
                            alt="dreamy pond"
                        />
                        <button className="back"><Link to="/journal">Back to Journal</Link></button>
                    </div>
                </div>}
        </div>
    )
}
export default SingleJournal;