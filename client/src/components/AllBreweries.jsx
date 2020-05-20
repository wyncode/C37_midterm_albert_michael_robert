import React, {useState, useEffect} from 'react';
import { useHistory } from 'react-router-dom'
import {Form, Row, CardGroup, Container, Col} from 'react-bootstrap';
import Card from 'react-bootstrap/Card';

const AllBreweries = (props) => {
    const history = useHistory()
    console.log(history)
    const imgUrl = 'https://news.wbfo.org/sites/wbfo/files/styles/medium/public/201502/Craft_Beer_courtesy_of_flying_bison_facebook_page.jpg';
    return (
        <Container>
        <Row>
            {props.data &&
                props.data.map((brewery) => (
                    <Col lg='3' key={brewery.id}>
                    <Card style={{width:200, height:300, margin:5, overflow: "hidden"}}>
                        
                            <Card.Img
                                variant="top"
                                src={brewery.image}
                                alt={brewery.brewery_type}
                                width={200}
                                onClick={() => {
                                    history.push(`/brewskis/${brewery.id}`)
                                }}
                            />
                        
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