import React, { Component } from "react";
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from "./NavbarElements";

import { AiOutlineArrowDown } from "react-icons/ai";
import { faHeart, faHeartBroken } from "react-icons/fa";
import DisplayNav from "./togglingNav";
import { FaBars } from "react-icons/fa";
import { GrClose } from "react-icons/gr";

const Navbar = (props) => {
  const [open, setOpen] = React.useState(false);

  function toggle() {
    return setOpen(!open);
  }

  return (
    <>
      <Nav>
        <NavLink to="/">
          <h1>Babin John</h1>
        </NavLink>
          <Bars onClick={toggle} />
        <NavMenu>
          <NavLink to="/about" activeStyle className="ref">
            About
          </NavLink>
        </NavMenu>
      </Nav>
      <div className={open ? "navBurgerMenu-active" : "navBurgerMenu-off"}>
        <GrClose
          className="icon"
          style={{
            position: "absolute",
            top: "10px",
            right: "10px",
          }}
          size="18px"
          color="white"
          cursor="pointer"
          onClick={toggle}
        />
        <ul className="nav--burger--menu--links">
        <li><a href="/about">About</a></li>
        <li><a href="/resurse">Resurse</a></li>
        <li><a href="/liste">Liste</a></li>
          <li><a href="/istorie">Istorie</a></li>
          </ul>
      </div>
    </>
  );
};

export default Navbar;
