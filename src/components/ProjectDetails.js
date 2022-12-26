import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const ProjectDetail = ({
  title,
  intro,
  image,
  description,
  technos,
  webpage,
  github,
}) => {
  return (
    <CardShadow>
      <div className="project-title">
        <h3>{title}</h3>
        <p>{intro}</p>
      </div>
      <div className="image">{image}</div>
      <div className="description">
        <h3>About</h3>
        <div>{description}</div>
      </div>
      <div className="technos">
        <h3>Technologies</h3>
        <div>{technos}</div>
      </div>
      <div className="web">
        <h3>Website</h3>
        <di>{webpage}</di>
      </div>
      <div className="git">
        <h3>Github</h3>
        <div>{github}</div>
      </div>
    </CardShadow>
  );
};

const CardShadow = styled(motion.div)`
  width: 100%;
  min-height: 100vh;
  overflow-y: scroll;
  background: fixed(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
`;

export default ProjectDetail;
