import React from "react";
import GlobalStyle from "./components/GlobalStyle";
import styled from "styled-components";

import Nav from "./components/Nav";
import SideBar from "./components/SideBar";
import Home from "./pages/Home";
import About from "./pages/About";
import Work from "./pages/Work";
import Contact from "./pages/Contact";

import { Routes, Route, useLocation } from "react-router-dom";

function App() {
  const location = useLocation();
  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <Container>
        <NavContainer>
          <SideBar />
        </NavContainer>
        <PagesDiv>
          <Routes location={location} key={location.pathname}>
            <Route path="/" exact element={<Home />} />
            <Route path="/about" exact element={<About />} />
            <Route path="/work" exact element={<Work />} />
            <Route path="/contact" exact element={<Contact />} />
          </Routes>
        </PagesDiv>
      </Container>
    </div>
  );
}

const Container = styled.div`
  display: flex;
`;

const NavContainer = styled.div`
  float: left;
`;

const PagesDiv = styled.div`
  float: right;
`;

export default App;
