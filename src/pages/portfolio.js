import React, {useState} from "react";
import "../App.css";
import CardProf from "../components/Card";
import projects from "../projects.json";
import CardDeck from 'react-bootstrap/CardDeck';
import Col from 'react-bootstrap/Col';
// import Card from 'react-bootstrap/Card';

// import { returnStatement } from "@babel/types";

function Portfolio() {

    // const [projectList, setProjectList] = useState (projects);

    return(
    <CardDeck>
    {projects.map((project, index) => {
        return (
            <Col sm={4} className="py-5">
            <CardProf project={project}/>
            </Col>
        )
    }
    )}
    
    </CardDeck>  )
}

export default Portfolio;