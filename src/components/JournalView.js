import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Card, Col, Row, Container, Button } from 'react-bootstrap';

// export function JournalView(props) {
//     const fullDreamAry = props.dreamAry.map((dream) => {
//         const dreamObj = <FullDreamEntry
//         title={dream.title}
//         content={dream.content}
//         img={dream.img}
//         feeling={dream.feeling}
//         dreamType={dream.dreamType}
//         key={dream.title} />

//         return dreamObj;
//     });

//     // return(
//     //     <main>
//     //         <button className="journal-button"><Link to="write">Create a new dream entry</Link></button>
//     //         <button className="journal-button"><Link to="analyze">View dream analyze result</Link></button>
            
//     //         <div className="entry-container">
//     //             {fullDreamAry}
//     //         </div>
//     //     </main>
//     // )

// function FullDreamEntry(props) {
//     const title = props.title;
//     const img = props.img;

//     return (
//         <Link className="entry" to={title}>
//             <img src={img} alt={"dream of" + title}/> 
//             <p>{title}</p>  
//         </Link>
//     )
// }

function DreamCard(props) {
    const { title, content, img, feeling, dreamType } = props;
  
    return (
      <Col>
        <Card className='dream-entry-style'>
            <Card.Img
                variant="top" 
                src={img} 
                alt="dream image" 
            />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Link href={"/" + title}>
                    <Link to={title}>Click to Read Me!</Link>
                </Card.Link>
            </Card.Body>
        </Card>
      </Col>
    );
  }

export function DreamCardList(props) {
    const { dreamArray } = props;
  
    const dreamCards = dreamArray.map((dream) => (
      <DreamCard
        key={dream.title}
        title={dream.title}
        content={dream.content}
        img={dream.img}
        feeling={dream.feeling}
        dreamType={dream.dreamType}
      />
    ));

    return (
        <Container fluid>
            <button className="journal-button"><Link to="write">Create a new dream entry</Link></button>
            <button className="journal-button"><Link to="analyze">View dream analyze result</Link></button>
            <Row>{dreamCards}</Row>
        </Container>
      );
}

