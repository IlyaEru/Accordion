import React, { useState } from 'react';

import { QuestionViewContainer } from './QuestionView.style';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';
import { QuestionViewHeader, ShowButton } from './QuestionView.style';

interface QuestionViewProps {
  title: string;
  info: string;
}

export default function QuestionView({ info, title }: QuestionViewProps) {
  const [isShowInfo, setIsShowInfo] = useState(false);

  return (
    <QuestionViewContainer>
      <QuestionViewHeader>
        {title}
        <ShowButton onClick={() => setIsShowInfo(!isShowInfo)}>
          {isShowInfo ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </ShowButton>
      </QuestionViewHeader>
      <p className={`question__view-info ${isShowInfo && 'show-info'}`}>
        {info}
      </p>
    </QuestionViewContainer>
  );
}
