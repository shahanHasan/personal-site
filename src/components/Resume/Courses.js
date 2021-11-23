import React from 'react';
import PropTypes from 'prop-types';

import Course from './Courses/Course';
import CourseSelf from './Courses/CourseSelf';

const getRows = (courses) => courses.sort((a, b) => {
  let ret = 0;
  if (a.university > b.university) ret = -1;
  else if (a.university < b.university) ret = 1;
  else if (a.number > b.number) ret = 1;
  else if (a.number < b.number) ret = -1;
  return ret;
}).map((course, idx) => (
  <Course
    data={course}
    key={course.title}
    last={idx === courses.length - 1}
  />
));

const getRowsSelf = (courses) => courses.sort((a, b) => {
  let ret = 0;
  if (a.author > b.author) ret = -1;
  else if (a.author < b.author) ret = 1;
  else if (a.title > b.title) ret = 1;
  else if (a.title < b.title) ret = -1;
  return ret;
}).map((course, idx) => (
  <CourseSelf
    data={course}
    key={course.title}
    last={idx === courses.length - 1}
  />
));

const Courses = ({ data1, data2 }) => (
  <div className="courses">
    <div className="link-to" id="courses" />
    <div className="title">
      <h3>Undergraduate Courses</h3>
    </div>
    <ul className="course-list">
      {getRows(data1)}
    </ul>
    <div className="title">
      <h3>Self Taught Materials</h3>
    </div>
    <ul className="course-list">
      {getRowsSelf(data2)}
    </ul>
  </div>
);

Courses.propTypes = {
  data1: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    number: PropTypes.string,
    link: PropTypes.string,
    university: PropTypes.string,
  })),
  data2: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    link: PropTypes.string,
    author: PropTypes.string,
  })),
};

Courses.defaultProps = {
  data1: [],
  data2: [],
};

export default Courses;
