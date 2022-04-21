import { FaBars, FaTimes } from 'react-icons/fa';
import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';

export const Nav = styled.nav`
  background: linear-gradient(90deg, rgb(120 120 120) 0%, rgb(26, 23, 23) 100%);
  height: 80px;
  width: 100%;
  display: flex;
  justify-content: center;
  ${'' /* align-items: center; */}
  font-size: 2rem;
  border-bottom: solid 1px black;
  color: white;
`;

export const NavLink = styled(Link)`
  color: white;
  text-decoration: none;
  padding: 0.5rem 1rem;
  &.active {
    color: #15cdfc;
  }
  &:hover {
    background-color: #1888ff;
    border-radius: 4px;
    transition: all 0.2s ease-out;
  }
`;

export const NavMenu = styled.div`
  display: grid;
  grid-template-columns: repeat(5, auto);
  grid-gap: 10px;
  list-style: none;
  text-align: center;
  width: 70vw;
  justify-content: end;
  margin-right: 2rem;
`;

export const Bars = styled(FaBars)`
  display: none;
  color: #fff;
  @media(max-width: 390px) {
    display: block;
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const Times = styled(FaTimes)`
  display: none;
  color: #fff;
  @media(max-width: 390px) {
    display: block;
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const NavList = styled.ul`
    display: none;
    width: 100%;
    height: 60vh;
    position: absolute; 
    top: 0px; 
    padding: 0px;
    left: 40%;
    opacity: 1;
    transition: all 0.5s ease;

    ${(props) => props.openMenu && `
      display: flex;
      flex-direction: column;
      top: 70px;  
      background: #242222;
      left: 0;
      opacity: 1;
      transition: all 0.5s ease;
      z-index: 1;
    `}
     
    @media(min-width: 391px) {
      height: fit-content;
      display: flex;
      position: absolute;
      right: 0;
      font-size: 1.8rem;
      cursor: pointer;
    }
`;

export const NavListItem = styled.li`
  display: flex;
  align-items: center;
`;

export const NavBtnLink = styled(Link)`
  border-radius: 4px;
  background: #256ce1;
  padding: 10px 22px;
  color: #fff;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  /* Second Nav */
  margin-left: 24px;
  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #010606;
  }
`;


// export const NavBtn = styled.nav`
//   display: flex;
//   align-items: center;
//   margin-right: 24px;
//   /* Third Nav */
//   /* justify-content: flex-end;
//   width: 100vw; */
//   @media screen and (max-width: 768px) {
//     display: none;
//   }
// `;