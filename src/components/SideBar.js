import React from "react";
import styled from "styled-components";

import Linkedin from "../icons/linkedin-in.svg";
import Instagram from "../icons/instagram.svg";
import Github from "../icons/github.svg";

const SideBar = () => {
  return (
    <Parent>
      <IconsContainer>
        <a
          href="https://www.linkedin.com/in/liset-bastidas-developer-devops/"
          target="_blank"
          rel="noreferrer"
        >
          <li>
            <img src={Linkedin} alt="linkedin" />
          </li>
        </a>
        <a
          href="https://github.com/lizzieb1416"
          target="_blank"
          rel="noreferrer"
        >
          <li>
            <img src={Github} alt="github" />
          </li>
        </a>
        <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
          <li>
            <img src={Instagram} alt="instagram" />
          </li>
        </a>
      </IconsContainer>
    </Parent>
  );
};

const Parent = styled.div`
  position: sticky;
  width: 13vh;
  height: 100vh;
  text-align: center;
  padding-top: 50px;
`;

const IconsContainer = styled.ul`
  position: absolute;
  bottom: 15%;
  left: 50%;
  transform: translateX(-50%);
  list-style: none;

  li {
    padding-top: 20px;
  }

  img {
    width: 25px;
    filter: brightness(0) invert(1);
  }
`;

export default SideBar;
