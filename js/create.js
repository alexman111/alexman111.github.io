window.onload = () => {
    const questionForm = document.getElementById('questForm')
    questionForm.addEventListener('submit', (event) => {
        event.preventDefault()
        const questName = document.getElementById('questName').value
        const questDescription = document.getElementById('questDescription').value
        localStorage.setItem("CURRENT_QUEST", JSON.stringify({ questName, questDescription }))

        window.location.href = '/creator.html'
    })
}