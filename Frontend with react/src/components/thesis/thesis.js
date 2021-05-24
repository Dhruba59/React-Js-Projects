import React from "react";
import { Accordion } from "react-bootstrap";
import Project from "../projects/project";
import css from '../projects/project.module.css';

const data = [
  {
    title: "Sentiment analysis using CNN",
    members: {
      supervisor: "Mr Bekkol",
      students: ["Tambourine Man", "Mr X"],
    },
    abstract:
      "sdfsdf sdfsd sdfsd f sdfsdf sd fsdsd fs dsd fsdfsdfss dfsdfsdf sdfsdf sdfsdfsdf sdfs f sdf sdf sdfsdfsd fsdfsd fsdfsdf",
    details: " fsdf sdfsdfs sdfsd fsdfsdfsd f sdfsd fsdfsdsdfsfsdfsd",
    topics: ["Machine Learning", "Recommendation system"],
    date: "12/5/2020",
  },

  {
    title: "Movie recommendation using K nearest algo",
    members: {
      supervisor: "Mr Nam nai",
      students: ["Mr Abul Mia ", "Mr John Doe"],
    },
    abstract:
      "sdfsdf sdfsd sdfsd f sdfsdf sd fsdsd fs dsd fsdfsdfss dfsdfsdf sdfsdf sdfsdfsdf sdfs f sdf sdf sdfsdfsd fsdfsd fsdfsdf",
    details: " fsdf sdfsdfs sdfsd fsdfsdfsd f sdfsd fsdfsdsdfsfsdfsd",
    topics: ["Machine Learning", "Recommendation system"],
    date: "12/5/2020",
  },
];

const thesis = (props) => {
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

export default thesis;
