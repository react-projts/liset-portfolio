import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

import ProjectDetail from "../components/ProjectDetails";
import { Projects } from "../data.js";

const Work = () => {
  return (
    <div>
      <ProjectDetail />
      <h1>Some things I've built</h1>
      <ProjectsList>
        {Projects.map((project) => (
          <Project src={project.image} key={project.title} />
        ))}
      </ProjectsList>
    </div>
  );
};

const ProjectsList = styled.div`
  padding: 3rem 3rem 3rem 0rem;
  min-height: 80vh;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
  grid-column-gap: 3rem;
  grid-row-gap: 2rem;
`;

const Project = styled(motion.img)`
  width: 100%;
  min-height: 30vh;
  object-fit: cover;
  box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.8);
  border-radius: 0.5rem;
`;

export default Work;
