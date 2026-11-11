import { useState } from "react";
import "../styles/Forms.css";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [sent, setSent] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();

    if (name.trim() === "" || email.trim() === "" || message.trim() === "") {
      setError("Please fill in all fields.");
      setSent(false);
      return;
    }

    setError("");
    setSent(true);
    setName("");
    setEmail("");
    setMessage("");
  }

  return (
    <div className="page">
      <form className="form-box" onSubmit={handleSubmit}>
        <h1>Contact us</h1>

        <label>Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <label>Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label>Message</label>
        <textarea
          rows="5"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>

        {error && <p className="error-msg">{error}</p>}
        {sent && (
          <p className="success-msg">Thank you! Your message was sent.</p>
        )}

        <button type="submit" className="form-btn">Send message</button>
      </form>
    </div>
  );
}

export default Contact;