import React from 'react';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';

import './components.css';

function Footer(){
    return(
        <footer className="footer" fluid = {true}>
            <Container className = "footerContainer" fluid = {true} >
                <Row className= "border-top justify-content-between p-3">
                    <Col className = "p-0" md = {3} sm = {12}>
                        Front-end is fun
                    </Col>
                    <Col className = "p-0 d-flex justify-content-and " md = {3} >
                        This site is made by myself.
                    </Col>

                </Row>
            </Container>

        </footer>
    )

}


export default Footer;