import React, { useState } from 'react';

function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    // TODO: Implement your form submission logic here
    // For example, you could send the form data to a server using fetch

    console.log('Form submitted:', { name, email, message });

    // Reset the form fields after submission
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Your name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="email">Email address:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="message">Write Comment:</label>
        <textarea
          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
      </div>
      <button type="submit">SEND A MESSAGE</button>
    </form>
  );
}

export default ContactForm;