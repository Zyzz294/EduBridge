import React, { useState, useEffect } from 'react';
import { Routes, Route, Link, Navigate } from 'react-router-dom';
import HeroSection from './components/HeroSection';
import LessonsPage from './pages/LessonsPage';
import Flashcards from './pages/Flashcards';
import LessonDetail from './pages/LessonDetail';
import Login from './pages/Login';
import Register from './pages/Register';
import { onAuthStateChanged, signOut, updateProfile } from 'firebase/auth';
import { auth } from './firebase';

export default function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  const PrivateRoute = ({ element }) => {
    return user ? element : <Navigate to="/login" replace />;
  };

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-[#0F0B1E] text-white' : 'bg-white text-black'} transition duration-500`}>
      {/* Modern Glassmorphism Navbar */}
      <nav
        className={`backdrop-blur-md shadow-lg px-10 py-4 flex items-center justify-between border-b transition duration-300 ${
          darkMode
            ? 'bg-[#18122B]/70 text-white border-white/10'
            : 'bg-white/70 text-black border-black/10'
        }`}
      >
        {/* Left: Logo & Brand */}
        <div className="flex items-center gap-2 font-bold text-xl">
          🎓 <span>EduBridge</span>
        </div>

        {/* Center: Navigation Links */}
        <div className="flex gap-6 justify-center items-center">
          <Link
            to="/"
            className="font-semibold text-lg px-4 py-2 hover:bg-purple-200/30 rounded-xl transition-all duration-300"
          >
            🏠 Home
          </Link>
          <Link
            to="/lessons"
            className="font-semibold text-lg px-4 py-2 hover:bg-purple-200/30 rounded-xl transition-all duration-300"
          >
            📚 Lessons
          </Link>
          <Link
            to="/flashcards"
            className="font-semibold text-lg px-4 py-2 hover:bg-purple-200/30 rounded-xl transition-all duration-300"
          >
            🃏 Flashcards
          </Link>
        </div>

        {/* Right: Auth + Toggle */}
        <div className="flex gap-4 items-center">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className={`px-3 py-1 text-sm font-medium rounded-full transition duration-300 ${
              darkMode ? 'bg-purple-600 text-white hover:bg-purple-700' : 'bg-purple-200 text-black hover:bg-purple-300'
            }`}
          >
            {darkMode ? '🌞 Light' : '🌙 Dark'} Mode
          </button>

          {user ? (
            <>
              <span className="text-sm font-medium">👋 {user.displayName || user.email.split('@')[0]}</span>
              <button
                onClick={() => signOut(auth)}
                className="px-4 py-2 bg-red-500 text-white rounded-xl hover:bg-red-600 transition-all"
              >
                🚪 Logout
              </button>
            </>
          ) : (
            <>
              <Link
                to="/login"
                className="px-4 py-2 hover:bg-purple-200/30 rounded-xl transition-all duration-300"
              >
                🔑 Login
              </Link>
              <Link
                to="/register"
                className="bg-[#A259FF] text-white px-4 py-2 rounded-xl font-semibold hover:bg-[#9333EA] transition-all duration-300"
              >
                📝 Register
              </Link>
            </>
          )}
        </div>
      </nav>

      {/* Page Routes */}
      <Routes>
        <Route path="/" element={<HeroSection darkMode={darkMode} />} />
        <Route path="/lessons" element={<PrivateRoute element={<LessonsPage darkMode={darkMode} />} />} />
        <Route path="/lesson/:id" element={<PrivateRoute element={<LessonDetail darkMode={darkMode} />} />} />
        <Route path="/flashcards" element={<PrivateRoute element={<Flashcards darkMode={darkMode} />} />} />
        <Route path="/login" element={<Login darkMode={darkMode} />} />
        <Route path="/register" element={<Register darkMode={darkMode} />} />
      </Routes>
    </div>
  );
}
