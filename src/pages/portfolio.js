import React, {useState} from "react";
import "../App.css";
import CardProf from "../components/Card";
import projects from "../projects.json";
import Card from 'react-bootstrap/Card';

// import { returnStatement } from "@babel/types";

function Portfolio() {

    // const [projectList, setProjectList] = useState (projects);

    return(
    <>
    <CardProf> {projects.map((project, index) => {
        return (
            <Card project={project}/>
        )
    }
    )}
    </CardProf>
    <CardProf />
    </>
  )
}

export default Portfolio;