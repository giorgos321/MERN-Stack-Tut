import React, { Fragment } from 'react';
import Moment from 'react-moment';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { deleteEducation } from '../../actions/profile';

const Education = ({ education, deleteEducation }) => {
  const onClick = (id) => {
    deleteEducation(id);
  };

  const educations = education.map((edu) => (
    <tr key={edu._id}>
      <td>{edu.school}</td>
      <td className='hide-sm'>{edu.degree}</td>
      <td>
        <Moment format='DD/MM/YYYY'>{edu.from}</Moment> -{' '}
        {edu.to === null ? (
          'Now'
        ) : (
          <Moment format='DD/MM/YYYY'>{edu.to}</Moment>
        )}
      </td>
      <td className='hide-sm'>{edu.fieldofstudy}</td>
      <td>
        <button className='btn btn-danger' onClick={(e) => onClick(edu._id)}>
          Delete
        </button>
      </td>
    </tr>
  ));

  return (
    <Fragment>
      {!(Array.isArray(education) && education.length) ? (
        <div className='my-2'>
          <h1>Add Educations</h1>
          <small>You have no Educations on your profile</small>
        </div>
      ) : (
        <Fragment>
          <h2 className='my-2'>Education Credentials</h2>
          <table className='table'>
            <thead>
              <tr>
                <th>School</th>
                <th className='hide-sm'>Degree</th>
                <th className='hide-sm'>Years</th>
                <th className='hide-sm'>Field of Study</th>
                <th></th>
              </tr>
            </thead>
            <tbody>{educations}</tbody>
          </table>
        </Fragment>
      )}
    </Fragment>
  );
};

Education.propTypes = {
  education: PropTypes.array.isRequired,
  deleteEducation: PropTypes.func.isRequired,
};

export default connect(null, { deleteEducation })(Education);
