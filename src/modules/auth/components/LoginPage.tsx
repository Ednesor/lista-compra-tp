import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthStore } from '../store/authStore';

export const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  
  const navigate = useNavigate();
  const login = useAuthStore((state) => state.login);
  const error = useAuthStore((state) => state.error);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const success = login({ email, pass });

    if (success) {
      navigate('/shopping-list');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="email" onChange={(e) => setEmail(e.target.value)} />
      <input type="password" onChange={(e) => setPass(e.target.value)} />
      <button type="submit">Entrar</button>
      
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </form>
  );
};