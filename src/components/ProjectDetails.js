import React from "react";

import styled from "styled-components";
import { motion } from "framer-motion";

import Technologie from "./Technologie";

const ProjectDetails = ({ handleShowDetails, project }) => {
  return (
    <CardShadow onClick={handleShowDetails}>
      <Detail>
        <GradientTitle>{project.title}</GradientTitle>
        <img src={project.image} alt={project.title} />
        <div className="description">
          <h3>About</h3>
          <div>{project.description}</div>
        </div>
        <div className="technos">
          <h3>Technologies</h3>
          <TechnosContainer>
            {project.technos.map((techno) => (
              <Technologie techno={techno} />
            ))}
          </TechnosContainer>
        </div>
        <div className="web">
          <h3>Website</h3>
          <di>{project.webpage}</di>
        </div>
        <div className="git">
          <h3>Github</h3>
          <div>{project.github}</div>
        </div>
      </Detail>
    </CardShadow>
  );
};

const CardShadow = styled(motion.div)`
  width: 100%;
  min-height: 100vh;
  overflow-y: scroll;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
`;

const Detail = styled(motion.div)`
  width: 80%;
  border-radius: 1rem;
  padding: 2rem 5rem;
  background: white;
  color: black;
  position: absolute;
  left: 10%;
  top: 10%;
  img {
    width: 100%;
    height: 50vh;
    object-fit: cover;
    padding: 1rem 0rem;
  }
  h3 {
    padding: 1rem 0rem;
  }
`;

const GradientTitle = styled.p`
  padding: 1rem 0rem 1.5rem 0;
  font-size: 40px;
  font-weight: bold;
  background: -webkit-linear-gradient(
    90deg,
    rgba(2, 0, 36, 1) 0%,
    rgba(94, 9, 121, 1) 50%,
    rgba(0, 212, 255, 1) 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const TechnosContainer = styled.div`
  display: flex;
`;

export default ProjectDetails;
