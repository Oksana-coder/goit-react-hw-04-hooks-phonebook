import React from 'react';
import PropTypes from 'prop-types';
import './ContactListItem.scss';

const ContactListItem = ({ name, number, onDeleteContact }) => (
  <>
    <span>{name}: {number}</span>
    <button type="button" className="contact-list__delete-btn" onClick={onDeleteContact}>Delete</button>
  </>
);

ContactListItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactListItem;