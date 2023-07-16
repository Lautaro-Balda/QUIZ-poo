const questionTitle = document.getElementById('question')
const quizDiv = document.getElementById('quiz')
const choicesContainer = document.getElementById('choices')
const progressP = document.getElementById('progress')
export default class Ui {
    constructor() {

    }

    /**
     * 
     * @param {string} text Pregunta a renderizar
     */
    showQuestion(text) {
        questionTitle.innerText = text
    }

    /**
     * 
     * @param {string[]} choices 
     */
    showChoices(choices, callback) {
        // opción válida y preferida por mi 

        // choices.map(choice => {
        //     choicesContainer.innerHTML += `<button class="button">${choice}</button>`
        // })
        choicesContainer.innerHTML = ''
        for (let i = 0; i < choices.length; i++) {
            const button = document.createElement('button')
            button.innerText = choices[i]
            button.classList.add('button')
            choicesContainer.appendChild(button)
            button.addEventListener('click', () => callback(choices[i]))
        }
    }

    /**
     * 
     * @param {number} score Puntaje del usuario.
     */
    showScores(score) {
        const puntoOPuntos = score == 1 ? 'punto' : 'puntos'
        const quizEndHtml = `
        <h1>Resultado</h1>
        <h2>Tu puntaje es de ${score} ${puntoOPuntos}</h2>
        `
        quizDiv.innerHTML = quizEndHtml
    }

    /**
     * 
     * @param {number} preguntaActual Indice actual en la serie de preguntas.
     * @param {number} cantPreguntas Indice final.
     */
    showProgress(preguntaActual, cantPreguntas) {
        progressP.innerHTML = `Pregunta ${preguntaActual} de ${cantPreguntas}`
    }
}