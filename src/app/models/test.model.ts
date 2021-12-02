import { Quiz } from "./quiz.model";
export interface Test {
  _id: string;
  name: string;
  time: number;
  numbRetry: number;
  quizs: Quiz[];
}
