import React from "react";
import CloseIcon from "@material-ui/icons/Close";
import { IconButton } from "@material-ui/core";

export default function Navigation({ isNav, setNav }) {
  console.log(isNav);
  return (
    <div className={`navigation ${!isNav && "navigation__hide"}`}>
      <div className="button__close__nav">
        <IconButton onClick={() => (isNav ? setNav(false) : setNav(true))}>
          <CloseIcon style={{ fill: "red" }} />
        </IconButton>
      </div>
      <div className="mobile__nav ">
        <a href="#">About</a>
        <a href="#">Skills</a>
        <a href="#">Projects</a>
        <a href="#">Contact</a>
      </div>
    </div>
  );
}
