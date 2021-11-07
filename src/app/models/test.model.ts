import { Quiz } from "./quiz.model";
export interface Test {
  _id: string;
  name: string;
  time: number;
  numberRetry: number;
  quizs: Quiz[];
}
