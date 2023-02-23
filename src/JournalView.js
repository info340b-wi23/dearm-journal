import React from 'react';



export function JournalView(props) {

    console.log(props.dreamArray);
    const fullDreamAry = props.dreamAry.map((dream) => {
        const dreamObj = <FullDreamEntry
        title={dream.title}
        content={dream.content}
        img={dream.img}
        symbol={dream.symbol}
        recognition={dream.recognition}/>

        return dreamObj;
    });

    const minViewDreamAry = props.dreamAry.map((dream) => {
        const dreamObj = <MinDreamEntry
        title={dream.title}
        content={dream.content}
        img={dream.img}
        symbol={dream.symbol}
        recognition={dream.recognition}/>

        return dreamObj;
    });



    return(
        <main>

            <button className="journalButton"><a href="journalWrite.html">Create a new dream entry</a></button>
            <button className="journalButton"><a href="reportResult.html">View dream analyze result</a></button>
            
            <div className="entryContainer">
                {fullDreamAry}
            </div>

            <div className="list-entry-container">
                {minViewDreamAry}
            </div>

        </main>
    )
}

function FullDreamEntry(props) {
    const title = props.title;
    const content = props.content;
    const img = props.img;
    const symbol = props.symbol;
    const recognition = props.recognition;
  
    return (
        <div className="entry">
            <img src={props.img} alt={"dream of" + props.title}/>
            <p>{title}</p>
        </div>
    )
}

function MinDreamEntry(props) {
    const title = props.title;
    const content = props.content;
    const img = props.img;
    const symbol = props.symbol;
    const recognition = props.recognition;
  
    return (
        <button className="list-entry">{title}</button> // put button into div and only manage css display
    )
}


