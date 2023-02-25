import React from 'react';



export function JournalView(props) {

    console.log(props.dreamArray);
    const fullDreamAry = props.dreamAry.map((dream) => {
        const dreamObj = <FullDreamEntry
        title={dream.title}
        content={dream.content}
        img={dream.img}
        feeling={dream.feeling}
        dreamType={dream.dreamType}/>

        return dreamObj;
    });

    return(
        <div>
        <main>

            <button className="journalButton"><a href="journalWrite.html">Create a new dream entry</a></button>
            <button className="journalButton"><a href="reportResult.html">View dream analyze result</a></button>
            
            <div className="entryContainer">
                    
                <div className="entry">
                    <img src="img/dream_pic1.jpg" alt="dreamy pond" />
                    <p>Time travel</p>
                </div>
                <div className="entry">
                    <img src="img/dream_pic2.jpg" alt="dreamy trail" />
                    <p>Teleport to a new world</p>
                </div>
                <div className="entry">
                    <img src="img/dream_pic3.jpg" alt="dreamy river" />
                    <p>Talk to long lost relatives</p>
                </div>
                <div className="entry">
                    <img src="img/dream_pic4.jpg" alt="dreamy field" />
                    <p>Became an acrobat</p>
                </div>
                <div className="entry">
                    <img src="img/dream_pic5.jpg" alt="dreamy garden" />
                    <p>Became an animal</p>
                </div>
                <div className="entry">
                    <img src="img/dream_pic6.jpg" alt="dreamy tornado" />
                    <p>Living on another planet</p>
                </div>
            </div>

            <div className="list-entry-container">
                <button className="list-entry">Time travel</button>
                <button className="list-entry">Teleport to a new world</button>
                <button className="list-entry">Talk to long lost relatives</button>
                <button className="list-entry">Became an acrobat</button>
                <button className="list-entry">Became an animal</button>
                <button className="list-entry">Living on another planet</button>
            </div>

        </main>
        <footer>
        <p>&copy; Dream Journal 2023</p>
    </footer>
    </div>
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


