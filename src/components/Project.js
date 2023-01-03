import React from "react";
import { useState } from "react";

import styled from "styled-components";
import { motion } from "framer-motion";

import ProjectDetails from "./ProjectDetails";

const Project = ({ project }) => {
  const [isOpen, setIsOpen] = useState(false);

  function handleShowDetails() {
    setIsOpen(!isOpen);
    console.log("clicked!!");
  }

  return (
    <div>
      <ProjectImg
        src={project.image}
        alt={project.title}
        onClick={handleShowDetails}
      />
      {isOpen && (
        <ProjectDetails
          project={project}
          handleShowDetails={handleShowDetails}
        ></ProjectDetails>
      )}
    </div>
  );
};

const ProjectImg = styled(motion.img)`
  width: 100%;
  min-height: 30vh;
  object-fit: cover;
  box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.8);
  border-radius: 0.5rem;
  cursor: pointer;
`;

export default Project;
