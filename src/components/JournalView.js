import React, {useState} from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { Card, Col, Row, Container, Button } from 'react-bootstrap';

export function DreamCardList(props) {
    const { dreamArray } = props;
    console.log(dreamArray);
  
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
        <div>
            <Container fluid>
                <button className="journal-button"><Link to="write">Create a new dream entry</Link></button>
                <button className="journal-button"><Link to="analyze">View dream analyze result</Link></button>
                
                { dreamArray.length == 0 && 
                <Col className='journal-entry-card'>
                    <Card className='dream-entry-style sample'>
                        <Card.Img
                            variant="top" 
                            src={'../img/dream_pic1.jpg'} 
                            alt="dream image" 
                        />
                        <Card.Body>
                            <Card.Title>Start your dreamy journey</Card.Title>
                        </Card.Body>
                    </Card>
                </Col>
                }

                
                
                <Row>{dreamCards}</Row>

            </Container>
            
            
        </div>
        


      );
}

function DreamCard(props) {
    const { title, img} = props;
  
    return (
        <Col className='overall-card'>
            <Link to={title}>
                    <Card className='dream-entry-style'>
                        <Card.Img
                            className='journal-entry'
                            variant="top" 
                            src={img} 
                            alt="dream image" 
                        />
                        <Card.Body>
                            <Card.Title>{title}</Card.Title>
                        </Card.Body>
                    </Card>
            </Link>
        </Col>
    );
}

function SampleCard(props) {
    return(
        <Col>
            <Card className='dream-entry-style'>
                <Card.Img
                    variant="top" 
                    src={'../img/dream_pic1.jpg'} 
                    alt="dream image" 
                />
                <Card.Body>
                    <Card.Title>Start your dreamy journey</Card.Title>
                </Card.Body>
            </Card>
        </Col>
    )
   
}

