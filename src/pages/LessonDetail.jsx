import { useParams } from 'react-router-dom';
import React from 'react';
import LessonDetailTemplate from './LessonDetailTemplate';

const lessonData = {
  1: {
    title: "Greetings & Introductions",
    emoji: "👋",
    description: "In this lesson, you’ll learn how to say hello, introduce yourself, and greet others.",
    vocabulary: [
      { word: "Hello", translation: "Merhaba" },
      { word: "Good morning", translation: "Günaydın" },
      { word: "Good evening", translation: "İyi akşamlar" },
      { word: "How are you?", translation: "Nasılsın?" },
      { word: "Nice to meet you", translation: "Tanıştığımıza memnun oldum" },
    ],
    dialogue: {
      title: "Short Dialogue",
      lines: [
        { speaker: "A", text: "Hello! How are you?" },
        { speaker: "B", text: "I’m fine, thank you. And you?" },
        { speaker: "A", text: "I’m good too. Nice to meet you!" },
        { speaker: "B", text: "Nice to meet you too!" },
      ],
    },
  },
  2: {
    title: "Colors & Shapes",
    emoji: "🎨",
    description: "Learn basic colors, how to describe shapes, and name objects.",
    vocabulary: [
      { word: "Red", translation: "Kırmızı" },
      { word: "Blue", translation: "Mavi" },
      { word: "Yellow", translation: "Sarı" },
      { word: "Square", translation: "Kare" },
      { word: "Circle", translation: "Daire" },
    ],
    dialogue: {
      title: "Short Dialogue",
      lines: [
        { speaker: "A", text: "What color is this?" },
        { speaker: "B", text: "It’s red." },
        { speaker: "A", text: "What shape is it?" },
        { speaker: "B", text: "It’s a circle." },
      ]
    }
  },
  3: {
    title: "Food & Drinks",
    emoji: "🍕",
    description: "Explore common food vocabulary and how to order at a restaurant.",
    vocabulary: [
      { word: "Bread", translation: "Ekmek" },
      { word: "Water", translation: "Su" },
      { word: "Tea", translation: "Çay" },
      { word: "I’m hungry", translation: "Açım" },
      { word: "I’d like", translation: "İstiyorum" },
    ],
    dialogue: {
      title: "Short Dialogue",
      lines: [
        { speaker: "A", text: "I’m hungry." },
        { speaker: "B", text: "Me too. Let’s eat something!" },
        { speaker: "A", text: "I’d like some bread and tea." },
        { speaker: "B", text: "I’ll have water and a sandwich." },
      ]
    }
  },
  4: {
    title: "Daily Routine",
    emoji: "🕒",
    description: "Talk about your day using verbs like wake up, eat, study, sleep.",
    vocabulary: [
      { word: "Wake up", translation: "Uyanmak" },
      { word: "Brush teeth", translation: "Diş fırçalamak" },
      { word: "Go to school", translation: "Okula gitmek" },
      { word: "Eat breakfast", translation: "Kahvaltı yapmak" },
      { word: "Sleep", translation: "Uyumak" },
    ],
    dialogue: {
      title: "Short Dialogue",
      lines: [
        { speaker: "A", text: "What time do you wake up?" },
        { speaker: "B", text: "I wake up at 7 a.m." },
        { speaker: "A", text: "Do you eat breakfast?" },
        { speaker: "B", text: "Yes, I eat with my family." },
      ]
    }
  },
};

const LessonDetail = () => {
  const { id } = useParams();
  const lesson = lessonData[id];

  if (!lesson) {
    return <div className="p-6 text-red-600 text-center text-xl">⚠️ Lesson not found!</div>;
  }

  return <LessonDetailTemplate lesson={lesson} />;
};

export default LessonDetail;
