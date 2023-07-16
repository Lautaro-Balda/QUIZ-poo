import { data } from "../data/data.js"
import Question from "../models/Question.js"

export const questions = data.map(question => new Question(question.question, question.choices, question.asnwer))
