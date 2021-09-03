import React from 'react'
import { Attempt } from '../App'

interface Props {
  question: string;
  answers: string[];
  callback: any;
  userAnswer: Attempt|undefined;
  questionNum: number;
  totalQuestions: number;
}

const QuestionCard : React.FC <Props> = ({question,answers,callback,questionNum,totalQuestions,userAnswer}) => {
  return (
    <div>
      <p>Question: {questionNum}/ {totalQuestions}</p>
      <div dangerouslySetInnerHTML={{__html: question}} />
      {answers.map(answer=>(
          <button
            key={answer}
            disabled={userAnswer?true:false}
            onClick={callback}
          >
            {answer}
          </button>
      ))}
    </div>
  )
}

export default QuestionCard
