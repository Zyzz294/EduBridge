import React from 'react';
import { useNavigate } from 'react-router-dom';

const BackButton = () => {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate(-1)}
      className="mt-4 mb-6 px-4 py-2 bg-purple-200 text-purple-800 font-semibold rounded-lg hover:bg-purple-300 transition"
    >
      ⬅️ Back
    </button>
  );
};

export default BackButton;
