import React, { useEffect, useState } from "react";
import { Course } from "../models/course";
import { useParams } from "react-router";
import agent from "../actions/agent";

const DescriptionPage = () => {
  const [course, setCourse] = useState<Course>();
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    agent.Courses.getById(id).then((response) => {
      setCourse(response);
    });
  }, [id]);

  return (
    <h1>{course?.title}</h1>
  );
};

export default DescriptionPage;