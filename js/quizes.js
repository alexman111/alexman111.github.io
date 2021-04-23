let questionNumber = 1
window.onload = () => {
    const mainContent = document.getElementById('mainContent')

    let quests = JSON.parse(localStorage.getItem("QUESTS"))

    for (i = 0; i < quests.length; i++) {
        let quest = quests[i]
        const newQuiz = document.createElement("div");

        newQuiz.innerHTML = `   
            <div class="quiz__description">             
                <p>${quest.questName}</p>
                <p>${quest.questDescription}</p>
            </div>
        
        `
        mainContent.appendChild(newQuiz)
    }


}