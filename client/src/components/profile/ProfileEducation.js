import React from 'react';
import PropTypes from 'prop-types';
import Moment from 'react-moment';

const ProfileEducation = ({
  education: { school, from, to, current, degree, fieldofstudy, description },
}) => {
  return (
    <div>
      <h3 class='text-dark'>{school}</h3>
      <p>
        <Moment format='DD/MM/YYYY'>{from}</Moment>-
        {!to ? 'Now' : <Moment format='DD/MM/YYYY'>{to}</Moment>}
      </p>
      <p>
        <strong>Field Of Study: </strong>
        {fieldofstudy}
      </p>
      <p>
        <strong>Degree: </strong>
        {degree}
      </p>
      <p>
        <strong>Description: </strong>
        {description}
      </p>
    </div>
  );
};

ProfileEducation.propTypes = {
  eeducation: PropTypes.object.isRequired,
};

export default ProfileEducation;
