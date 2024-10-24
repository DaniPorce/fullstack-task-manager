import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const navigate = useNavigate(); // Hook per effettuare il redirect

  function handleLogin() {
    // Credenziali predefinite
    const predefinedUsername = 'user';
    const predefinedPassword = 'password';

    if (username === predefinedUsername && password === predefinedPassword) {
      navigate('/success'); // Redirect alla pagina di successo
    } else {
      navigate('/failure'); // Redirect alla pagina di fallimento
    }
  }

  return (
    <div>
      <h2>Login</h2>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default Login;
