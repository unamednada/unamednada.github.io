import './Email.css';
import { useState } from 'react';

function Email() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const mailTo = `mailto:dias.gustavo.dias@gmail.com?from=${email}&body=${message}`;

  return (
    <div className="email-main">
      <form>
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
        <a href={ mailTo }><button type="button">Send</button></a>
      </form>
    </div>
  );
}

export default Email;
