// @ts-check
import { questions } from "./data/questions.js"
import Quiz from "./models/Quiz.js"
import Ui from "./models/UI.js"

/**
 * 
 * @param {Quiz} quiz Instancia del objeto Quiz
 * @param {Ui} ui Instancia del objeto Ui
 */
const renderPage = (quiz, ui) => {
    if (!quiz.isEnded()) {
        ui.showQuestion(quiz.getQuestionIndex().text)
        ui.showChoices(quiz.getQuestionIndex().choices, (currentChoice) => {
            quiz.guess(currentChoice)
            renderPage(quiz, ui)
        })
        ui.showProgress(quiz.questionIndex, questions.length)
    } else {
        ui.showScores(quiz.score)
    }

}

function main() {
    const ui = new Ui()
    const quiz = new Quiz(questions)

    renderPage(quiz, ui)
}

main()