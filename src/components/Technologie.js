import React from "react";
import styled from "styled-components";

const Technologie = ({ techno }) => {
  return <Technos>{techno}</Technos>;
};

const Technos = styled.div`
  margin-right: 7px;
  padding: 1px 4px;
  background: #10101a;
  color: white;
  border-radius: 5px;
`;

export default Technologie;
