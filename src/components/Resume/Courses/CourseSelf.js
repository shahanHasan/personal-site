import React from 'react';
import PropTypes from 'prop-types';

const CourseSelf = ({ data, last }) => (
  <li className="course-container">
    <a href={data.link}>
      <h4 className="course-number">{data.author}:</h4>
      <p className="course-name">{data.title}</p>
    </a>
    {!last && <div className="course-dot"><p className="course-name"> &#8226;</p></div>}
  </li>
);

CourseSelf.propTypes = {
  data: PropTypes.shape({
    link: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
  last: PropTypes.bool,
};

CourseSelf.defaultProps = {
  last: false,
};
export default CourseSelf;
