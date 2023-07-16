export default class Question {

    /**
     * 
     * @param {string} text Este es el texto de la pregunta.
     * @param {string[]} choices Este es el array de opciones.
     * @param {string} answer Esta es la respuesta a la pregunta.
     */
    constructor(text, choices, answer) {
        this.text = text
        this.choices = choices
        this.answer = answer
    }

    /**
     * 
     * @param {string} choice Opción escogida por el usuario
     * @returns {boolean} Evaluación True or False de la respuesta correcta
     */

    correctAnswer(choice) {
        return choice === this.answer
    }
}