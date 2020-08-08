import React from "react";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';


function Footer() {
    return (
        <>
            <Card className="text-center">
                <Card.Header>Andrew Hall</Card.Header>
                <Card.Body>
                    <Card.Title>Connect with me!</Card.Title>
                    <Card.Text>
                        <a href="https://github.com/AndrewbHall96" target="_blank">
                            <i class="fa fa-github pr-2 fa-2x" aria-hidden="true"></i>
                        </a>
                        <a href="https://www.linkedin.com/in/andrew-hall-248798171/" target="_blank">
                            <i class="fa fa-linkedin-square pr-2 fa-2x" aria-hidden="true"></i>
                        </a>
                        <a href="#" target="_blank">
                            <i class="fa fa-envelope fa-2x" aria-hidden="true"></i>
                        </a>                    </Card.Text>
                </Card.Body>
                <Card.Footer className="text-muted">&copy; Andrew Hall 2020</Card.Footer>
            </Card>
        </>
    );
}

export default Footer;