import React from "react";
import styled from "styled-components";

const NavBar = () => {
    return (
        <StyledNav>
          <h1>
            <a href="#" id="logo" className="text-2xl font-bold">Ayush Ranjan</a>
          </h1>
          <ul>
            <li>
              <a href="#work" className="text-xl hover:underline">Work</a>
            </li>
            <li>
              <a href="#projects" className="text-xl hover:underline">Projects</a>
            </li>
            <li>
              <a href="#skills" className="text-xl hover:underline">Skills</a>
            </li>
            <li>
              <a href="#achievements" className="text-xl hover:underline">Achievements</a>
            </li>
            <li>
              <a href="#contact" className="text-xl hover:underline">Contact</a>
            </li>
            <li>
              <a href="https://drive.google.com/file/d/1iogFssRAYUdMDwGT4dVi69qsQVkqIXNG/view?pli=1" className="bg-black text-black px-4 py-2 rounded hover:bg-gray-500">Resume</a>
            </li>
          </ul>
        </StyledNav>
      );
    };
    
    const StyledNav = styled.nav`
      min-height: 10vh;
      display: flex;
      margin: auto;
      justify-content: space-between;
      align-items: center;
      padding: 1rem 5rem;
      background: #282828;
      position: sticky;
      top: 0;
      z-index: 10;
      a {
        color: white;
        text-decoration: none;
      }
      ul {
        display: flex;
        list-style: none;
      }
      #logo {
        font-size: 1.5rem;
        font-family: "Lobster", cursive;
        font-weight: lighter;
      }
      li {
        padding-left: 5rem;
        position: relative;
      }
      @media (max-width: 1300px) {
        flex-direction: column;
        padding: 2rem 1rem;
        #logo {
          display: inline-block;
          margin: 1rem;
        }
        ul {
          padding: 2rem;
          justify-content: space-around;
          width: 100%;
          li {
            padding: 0;
          }
        }
      }
    `;

export default NavBar