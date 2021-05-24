import React, { Component } from "react";
import Teacher from "./teacher/teacher";
import img from "../../assets/img/trump.jpg";
import css from "./teacher/teacher.module.css";

const teachers = (props) => {
  //const teachers_data = props.teacher_data;
  const teachers_data = [
    {
      name: "Mr.Tambourine man",
      age: 34,
      designation: "Assistance Prof",
      img: img,
    },
    {
      name: "Mr John Doe",
      age: 34,
      designation: "Assistance Prof",
      img: img,
    },
    {
      name: "Mr omuk tomuk",
      age: 34,
      designation: "Prof",
      img: img,
    },
    {
      name: "Mr Jodu mia",
      age: 34,
      designation: "Assistance Prof",
      img: img,
    },
    {
      name: "Mr modhu mia",
      age: 34,
      designation: "Assistance Prof",
      img: img,
    }
  ];

  let Teachers = Object.keys(teachers_data).map((teacherr) => {
    console.log(teachers_data[teacherr].name);
    return (
      <Teacher
        img={teachers_data[teacherr].img}
        name={teachers_data[teacherr].name}
        designation={teachers_data[teacherr].designation}
        age={teachers_data[teacherr].age}
      />
    );
  });

  return <div className={css.Teachers}>{Teachers}</div>;
};
export default teachers;
