import React from "react";
import { useState, useContext } from "react";
import userContext from "../context/userContext";

const Login = () => {
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);

  const {setUser} = useContext(userContext);

  const handleSubmit = (e) => {
    e.preventDefault()
    setUser({username,password })
  };
  return (
    <div>
      <h2>Login</h2>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Email"
      />
      <input
        type="text"
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
        }}
        placeholder="Password"
      />
      <button onClick={handleSubmit}>submit</button>
    </div>
  );
};

export default Login;
