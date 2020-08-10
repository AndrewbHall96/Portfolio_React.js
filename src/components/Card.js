import React from "react";
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck'

function CardProf() {
    return (
        <>
        <CardDeck>
            <Card>
                <Card.Img variant="top" src="Assets/images/project_1_images/homePage.1.png" className="card-img-top" alt="Project 1--COVID-19 Testing locator" />
                <Card.Body>
                    <Card.Title>COVID-19 Test Center Locator</Card.Title>
                    <Card.Text>
                        Technologies used: Javascript, jQuery, UI Kit and API's. My group and I created an application that allows users to search Covid-19 test centers in their selected state. Our application pulls up the the name, address, hours of operations, with a map visual pulled from a google maps API.
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <small className="text-muted">Contributors: Ben Acker (SC), Ester Min (SC), and Wesley </small>
                </Card.Footer>
            </Card>
            <Card>
                <Card.Img variant="top" src="holder.js/100px160" />
                <Card.Body>
                    <Card.Title>Uni-Buy</Card.Title>
                    <Card.Text>

                        {' '}
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <small className="text-muted">Last updated 3 mins ago</small>
                </Card.Footer>
            </Card>
            <Card>
                <Card.Img variant="top" src="holder.js/100px160" />
                <Card.Body>
                    <Card.Title>Event Schedule</Card.Title>
                    <Card.Text>
                        Technologies used: Javascript and jQuery. For this application, I created a event scheduler that allows the user to insert events throughtout the day. At the top, the date and time is displayed. You may save, edit and delete events as they are completed throughout the day.
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <small className="text-muted">Last updated 3 mins ago</small>
                </Card.Footer>
            </Card>
        </CardDeck>
        <CardDeck>
        <Card>
            <Card.Img variant="top" src="Assets/images/project_1_images/homePage.1.png" className="card-img-top" alt="Project 1--COVID-19 Testing locator" />
            <Card.Body>
                <Card.Title>Crime Mapper</Card.Title>
                <Card.Text>
                    Technologies used: React.js, Bootstrap, Heroku, API. This application
                </Card.Text>
            </Card.Body>
            <Card.Footer>
                <small className="text-muted">Contributors: Chelsey Craig (SC), Tim Withers(SC), Christoper Turton, and Josh Homer</small>
            </Card.Footer>
        </Card>
        <Card>
            <Card.Img variant="top" src="holder.js/100px160" />
            <Card.Body>
                <Card.Title>Read Me Generator</Card.Title>
                <Card.Text>
Technologies used: 
                    {' '}
                </Card.Text>
            </Card.Body>
            <Card.Footer>
                <small className="text-muted">Andrew Hall</small>
            </Card.Footer>
        </Card>
        <Card>
            <Card.Img variant="top" src="holder.js/100px160" />
            <Card.Body>
                <Card.Title>Tik Tok Creator Search</Card.Title>
                <Card.Text>
                    Technologies used: React.js . For this application, I created a event scheduler that allows the user to insert events throughtout the day. At the top, the date and time is displayed. You may save, edit and delete events as they are completed throughout the day.
                </Card.Text>
            </Card.Body>
            <Card.Footer>
                <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
        </Card>
    </CardDeck>
    </>
    );
}

export default CardProf;