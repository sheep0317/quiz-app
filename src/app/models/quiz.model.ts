import { Answer } from "./answer.model";
export interface Quiz {
  id: string;
  content: string;
  quizType: boolean;
  answers: Answer[];
}