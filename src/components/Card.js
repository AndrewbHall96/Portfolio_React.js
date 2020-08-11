import React from "react";
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck'
// import { ListGroup } from "react-bootstrap";

function CardProf(props) {
    return (
        <>
        <CardDeck>
            <Card>
                <Card.Img variant="top" src={props.image} className="card-img-top" alt="Project 1--COVID-19 Testing locator" />
                <Card.Body>
                    <Card.Title>{props.name}</Card.Title>
                    <Card.Text>
                        {props.technologiesUsed}
                        {props.description}
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <small className="text-muted">{props.contributors}</small>
                </Card.Footer>
            </Card>
            <Card>
                <Card.Img variant="top" src={props.image} className="card-img-top" alt="Project 1--COVID-19 Testing locator" />
                <Card.Body>
                    <Card.Title>{props.name}</Card.Title>
                    <Card.Text>
                        {props.technologiesUsed}
                        {props.description}
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <small className="text-muted">{props.contributors}</small>
                </Card.Footer>
            </Card>
            <Card>
                <Card.Img variant="top" src={props.image} className="card-img-top" alt="Project 1--COVID-19 Testing locator" />
                <Card.Body>
                    <Card.Title>{props.name}</Card.Title>
                    <Card.Text>
                        {props.technologiesUsed}
                        {props.description}
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <small className="text-muted">{props.contributors}</small>
                </Card.Footer>
            </Card>
        </CardDeck>
    </>
    );
}

export default CardProf;