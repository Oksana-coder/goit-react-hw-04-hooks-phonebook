import { useState } from 'react';
import './ContactForm.scss';

export default function ContactForm({ onSubmit }) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChange = event => {
    const { name, value } = event.currentTarget;

    switch (name) {
      case 'name':
        setName(value);
        break;
      
      case 'number':
        setNumber(value);
        break;
      
      default:
        return;
    }
  };
  
  const handleSubmit = event => {
    event.preventDefault();

    onSubmit({name, number});
    setName('');
    setNumber('');
  };
  
    return (
      <form className="contact-form" onSubmit={handleSubmit}>
      <label className="contact-form__label">
        Name
        <input
          type="text"
          className="contact-form__input"
          name="name"
          value={name}
          onChange={handleChange}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
        />
      </label>
      <label className="contact-form__label">
        Number
        <input
          type="tel"
          className="contact-form__input"  
          name="number"
          value={number}
          onChange={handleChange}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          required
        />
      </label>
        <button
          type="submit"
          className="contact-form__btn"
        >
        Add contact
      </button> 
    </form>
    )
  }