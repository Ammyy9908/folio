import React from "react";
import Link from "next/link";

export default function Hero({ isNav, setNav }) {
  console.log(isNav);
  return (
    <div className="hero__top">
      <nav>
        <div className="nav_wrapper">
          <div className="links">
            <Link href="">
              <a>About</a>
            </Link>
            <Link href="">
              <a>Skills</a>
            </Link>
            <Link href="">
              <a>Projects</a>
            </Link>
            <Link href="">
              <a>Contact</a>
            </Link>
          </div>
          <div
            className="toggle__wrapper"
            onClick={() => (isNav ? setNav(false) : setNav(true))}
          >
            <div className="toggle"></div>
          </div>
        </div>
      </nav>
      <div className="hero__content">
        <h1>I'm Sumit</h1>
        <h2>Frontend Developer</h2>
        <a href="#" className="btn__resume">
          Download Resume
        </a>
      </div>
    </div>
  );
}
