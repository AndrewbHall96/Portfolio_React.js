import React from "react";
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function profileCard() {
    return (
        <>
            <Card>
                <Card.Body>
                    <Container>
                        <Row>
                            <Col xs={6} md={4}>
                                <Image src="../components/srs/public/images/facepic.png/171x180" rounded />
                            </Col>
                        </Row>
                    </Container>
                    <Card.Text>
                        <p className="card-text img-fluid">
                            <div>Hi! I'm Andrew (he/him), and I am an aspiring web
                            developer based in Philadelphia! Currently, I am enrolled in the University of Pennsylvania’s LPS
                            coding bootcamp, where I’m gaining experience with everything from vanilla javascript, to React and
                            SQL, and will graduate at the end of August.
                </div>
                            <div>
                                A bit about me:
                </div>
                            <div>
                                Born and raised in Philly, I spent the past four years in the beautiful, corn-populated town of
                                Gambier, OH, where I studied International Relations and Studio Art. I ran track for my
                                college (short distances only please!), worked in the admissions office (yes, I have mastered the
                                art of talking while walking backwards), and volunteered weekly at
                                the local animal shelter. Upon returning to the city of brotherly love, I work at an urban design
                                firm, where I conduct preliminary site-specific research and support the all sides of the
                                partnership administratively. Outside of coding and work, you can find me biking on the Wissahickon
                                trails, building my tiktok/media empire (wishful thinking), and capturing moments with my B/W film
                                camera.
                </div>
                        </p>
                    </Card.Text>
                </Card.Body>
            </Card>
        </>
    )
};

export default profileCard;
