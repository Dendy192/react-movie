import styled from "styled-components";
/* font 
font-family: "Acme", sans-serif;
font-family: "Roboto", sans-serif;
font-family: "Vast Shadow", cursive;
font-family: "Agdasima", sans-serif;
*/

//!header.tsx
export const NavbarWrapper = styled.div`
  .logo {
    color: #fff;
    font-size: 2.2rem;
    letter-spacing: 2px;
    background: linear-gradient(to right, #eaff00, #f8d4d4);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-family: "Vast Shadow", serif;
  }

  .navLinks,
  .loginBtn {
    margin-left: auto;
  }

  .navLinks {
  }
  .links {
    font-family: "Acme", sans-serif;
    font-size: 20px;
    color: #ffffe4;
  }
  @media (max-width: 1060px) {
    .logo {
      font-size: 1.6rem;
    }
    .links,
    .logoBtn {
      font-size: 12px;
    }
  }
`;

//!Header.tsx end

//!Displayitems.tsx starts

export const MovieShowsWrapper = styled.div``;
