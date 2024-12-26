import { useState } from "react";
import { Link } from "react-router-dom";
import { useLoginUser } from "../hooks/useLogin";

function Login() {
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const { loginUser, isLogging } = useLoginUser();

  return (
    <div className="login-container">
      <div className="login-card">
        <div className="login-left">
          <h1 className="login-logo">
            Ka<span style={{ color: "#4CAF50" }}>n</span>ban
          </h1>
          <form>
            <h2>Welcome Back!</h2>
            <p>Please log in to your account</p>
            <input
              type="email"
              placeholder="Email"
              className="login-input"
              required
            />
            <input
              type="password"
              placeholder="Password"
              className="login-input"
              required
            />
            <button className="login-button">Log in</button>
          </form>
          <p className="login-register">
            Haven&apos;t got account <Link to="/register">register</Link> first.
          </p>
        </div>
        <div className="login-right">
          <h2>Welcome to Kanban</h2>
          <p>
            Organize your tasks and boost your productivity! Log in to start
            managing your day.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
