const scoreDisplay = document.getElementById('score-display')
const questionDisplay = document.getElementById('question-display')

const questions = [
    {
        quiz: ['value', 'estimate', 'evaluate'],
        options: ['jury', 'assess'],
        correct: 2
    },
    {
        quiz: ['close', 'near', 'next'],
        options: ['trace', 'adjacent'],
        correct: 2
    },
    {
        quiz: ['foreign', 'insight', 'ethnic'],
        options: ['mad', 'exotic'],
        correct: 2
    },
    {
        quiz: ['assume', 'insight', 'weather'],
        options: ['forecast', 'sustainable'],
        correct: 1
    },
    {
        quiz: ['fast', 'quick', 'prompt'],
        options: ['charity', 'rapid'],
        correct: 2
    },
    { 
        quiz: ['dark', 'fair', 'dull'],
        options: ['light', 'meek'],
        correct: 1
    },
    { 
        quiz: ['fat', 'tall', 'slim'],
        options: ['size', 'school'],
        correct: 1
    },
    { 
        quiz: ['happy', 'joyful', 'cheerful'],
        options: ['sad', 'Jubilant'],
        correct: 1
    },
    { 
        quiz: ['lazy', 'lethargy', 'strong'],
        options: ['intern', 'power'],
        correct: 2
    },
    {   quiz: ['Clandestine', 'Sinister', 'Sneaky'],
        options: ['Overt', 'Insidious'],
        correct: 2
    },
    { 
        quiz: ['Chilly', 'Frosty', 'Icy'],
        options: ['Cold', 'Hot'],
        correct: 1
    },
    { 
        quiz: ['Gorgeous', 'Beautiful', 'Lovely'],
        options: ['Ugly', 'Stunning'],
        correct: 2
    },
    {         
        quiz: ['Hard', 'Challenging', 'Tough'],
        options: ['Difficult', 'Easy'],
        correct: 1
    }, 
    {   quiz: ['Confuse', 'Disguise', 'Conceal'],
        options: ['Obfuscate', 'Clarify'],
        correct: 1
    },
    {   quiz: ['Robust', 'Forceful', 'Energetic'],
        options: ['Feeble', 'Vigorous'],
        correct: 2
    },
]

let score = 0
let clicked = []
scoreDisplay.textContent = score

function populateQuestions() {
    questions.forEach(question => {
        const questionBox = document.createElement('div')
        questionBox.classList.add('question-box')

const logoDisplay = document.createElement("h1")
logoDisplay.textContent = "📚"
questionBox.append(logoDisplay)

        question.quiz.forEach(tip => {
           const tipText = document.createElement("p")
           tipText.textContent = tip
           questionBox.append(tipText)


        })

        const questionButtons = document.createElement("div")
        questionButtons.classList.add("question-buttons")
        questionBox.append(questionButtons)

    question.options.forEach((option, optionIndex) => {
            const questionButton = document.createElement('button') 
            questionButton.classList.add('question-button')
            questionButton.textContent = option
        


questionButton.addEventListener('click', () => checkAnswer(questionBox, questionButton, option, optionIndex +1, question.correct))

        
        questionButtons.append(questionButton)
    })

const answerDisplay = document.createElement('div')
answerDisplay.classList.add('answer-display')

questionBox.append(answerDisplay)

        questionDisplay.append(questionBox)
    })
}

populateQuestions()

function checkAnswer(questionBox, questionButton, option, optionIndex, correctAnswer) {
      console.log('option', option)
      console.log('optionIndex', optionIndex)

if (optionIndex === correctAnswer) {
    score++
    scoreDisplay.textContent = score
    addResult(questionBox, "Correct!", 'correct')
} else {
    score++
    scoreDisplay.textContent = score
    addResult(questionBox, "Wrong!", 'wrong')  
 }
 clicked.push(option)
 questionButton.disabled = clicked.includes(option)
}

function addResult(questionBox, answer, className) {
   const answerDisplay = questionBox.querySelector( '.answer-display') 
   answerDisplay.classList.remove('wrong')
   answerDisplay.classList.remove('correct')
   answerDisplay.classList.add(className)
   answerDisplay.textContent = answer
}