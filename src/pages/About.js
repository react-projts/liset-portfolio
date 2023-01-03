import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import photo from "../images/foto_linkedin.jpg";
import resumePDF from "../resumePDF.pdf";

import Button from "../components/Button";

const technos = ["React", "JavaScript", "TypeScript", "Node.js", "Motion"];

const About = () => {
  return (
    <>
      <h1>About me</h1>
      <AboutCont>
        <Description>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Necessitatibus debitis magnam modi veniam dolore? Provident
            explicabo, quam exercitationem expedita facere mollitia aperiam.
            Repellat, quo, velit nisi veniam ipsam dolorem ab odit distinctio
            corporis, illum officia perspiciatis nulla vero est quia ratione
            vel. Voluptas corporis officia fuga voluptate aut fugiat temporibus?
          </p>
          <p>Here are the technologies I work with: </p>
          <TechnosContainer>
            {technos.map((techno) => (
              <Technologie>{techno}</Technologie>
            ))}
          </TechnosContainer>
          <a href={resumePDF} target="_blank" rel="noreferrer">
            <Button text={"Resume"} />
          </a>
        </Description>
        <Image className="image">
          <img src={photo} alt={photo} />
        </Image>
      </AboutCont>
    </>
  );
};

const AboutCont = styled.div`
  display: flex;
  min-height: 90vh;
`;

const Description = styled.div`
  width: 70%;
`;

const Image = styled.div`
  margin: 35px 70px;
  img {
    width: 100%;
    height: 40vh;
    object-fit: cover;
    border-radius: 1rem;
    box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.8);
  }
`;

const Technologie = styled.div`
  margin-right: 7px;
  padding: 1px 4px;
  background: rgba(109, 109, 119, 0.5);
  color: white;
  border-radius: 5px;
`;

const TechnosContainer = styled.div`
  display: flex;
  margin-bottom: 3rem;
`;

export default About;
