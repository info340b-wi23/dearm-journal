import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Col, Row, Container, Button } from 'react-bootstrap';

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

