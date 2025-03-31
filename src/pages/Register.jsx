import React, { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';
import { useNavigate } from 'react-router-dom';

const Register = ({ darkMode }) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleRegister = async (e) => {
    e.preventDefault();
    setError('');
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      navigate('/'); // redirect after register
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className={`min-h-screen flex items-center justify-center p-6 ${darkMode ? 'bg-[#0F0B1E] text-white' : 'bg-purple-50 text-black'}`}>
      <div className="bg-white dark:bg-[#18122B] p-8 rounded-xl shadow-lg w-full max-w-md">
        <h2 className="text-3xl font-bold mb-6 text-center text-purple-700 dark:text-purple-300">📝 Register</h2>
        <form className="flex flex-col gap-4" onSubmit={handleRegister}>
          <input type="email" placeholder="Email" className="p-3 border rounded-lg text-black" value={email} onChange={(e) => setEmail(e.target.value)} />
          <input type="password" placeholder="Password" className="p-3 border rounded-lg text-black" value={password} onChange={(e) => setPassword(e.target.value)} />
          <button type="submit" className="bg-purple-600 text-white py-3 rounded-lg hover:bg-purple-700 transition">Register</button>
        </form>
        {error && <p className="text-red-500 mt-4 text-center">{error}</p>}
      </div>
    </div>
  );
};

export default Register;
