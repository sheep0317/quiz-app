import { Answer } from "./answer.model";
import { AnswerT } from "./answerT.model";
export interface Quiz {
  id: string;
  content: string;
  quizType: boolean;
  answers: AnswerT[];
}