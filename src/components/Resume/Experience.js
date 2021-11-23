import React from 'react';
import PropTypes from 'prop-types';

import Job from './Experience/Job';
import Publication from './Experience/Publication';

const Experience = ({ data1, data2 }) => (
  <div className="experience">
    <div className="link-to" id="experience" />
    <div className="title">
      <h3>Experience</h3>
    </div>
    {data1.map((job) => (
      <Job
        data={job}
        key={job.company}
      />
    ))}
    <div className="title">
      <h3>Publicaitons</h3>
    </div>
    {data2.map((job) => (
      <Publication
        data={job}
        key={job.company}
      />
    ))}
  </div>
);

Experience.propTypes = {
  data1: PropTypes.arrayOf(PropTypes.shape({
    company: PropTypes.string,
    position: PropTypes.string,
    link: PropTypes.string,
    daterange: PropTypes.string,
    points: PropTypes.arrayOf(PropTypes.string),
  })),
  data2: PropTypes.arrayOf(PropTypes.shape({
    company: PropTypes.string,
    position: PropTypes.string,
    link: PropTypes.string,
    daterange: PropTypes.string,
    points: PropTypes.arrayOf(PropTypes.string),
  })),
};

Experience.defaultProps = {
  data1: [],
  data2: [],
};

export default Experience;
