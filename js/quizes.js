let questionNumber = 1
window.onload = () => {
    const mainContent = document.getElementById('mainContent')

    let quests = JSON.parse(localStorage.getItem("QUESTS"))

    for (i = 0; i < quests.length; i++) {
        let quest = quests[i]
        const newQuiz = document.createElement("div");
        newQuiz.value = i;
        newQuiz.innerHTML = `   
            <div class="quiz__description">             
                <p>${quest.questDescription}</p>
            </div>
        `
        mainContent.appendChild(newQuiz)
        newQuiz.onclick = () => {
            window.location = '/quiz.html?questNumber=' + newQuiz.value;
        }
    }



}