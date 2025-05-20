import React from 'react';
import { useNavigate } from 'react-router-dom';

const HeroSection = ({ darkMode }) => {
  const navigate = useNavigate();

  return (
    <div className={`min-h-screen flex flex-col items-center justify-center text-center p-6 transition-all duration-300 ${
      darkMode
        ? 'bg-[#0F0B1E] text-white'
        : 'bg-gradient-to-r from-blue-100 to-purple-200 text-purple-800'
    }`}>
      <h1 className={`text-5xl font-bold mb-4 ${darkMode ? 'text-purple-300' : 'text-purple-800'}`}>
        Welcome to EduBridge
      </h1>
      <p className={`text-lg mb-6 max-w-xl ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
        Fun and interactive language learning for curious minds! Explore lessons, play games, and track your progress.
      </p>
      <button
        onClick={() => navigate('/lessons')}
        className={`px-6 py-3 rounded-full transition-all ${
          darkMode
            ? 'bg-[#A259FF] text-white hover:bg-[#9333EA]'
            : 'bg-purple-600 text-white hover:bg-purple-700'
        }`}
      >
        Start Learning
      </button>
    </div>
  );
};

export default HeroSection;
