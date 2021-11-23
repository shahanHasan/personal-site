import React from 'react';
import PropTypes from 'prop-types';

const Publication = ({ data }) => (
  <article className="jobs-container">
    <header>
      <h4><a href={data.link}>{data.Conference}</a></h4>
      <p className="daterange"> {data.daterange} - {data.Location}</p>
    </header>
    <ul className="points">
      {data.points.map((point) => (
        <li key={point}>{point}</li>
      ))}
    </ul>
  </article>
);

Publication.propTypes = {
  data: PropTypes.shape({
    link: PropTypes.string.isRequired,
    Conference: PropTypes.string.isRequired,
    Location: PropTypes.string.isRequired,
    daterange: PropTypes.string.isRequired,
    points: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
};

export default Publication;
