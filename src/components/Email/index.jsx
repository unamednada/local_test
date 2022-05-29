import './Email.css';
import { useState } from 'react';

function Email() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const submit = (event) => {
    event.preventDefault();
    console.log(email, message);
  };

  return (
    <div className="email-main">
      <form onSubmit={ submit }>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Email"
          value={ email }
          onChange={ ({ target: { value } }) => setEmail(value) }
        />
        <textarea
          name="message"
          id="message"
          placeholder="Message"
          value={ message }
          onChange={ ({ target: { value } }) => setMessage(value) }
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
}

export default Email;
