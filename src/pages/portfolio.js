import React, {useState} from "react";
import "../App.css";
import CardProf from "../components/Card";
import projects from "../projects.json";
// import Card from 'react-bootstrap/Card';

// import { returnStatement } from "@babel/types";

function Portfolio() {

    // const [projectList, setProjectList] = useState (projects);

    return(
    <>
    {projects.map((project, index) => {
        return (
            <CardProf project={project}/>
        )
    }
    )}
    
    </>
  )
}

export default Portfolio;