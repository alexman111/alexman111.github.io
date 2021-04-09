let questionNumber = 1
window.onload = () => {
    const addChoice = document.getElementById('addChoice')
    let numberChoices = 2
    let questions = []
    addChoice.addEventListener('click', () => {
        const formQuestion = document.getElementById('formQuestion')
        const newChoice = document.createElement("div");

        newChoice.innerHTML = `                 
            <p>${++numberChoices}.&nbsp;</p>
            <input class="form__input">
            <input type="radio" class="form__radio">
        `
        newChoice.classList.add('form__answer')

        formQuestion.appendChild(newChoice)
    })

    const nextButton = document.getElementById('nextButton')
    nextButton.addEventListener('click', () => {
        const questionText = document.getElementById('questionText').value
        const variants = document.querySelectorAll('.form__input')
        const correctAnswers = document.querySelectorAll('.form__radio')

        let allVariants = []
        let rightAnswer = 0

        for (let i = 0; i < variants.length; i++) {
            const variant = variants[i]
            const correctAnswer = correctAnswers[i]
            allVariants.push(variant.value)
            if (correctAnswer.checked == true) {
                rightAnswer = i
            }
        }
        questionInfo = { questionText, allVariants, rightAnswer }
        questions.push(questionInfo)

        questionNumber += 1
        document.getElementById("formTitle").innerHTML =
            "Question №" + questionNumber

    })

    const createQuest = document.getElementById("createQuest")
    createQuest.addEventListener("click", () => {
        const questName = JSON.parse(localStorage.getItem("CURRENT_QUEST")).questName
        const questDescription = JSON.parse(localStorage.getItem("CURRENT_QUEST")).questDescription
        questInfo = { questName, questDescription, questions }
        let quests = localStorage.getItem("QUESTS")

        if (quests === null) {
            quests = []
        }
        quests.push(questInfo)

        localStorage.setItem("QUESTS", JSON.stringify(quests))

    })
}