import React, { useState } from 'react';

const flashcards = [
  { id: 1, front: "👋 Hello", back: "Merhaba" },
  { id: 2, front: "🍎 Apple", back: "Elma" },
  { id: 3, front: "🧃 Juice", back: "Meyve suyu" },
  { id: 4, front: "🌞 Sun", back: "Güneş" },
];

const Flashcards = ({ darkMode }) => {
  const [index, setIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);

  const card = flashcards[index];

  const handleNext = () => {
    setFlipped(false);
    setIndex((prev) => (prev + 1) % flashcards.length);
  };

  const handlePrev = () => {
    setFlipped(false);
    setIndex((prev) => (prev - 1 + flashcards.length) % flashcards.length);
  };

  return (
    <div className={`min-h-screen flex flex-col items-center justify-center p-6 transition duration-500 ${darkMode ? 'bg-[#0F0B1E] text-white' : 'bg-gradient-to-br from-purple-50 to-pink-100 text-black'}`}>
      <h1 className="text-3xl font-bold mb-6">🃏 Vocabulary Flashcards</h1>

      {/* Flip Card */}
      <div
        className={`flip-card w-72 h-48 perspective mb-6 cursor-pointer ${flipped ? 'flipped' : ''}`}
        onClick={() => setFlipped(!flipped)}
      >
        <div className="flip-card-inner">
          <div className={`flip-card-front rounded-xl flex items-center justify-center text-2xl font-semibold ${darkMode ? 'bg-[#18122B] text-white' : 'bg-white text-purple-700'}`}>
            {card.front}
          </div>
          <div className={`flip-card-back rounded-xl flex items-center justify-center text-2xl font-semibold ${darkMode ? 'bg-purple-700 text-white' : 'bg-purple-600 text-white'}`}>
            {card.back}
          </div>
        </div>
      </div>

      {/* Buttons */}
      <div className="flex gap-4">
        <button onClick={handlePrev} className="px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600">Previous</button>
        <button onClick={handleNext} className="px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600">Next</button>
      </div>
    </div>
  );
};

export default Flashcards;
