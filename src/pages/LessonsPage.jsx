import React from 'react';
import { Link } from 'react-router-dom';

const lessons = [
  {
    id: 1,
    title: "Greetings & Introductions",
    description: "Learn how to say hello, introduce yourself, and greet others.",
    emoji: "👋",
  },
  {
    id: 2,
    title: "Colors & Shapes",
    description: "Identify colors, shapes, and describe them easily.",
    emoji: "🎨",
  },
  {
    id: 3,
    title: "Food & Drinks",
    description: "Talk about meals, favorite dishes, and ordering food.",
    emoji: "🍕",
  },
  {
    id: 4,
    title: "Daily Routine",
    description: "Describe your day using verbs and time expressions.",
    emoji: "🕒",
  },
  {
    id: 'flashcards',
    emoji: '🃏',
    title: 'Flashcards',
    description: 'Practice vocabulary with interactive flip cards.',
    route: '/flashcards',
  }
];

const LessonsPage = ({ darkMode }) => {
  return (
    <div className={`min-h-screen p-6 transition duration-500 ${darkMode ? 'bg-[#0F0B1E] text-white' : 'bg-purple-50 text-black'}`}>
      <h2 className="text-4xl font-bold text-center mb-8">
        📚 Available Lessons
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {lessons.map((lesson) => (
          <div
            key={lesson.id}
            className={`rounded-2xl shadow-lg p-6 border transform transition-transform duration-300 ease-in-out hover:scale-105 hover:rotate-1 hover:shadow-2xl hover:-translate-y-1 ${
              darkMode ? 'bg-[#18122B] border-white/10 text-white' : 'bg-white border-purple-100 text-black'
            }`}
          >
            <div className="text-5xl mb-2">{lesson.emoji}</div>
            <h3 className="text-2xl font-semibold mb-2">{lesson.title}</h3>
            <p className="mb-4">{lesson.description}</p>
            <Link
              to={lesson.route ? lesson.route : `/lesson/${lesson.id}`}
              className="bg-purple-600 text-white px-4 py-2 rounded-full hover:bg-purple-700 transition"
            >
              Start Lesson
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LessonsPage;
