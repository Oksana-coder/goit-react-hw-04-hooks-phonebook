import React from 'react';
import PropTypes from 'prop-types';
import './Filter.scss';

const Filter = ({ value, onChange }) => (
  <label className="contact-filter">
    Find contacts by name
    <input
      type="text"
      className="contact-filter__input"
      value={value}
      onChange={onChange} />
  </label>
);

Filter.protoTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Filter;