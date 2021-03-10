import React from "react";

export default function HeroAbout() {
  return (
    <div className="hero__about">
      <div className="hero__about__wrapper">
        <img
          src="https://scontent-maa2-1.xx.fbcdn.net/v/t1.0-9/82167545_1031919747253516_9004454775435527450_o.jpg?_nc_cat=104&ccb=1-3&_nc_sid=174925&_nc_ohc=DwEoIrF6INgAX8yApBj&_nc_oc=AQnsUfHXqoRlzg17ZbUXdullP4ZX3fQMiXmxlRh8gMvgCLtC3JFhVB0CGm8V3yOtC5geVpqQs2eNV1rPA9ygdzcz&_nc_ht=scontent-maa2-1.xx&oh=0a03a48ddd8ac344b39e2f052256579f&oe=606D5489"
          alt="animated__avatar"
        />
        <div className="social__links">
          <a href="#">
            <i className="fab fa-codepen"></i>
          </a>
          <a href="#">
            <i className="fab fa-facebook"></i>
          </a>
          <a href="#">
            <i className="fab fa-linkedin"></i>
          </a>
        </div>
        <p>
          I'm a web designer and Developer based in{" "}
          <code>&lt;Bangalore /&gt;</code> India.I have a passion for web design
          and love to create websites for web and mobile devices.
        </p>
      </div>
    </div>
  );
}
