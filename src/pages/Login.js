import { useState } from "react";
import "../styles/Forms.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loggedInAs, setLoggedInAs] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (email.trim() === "" || password === "") {
      setError("Please fill in both fields.");
      return;
    }

    if (password.length < 6) {
      setError("Password must be at least 6 characters.");
      return;
    }

    setError("");
    setLoggedInAs(email);
    setPassword("");
  }

  function handleLogout() {
    setLoggedInAs("");
    setEmail("");
  }

  if (loggedInAs) {
    return (
      <div className="page">
        <div className="form-box">
          <h1>Welcome back!</h1>
          <p className="success-msg">You are logged in as {loggedInAs}</p>
          <button className="form-btn" onClick={handleLogout}>
            Log out
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="page">
      <form className="form-box" onSubmit={handleSubmit}>
        <h1>Login</h1>

        <label>Email</label>
        <input
          type="email"
          placeholder="you@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label>Password</label>
        <input
          type="password"
          placeholder="At least 6 characters"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        {error && <p className="error-msg">{error}</p>}

        <button type="submit" className="form-btn">Login</button>
      </form>
    </div>
  );
}

export default Login;