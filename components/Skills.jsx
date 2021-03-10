import React from "react";
import Skill from "./Skill";

export default function Skills() {
  const skills = [
    {
      id: 1,
      title: "HTML5",
      progress: "65",
      color: "#D32F2F",
    },
    {
      id: 2,
      title: "CSS3",
      progress: "70",
      color: "#1976D2",
    },
    {
      id: 3,
      title: "JavaScript",
      progress: "70",
      color: "#FFD54F",
    },
    {
      id: 4,
      title: "ReactJS",
      progress: "60",
      color: "#00B0FF",
    },
    {
      id: 5,
      title: "NodeJS",
      progress: "60",
      color: "#8BC34A",
    },
    {
      id: 6,
      title: "Python",
      progress: "70",
      color: "#CDDC39",
    },
    {
      id: 7,
      title: "Bootstrap",
      progress: "45",
      color: "#7C4DFF",
    },
    {
      id: 8,
      title: "NextJS",
      progress: "45",
      color: "#424242",
    },
  ];
  return (
    <div className="skills">
      <div className="skills__wrapper">
        <h1>Skills</h1>
        <div className="skills__container">
          {skills.map((skill) => {
            return (
              <Skill
                key={skill.id}
                title={skill.title}
                progress={skill.progress}
                color={skill.color}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
