import React from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export function ItemListContainer (props) {
    return (
        <Container>
            <Row className="justify-content-center">
                <Col className="justify-content">{props.title}</Col>
                
            </Row>
        </Container>
        
    )
}
