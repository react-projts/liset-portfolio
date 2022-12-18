import React from "react";
import styled from "styled-components";

const Home = () => {
  return (
    <Parent>
      <Description>
        <div>
          <h1 className="my-name">Hi, I'm Liset</h1>
        </div>
        <div>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit,
            voluptate
          </p>
        </div>
        <button>See my projects</button>
      </Description>
    </Parent>
  );
};

const Parent = styled.div`
  /* position: relative; */
`;

const Description = styled.div`
  margin: 0;
  position: absolute;
  top: 30%;
  left: 15%;
`;

export default Home;
