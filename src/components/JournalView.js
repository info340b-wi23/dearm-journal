import React from 'react';
import { Link } from 'react-router-dom';

export function JournalView(props) {

    const fullDreamAry = props.dreamAry.map((dream) => {
        const dreamObj = <FullDreamEntry
        title={dream.title}
        content={dream.content}
        img={dream.img}
        feeling={dream.feeling}
        dreamType={dream.dreamType}
        key={dream.content}/>

        return dreamObj;
    });



    return(
        <main>
            <button className="journalButton"><Link to="write">Create a new dream entry</Link></button>
            <button className="journalButton"><Link to="analyze">View dream analyze result</Link></button>
            
            <div className="entryContainer">
                {fullDreamAry}
            </div>
        </main>
    )
}

function FullDreamEntry(props) {
    const title = props.title;
    const img = props.img;

    return (
        <Link className="entry" to={title}>
            <img src={img} alt={"dream of" + title}/> 
            <p>{title}</p>  
        </Link>
    )
}


