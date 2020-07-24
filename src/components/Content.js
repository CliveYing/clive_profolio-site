import React from 'react';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function Content(props){

    return(
        <Container fuild = {true}>
            <Row className = "justify-content-center" >
                <Col md={8}>
                    {props.children}
                
                </Col>
            </Row>

        </Container>
    )

}

export default Content;