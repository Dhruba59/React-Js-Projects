import React from "react";
import { Accordion } from "react-bootstrap";
import Project from "./project";
import css from './project.module.css';

const data = [
  {
    title: "Music Recommendation using facial emotion",
    members: {
      supervisor: "Md Forhad rabbi",
      students: ["Dhruba", "Nipom"],
    },
    abstract:
      "sdfsdf sdfsd sdfsd f sdfsdf sd fsdsd fs dsd fsdfsdfss dfsdfsdf sdfsdf sdfsdfsdf sdfs f sdf sdf sdfsdfsd fsdfsd fsdfsdf",
    details: " fsdf sdfsdfs sdfsd fsdfsdfsd f sdfsd fsdfsdsdfsfsdfsd",
    topics: ["Machine Learning", "Recommendation system"],
    date: "12/5/2020",
  },

  {
    title: "Music Recommendation using facial emotion",
    members: {
      supervisor: "Md Forhad rabbi",
      students: ["Dhruba ", "Nipom"],
    },
    abstract:
      "sdfsdf sdfsd sdfsd f sdfsdf sd fsdsd fs dsd fsdfsdfss dfsdfsdf sdfsdf sdfsdfsdf sdfs f sdf sdf sdfsdfsd fsdfsd fsdfsdf",
    details: " fsdf sdfsdfs sdfsd fsdfsdfsd f sdfsd fsdfsdsdfsfsdfsd",
    topics: ["Machine Learning", "Recommendation system"],
    date: "12/5/2020",
  },
];

const projects = (props) => {
  let project_data = data;

  let Projects = Object.keys(project_data).map((project) => {
    return (
      <Project
        title={project_data[project].title}
        date={project_data[project].date}
        abstract={project_data[project].abstract}
        topics={project_data[project].topics}
        members={project_data[project].members.students}
        supervisor={project_data[project].members.supervisor}
      />
    );
  });
  return <div className={css.Accordion}>{Projects}</div>;
};

export default projects;
