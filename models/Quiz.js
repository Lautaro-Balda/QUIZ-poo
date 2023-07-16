// @ts-check
import Question from './Question.js'
export default class Quiz {

    questionIndex = 0
    score = 0

    /**
     * 
     * @param {Question[]} questions 
     */
    constructor(questions) {
        this.questions = questions
    }

    /**
     * 
     * @returns {Question} Retorna una instancia de Question.
     */
    getQuestionIndex() {
        return this.questions[this.questionIndex]
    }


    isEnded() {
        return this.questionIndex === this.questions.length
    }
    /**
     * 
     * @param {string} answer Un string de una posible respuesta de parte del usuario
     */
    guess(answer) {

        console.log(answer)
        if (this.getQuestionIndex().correctAnswer(answer)) {
            this.score++
        }
        this.questionIndex++
    }
}

