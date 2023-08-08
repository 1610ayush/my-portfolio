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
      align-items: center; // Center items horizontally for mobile
      padding: 2rem 1rem;
      
      #logo {
        margin: 1rem 0; // Adjusted margin for better spacing
      }
      ul {
        padding: 2rem 0; 
        flex-direction: column; // Stack items vertically for mobile
        align-items: center; // Center items horizontally for mobile
        li {
          padding: 0;
          margin-bottom: 1rem; // Added margin-bottom for vertical spacing between list items
        }
      }
    }
  `;
  


export default NavBar