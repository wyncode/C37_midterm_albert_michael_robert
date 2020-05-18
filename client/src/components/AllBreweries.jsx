import React, {useState, useEffect} from 'react';
import {Form, Row, CardGroup, Container, Col} from 'react-bootstrap';
import Card from 'react-bootstrap/Card';

const AllBreweries = (props) => {
    const imgUrl = 'https://news.wbfo.org/sites/wbfo/files/styles/medium/public/201502/Craft_Beer_courtesy_of_flying_bison_facebook_page.jpg';
    return (
        <Container>
        <Row>
            {props.data &&
                props.data.map((brewery) => (
                    <Col lg='3'>
                    <Card key={brewery.id} style={{width:200, height:300, margin:5, overflow: "hidden"}}>
                        <a href={`/brewskis/${brewery.id}`}>
                            <Card.Img
                                variant="top"
                                src={imgUrl}
                                alt={brewery.brewery_type}
                                width={200}
                            />
                        </a>
                        <Card.Body>
                            <Card.Title>{brewery.name}</Card.Title>
                            {brewery.street &&
                            <Card.Text>
                                {brewery.street} {brewery.city}, {brewery.state}
                            </Card.Text>}
                        </Card.Body>
                    </Card>
                    </Col>
                ))}
        </Row>
        </Container>
    )
}

export default AllBreweries;