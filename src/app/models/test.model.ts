import { Quiz } from "./quiz.model";
export interface Test {
  id?: string;
  name: string;
  time: number;
  numbRetry: number;
  quizs: Quiz[];
}
