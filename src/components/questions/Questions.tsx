import React, { useState } from 'react';
import questionsData from '../../data';
import QuestionView from '../questionView/QuestionView';
import { QuestionsContainer } from './Questions.style';

export default function Questions() {
  const [questions, setQuestions] = useState(questionsData);
  return (
    <QuestionsContainer>
      {questions.map((question) => (
        <QuestionView
          key={question.id}
          info={question.info}
          title={question.title}
        />
      ))}
    </QuestionsContainer>
  );
}
