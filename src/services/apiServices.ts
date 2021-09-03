export type Question = {
  category: string;
  correct_answer: string;
  difficulty: string;
  incorrect_answers: string[];
  question: string;
  type: string;
};

export enum Difficulty {
  EASY = "easy",
  MEDIUM = "medium",
  HARD = "hard",
}

export type Questions = Question & { answers: string[] };

const BASE_URL = 'https://opentdb.com/api.php'

export const getQuizQuestions = async (amount: number, difficulty: Difficulty): Promise<Questions[]> => {
  const data = await (await fetch(
    `${BASE_URL}?amount=${amount}&difficulty=${difficulty}&type=multiple`
  )).json();
  return data.results.map((question: Question) => ({
    ...question,
    answers: shuffleAnswers([...question.incorrect_answers, question.correct_answer])
  }))
};

const shuffleAnswers = (answers:string[]) : string[] =>  {
  return [...answers].sort(()=>Math.random()-0.5)
}