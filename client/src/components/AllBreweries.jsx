import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { Form, Row, CardGroup, Container, Col } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import '../assets/styles/cardstyle.css';

const AllBreweries = (props) => {
  const history = useHistory();
  console.log(history);
  return (
    <Container>
      <Row>
        {props.data &&
          props.data.map((brewery) => (
            <Col lg="4" key={brewery.id}>
              <Card
                className="card-all"
                style={{
                  width: 250,
                  height: 300,
                  margin: 5,
                  overflow: 'hidden'
                }}
              >
                <Card.Img
                  variant="top"
                  src={brewery.image}
                  alt={brewery.brewery_type}
                  className="card-img"
                  onClick={() => {
                    history.push(`/brewskis/${brewery.id}`);
                  }}
                />

                <Card.Body>
                  <Card.Title>{brewery.name}</Card.Title>
                  {brewery.street && (
                    <Card.Text>
                      {brewery.street} {brewery.city}, {brewery.state}
                    </Card.Text>
                  )}
                </Card.Body>
              </Card>
            </Col>
          ))}
      </Row>
    </Container>
  );
};

export default AllBreweries;
