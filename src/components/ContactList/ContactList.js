import React from 'react';
import ContactListItem from '../ContactListItem';
import PropTypes from 'prop-types';
import './ContactList.scss';

const ContactList = ({ contacts, onDeleteContact }) => (
  <ul>
    {contacts.map(({ id, name, number}) => (
      <li key={id} className="contact-list__item">
        <ContactListItem
          name={name}
          number={number}
          onDeleteContact={() => onDeleteContact(id)}
        />
      </li>
    ))}
  </ul>
);

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default ContactList;