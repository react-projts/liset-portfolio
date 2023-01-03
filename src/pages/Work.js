import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

import Project from "../components/Project";
import { Projects } from "../data.js";

const Work = () => {
  return (
    <div>
      <h1>Some things I've built</h1>
      <ProjectsList>
        {Projects.map((project) => (
          <Project project={project} image={project.image} key={project.id} />
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

export default Work;
