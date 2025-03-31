import LessonDetailTemplate from './LessonDetailTemplate';

const GreetingsLesson = () => {
  return (
    <LessonDetailTemplate
      emoji="👋"
      title="Greetings & Introductions"
      description="In this lesson, you’ll learn how to say hello, introduce yourself, and greet others."
      vocabulary={[
        { word: 'Hello', meaning: 'Merhaba' },
        { word: 'Good morning', meaning: 'Günaydın' },
        { word: 'How are you?', meaning: 'Nasılsın?' },
      ]}
      dialogue={[
        { speaker: 'Ali', text: 'Hello! My name is Ali.' },
        { speaker: 'Emma', text: 'Hi Ali! I’m Emma. Nice to meet you.' },
        { speaker: 'Ali', text: 'Nice to meet you too!' },
      ]}
    />
  );
};

export default GreetingsLesson;
