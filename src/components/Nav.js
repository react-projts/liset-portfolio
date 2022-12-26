import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <StyledNav>
      <h2>
        <Link id="logo" to="/">
          Chiqui
        </Link>
      </h2>
      <ul>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/work">Work</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </StyledNav>
  );
};

const StyledNav = styled.nav`
  min-height: 5vh;
  display: flex;
  /* margin: auto; */
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background: rgba(42, 43, 56, 0.5);
  position: sticky;

  ul {
    display: flex;
    list-style: none;
  }

  li {
    padding-left: 30px;

    &:hover {
      font-weight: bold;
    }
  }

  a {
    color: white;
    text-decoration: none;
  }
`;

export default Nav;
