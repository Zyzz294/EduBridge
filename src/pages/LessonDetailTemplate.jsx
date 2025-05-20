import React from 'react';

const LessonDetailTemplate = ({ lesson }) => {
  return (
    <div className="min-h-screen bg-white p-6 text-center">
      <div className="text-5xl mb-4">{lesson.emoji}</div>
      <h1 className="text-3xl font-bold text-purple-700 mb-2">{lesson.title}</h1>
      <p className="text-gray-700 mb-6">{lesson.description}</p>

      {/* Vocabulary Section */}
      {lesson.vocabulary && (
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-purple-600 mb-4">📚 Vocabulary</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {lesson.vocabulary.map((item, index) => (
              <div
                key={index}
                className="bg-purple-100 rounded-lg p-4 shadow-md text-left"
              >
                <p className="text-xl font-semibold text-purple-800">{item.word}</p>
                <p className="text-gray-700">{item.translation}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Dialogue Section */}
      {lesson.dialogue && (
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-purple-600 mb-4">{lesson.dialogue.title}</h2>
          <div className="space-y-2 max-w-xl mx-auto">
            {lesson.dialogue.lines.map((line, index) => (
              <p key={index} className="text-lg text-gray-800">
                <span className="font-bold text-purple-700">{line.speaker}:</span> {line.text}
              </p>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default LessonDetailTemplate;
