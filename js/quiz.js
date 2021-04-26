let questionNumber

window.onload = () => {
    const url = new URL(window.location.href)


    questionNumber = JSON.parse(localStorage.getItem("QUESTION_NUMBER"))
    if (questionNumber == null || questionNumber === -1) {
        questionNumber = 1
    }
    document.getElementById("formTitle").innerHTML =
        "Question №" + questionNumber

    const questNumber = url.searchParams.get('questNumber')

    let quests = JSON.parse(localStorage.getItem("QUESTS"))
    console.log(quests[questNumber])
    const question = quests[questNumber].questions[questionNumber - 1]

    console.log(question)

    document.getElementById("questionText").value = question.questionText

    for (let i = 0; i < question.allVariants.length; i++) {
        const formQuestion = document.getElementById('formQuestion')
        const newChoice = document.createElement("div");

        newChoice.innerHTML = `                 
            <p>${i + 1}.&nbsp;</p>
            <input class="form__input" value=${question.allVariants[i]} readonly="readonly">
            <input type="radio" class="form__radio" name="radioAnswer">
        `
        newChoice.classList.add('form__answer')

        formQuestion.appendChild(newChoice)
    }

    const answerButton = document.getElementById('answerButton')
    answerButton.addEventListener('click', () => {
        const correctAnswers = document.querySelectorAll('.form__radio')
        let userAnswer = -1

        for (let i = 0; i < correctAnswers.length; i++) {
            const correctAnswer = correctAnswers[i]
            if (correctAnswer.checked == true) {
                userAnswer = i
            }
        }

        const questNumber = url.searchParams.get('questNumber')

        let quests = JSON.parse(localStorage.getItem("QUESTS"))
        console.log(quests[questNumber])
        let question = quests[questNumber].questions[questionNumber - 1]
        const rightAnswer = question.rightAnswer

        let scope = JSON.parse(localStorage.getItem("SCOPE"))
        if (scope == null) {
            scope = 0
        }
        if (rightAnswer === userAnswer) {
            scope += 1
        }

        localStorage.setItem("SCOPE", JSON.stringify(scope))

        if (questionNumber == quests[questNumber].questions.length) {
            localStorage.setItem("SCOPE", JSON.stringify(0))
            localStorage.setItem("QUESTION_NUMBER", JSON.stringify(1))
            const finalScope = scope.toString() + "/" + (quests[questNumber].questions.length).toString()
            window.location = '/scope.html?scope=' + finalScope;
        } else {
            localStorage.setItem("QUESTION_NUMBER", JSON.stringify(questionNumber + 1))
            location.reload()
        }
    })
}