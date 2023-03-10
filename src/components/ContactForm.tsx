import React, { useState } from "react";
import "./ContactForm.css";

interface ContactFormProps {
  onSubmit?: (name: string, email: string, message: string) => void;
}

const ContactForm: React.FC<ContactFormProps> = ({ onSubmit }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit?.(name, email, message);
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="contact-form__field">
        <label className="contact-form__label">Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.currentTarget.value)}
          required
          className="contact-form__input"
        />
      </div>
      <div className="contact-form__field">
        <label className="contact-form__label">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.currentTarget.value)}
          required
          className="contact-form__input"
        />
      </div>
      <div className="contact-form__field">
        <label className="contact-form__label">Message:</label>
        <textarea
          id="message"
          value={message}
          onChange={(e) => setMessage(e.currentTarget.value)}
          required
          className="contact-form__textarea"
        ></textarea>
      </div>
      <button type="submit" className="contact-form__submit">
        Submit
      </button>
    </form>
  );
};

export default ContactForm;
