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
    <section>
      <h1>Question: {questionNum}/ {totalQuestions}</h1>
      <h1 dangerouslySetInnerHTML={{__html: question}} />
      <ul>
      {answers.map(answer=>(
          <li>
          <button
            className="choice"
            key={answer}
            disabled={userAnswer?true:false}
            onClick={callback}
          >
            <span dangerouslySetInnerHTML={{__html:answer}} />
          </button>
          </li>
      ))}
      </ul>
    </section>
  )
}

export default QuestionCard
