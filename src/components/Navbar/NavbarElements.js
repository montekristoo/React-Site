import {
    NavLink as Link
} from "react-router-dom";
import styled from "styled-components";
import {
    FaBars
} from "react-icons/fa";

export const Nav = styled.nav `
  background: #ea9d0d;
  position: sticky;
  top: 0;
  width: 100%;
  height: 85px;
  display: flex;
  justify-content: space-between;
  padding: 0.2rem calc((100vw - 1000px) / 2);
  z-index: 12;
  /* Third Nav */
  /* justify-content: flex-start; */
`;

export const NavLink = styled(Link)
`
  color: black;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  &.active {
    color: #000000;
  }
`;

export const Bars = styled(FaBars)
`
  display: none;
  color: #000000;
  z-index: 12;
  @media screen and (max-width: 1080px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 100%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const NavMenu = styled.div `
  display: flex;
  gap: 30px;
  align-items: center;
  margin-right: 30px;
  font-family: "Roboto", sans-ferif;
  font-weight: bold;
  transition: 0.5s ease;
  /* Second Nav */
  /* margin-right: 24px; */
  /* Third Nav */
  /* width: 100vw;
white-space: nowrap; */
  @media screen and (max-width: 1080px) {
    display: none;
  }
`;

export const NavBtn = styled.nav `
  display: flex;
  align-items: center;
  /* Third Nav */
  /* justify-content: flex-end;
width: 100vw; */
  cursor: pointer;
  &:hover {
    transition: all 0.2s ease-in-out;
    color: white;
  }
  @media screen and (max-width: 768px) {
    display: block;
  }
`;

export const NavBtnLink = styled(Link)
`
  border-radius: 4px;
  background: #808080;
  padding: 10px 25px;
  color: #pink;
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
    color: #pink;
  }
`;