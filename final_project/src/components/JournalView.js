import React from 'react';

export function JournalView(props) {

    const fullDreamAry = props.dreamAry.map((dream) => {
        const dreamObj = <FullDreamEntry
        title={dream.title}
        content={dream.content}
        img={dream.img}
        feeling={dream.feeling}
        dreamType={dream.dreamType}
        key={dream.title}/>

        return dreamObj;
    });

    return(
        <main>
            <button className="journalButton"><a href="journalWrite.html">Create a new dream entry</a></button>
            <button className="journalButton"><a href="reportResult.html">View dream analyze result</a></button>
            
            <div className="entryContainer">
                {fullDreamAry}
            </div>
        </main>
    )
}

function FullDreamEntry(props) {
    const title = props.title;
    const content = props.content;
    const img = props.img;
    const feeling = props.feeling;
    const dreamType = props.dreamType;

    return (
        <div className="entry">
            <img src={props.img} alt={"dream of" + props.title}/> 
            <p>{title}</p>  
        </div>
    )
}


